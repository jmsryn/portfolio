import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

interface VisitData {
  ip: string;
  userAgent: string;
  timestamp: string;
  country?: string;
  city?: string;
  region?: string;
  lat?: number;
  lon?: number;
  timezone?: string;
  isp?: string;
}

interface IPGeolocationResponse {
  query: string;
  status: string;
  country: string;
  countryCode: string;
  region: string;
  regionName: string;
  city: string;
  zip: string;
  lat: number;
  lon: number;
  timezone: string;
  isp: string;
  org: string;
  as: string;
}

// Get the real IP address from various headers
function getClientIP(request: NextRequest): string {
  // Check various headers for the real IP
  const forwardedFor = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  const cfConnectingIP = request.headers.get('cf-connecting-ip');

  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }

  if (realIP) {
    return realIP;
  }

  if (cfConnectingIP) {
    return cfConnectingIP;
  }

  // Fallback for localhost/development
  return 'unknown';
}

// Get geolocation data from IP
async function getGeolocationData(ip: string): Promise<Partial<IPGeolocationResponse> | null> {
  try {
    // Using ip-api.com (free tier allows 45 requests per minute)
    const response = await fetch(`http://ip-api.com/json/${ip}?fields=status,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as`);

    if (!response.ok) {
      throw new Error(`Geolocation API error: ${response.status}`);
    }

    const data: IPGeolocationResponse = await response.json();

    if (data.status === 'success') {
      return {
        country: data.country,
        region: data.regionName,
        city: data.city,
        lat: data.lat,
        lon: data.lon,
        timezone: data.timezone,
        isp: data.isp,
      };
    }

    return null;
  } catch (error) {
    console.error('Error fetching geolocation data:', error);
    return null;
  }
}

// Store visit data in a JSON file
async function storeVisitData(visitData: VisitData): Promise<void> {
  const dataDir = path.join(process.cwd(), 'data');
  const visitsFile = path.join(dataDir, 'visits.json');

  try {
    // Ensure data directory exists
    await fs.mkdir(dataDir, { recursive: true });

    // Read existing data
    let visits: VisitData[] = [];
    try {
      const existingData = await fs.readFile(visitsFile, 'utf-8');
      visits = JSON.parse(existingData);
  } catch {
    // File doesn't exist or is empty, start with empty array
  }

    // Add new visit
    visits.push(visitData);

    // Keep only last 1000 visits to prevent file from growing too large
    if (visits.length > 1000) {
      visits = visits.slice(-1000);
    }

    // Write back to file
    await fs.writeFile(visitsFile, JSON.stringify(visits, null, 2));
  } catch (error) {
    console.error('Error storing visit data:', error);
  }
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const ip = getClientIP(request);
    const userAgent = request.headers.get('user-agent') || 'unknown';
    const timestamp = new Date().toISOString();

    // Get geolocation data
    const geoData = await getGeolocationData(ip);

    const visitData: VisitData = {
      ip,
      userAgent,
      timestamp,
      ...geoData,
    };

    // Store the visit data
    await storeVisitData(visitData);

    return NextResponse.json({
      success: true,
      message: 'Visit logged successfully',
      data: {
        ip,
        timestamp,
        location: geoData ? {
          country: geoData.country,
          city: geoData.city,
          region: geoData.region,
        } : null,
      }
    });
  } catch (error) {
    console.error('Error logging visit:', error);
    return NextResponse.json(
      { error: 'Failed to log visit' },
      { status: 500 }
    );
  }
}

export async function GET(): Promise<NextResponse> {
  try {
    const dataDir = path.join(process.cwd(), 'data');
    const visitsFile = path.join(dataDir, 'visits.json');

    let visits: VisitData[] = [];
    try {
      const existingData = await fs.readFile(visitsFile, 'utf-8');
      visits = JSON.parse(existingData);
    } catch {
      // File doesn't exist or is empty
    }

    // Return visit statistics
    const totalVisits = visits.length;
    const uniqueIPs = new Set(visits.map(v => v.ip)).size;
    const countries = visits.reduce((acc, visit) => {
      if (visit.country) {
        acc[visit.country] = (acc[visit.country] || 0) + 1;
      }
      return acc;
    }, {} as Record<string, number>);

    const recentVisits = visits.slice(-10).reverse(); // Last 10 visits

    return NextResponse.json({
      success: true,
      data: {
        totalVisits,
        uniqueIPs,
        countries,
        recentVisits,
        lastUpdated: new Date().toISOString(),
      }
    });
  } catch (error) {
    console.error('Error fetching visit data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch visit data' },
      { status: 500 }
    );
  }
}
