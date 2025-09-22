'use client';

import { useEffect } from 'react';

interface VisitTrackerProps {
  children?: React.ReactNode;
}

export default function VisitTracker({ children }: VisitTrackerProps) {
  useEffect(() => {
    const trackVisit = async () => {
      try {
        // Only track visits in production and not for bots/crawlers
        const isProduction = process.env.NODE_ENV === 'production';
        const isBot = /bot|crawl|spider|slurp/i.test(navigator.userAgent);

        if (!isProduction || isBot) {
          return;
        }

        // Check if we've already tracked this session
        const sessionKey = 'visit_tracked';
        if (sessionStorage.getItem(sessionKey)) {
          return;
        }

        // Make the API call to log the visit
        const response = await fetch('/api/visit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          // Mark this session as tracked
          sessionStorage.setItem(sessionKey, 'true');
        }
      } catch (error) {
        console.error('Failed to track visit:', error);
      }
    };

    // Track the visit
    trackVisit();
  }, []);

  return <>{children}</>;
}
