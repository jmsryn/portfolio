'use client';

import { useEffect, useState } from 'react';
// Card components removed - using custom styling instead

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

interface VisitStats {
  totalVisits: number;
  uniqueIPs: number;
  countries: Record<string, number>;
  recentVisits: VisitData[];
  lastUpdated: string;
}

export default function VisitorDashboard() {
  const [stats, setStats] = useState<VisitStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/visit');
        if (!response.ok) {
          throw new Error('Failed to fetch visitor data');
        }
        const data = await response.json();
        setStats(data.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load visitor data');
      } finally {
        setLoading(false);
      }
    };

    fetchStats();

    // Refresh data every 30 seconds
    const interval = setInterval(fetchStats, 30000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="w-full max-w-4xl mx-auto p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-1/3"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-24 bg-gray-200 rounded"></div>
            ))}
          </div>
          <div className="h-64 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full max-w-4xl mx-auto p-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800">Error: {error}</p>
        </div>
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="w-full max-w-4xl mx-auto p-6">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-yellow-800">No visitor data available yet.</p>
        </div>
      </div>
    );
  }

  const topCountries = Object.entries(stats.countries)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10);

  return (
    <div className="w-full max-w-6xl mx-auto p-6 space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Visitor Analytics
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Track where your portfolio visitors are coming from
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Visits</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.totalVisits}</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
              <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Unique Visitors</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.uniqueIPs}</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
              <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Countries</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{Object.keys(stats.countries).length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Top Countries */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Top Countries
        </h3>
        <div className="space-y-3">
          {topCountries.map(([country, count], index) => (
            <div key={country} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="flex items-center justify-center w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold">
                  {index + 1}
                </span>
                <span className="text-gray-900 dark:text-white font-medium">{country}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${(count / stats.totalVisits) * 100}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400 w-8 text-right">
                  {count}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Visits */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Recent Visits
        </h3>
        <div className="space-y-3">
          {stats.recentVisits.slice(0, 10).map((visit) => (
            <div key={`${visit.ip}-${visit.timestamp}`} className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700 last:border-b-0">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {visit.city && visit.country
                      ? `${visit.city}, ${visit.country}`
                      : visit.country || 'Unknown Location'
                    }
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {new Date(visit.timestamp).toLocaleString()} • {visit.ip}
                  </p>
                </div>
              </div>
              <div className="text-xs text-gray-400 dark:text-gray-500">
                {visit.isp && visit.isp.length < 20 ? visit.isp : 'Unknown ISP'}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* World Map Placeholder */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Visitor Map
        </h3>
        <div className="h-64 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <svg className="w-12 h-12 text-gray-400 dark:text-gray-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            <p className="text-gray-500 dark:text-gray-400">
              World map visualization would go here
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
              (Can be enhanced with a mapping library like Leaflet or Mapbox)
            </p>
          </div>
        </div>
      </div>

      {/* Last Updated */}
      <div className="text-center text-sm text-gray-500 dark:text-gray-400">
        Last updated: {new Date(stats.lastUpdated).toLocaleString()}
      </div>
    </div>
  );
}
