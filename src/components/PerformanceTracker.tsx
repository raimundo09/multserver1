
import { useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const PerformanceTracker = () => {
  useEffect(() => {
    // Track page load performance
    const trackPerformance = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        
        // Log performance metrics
        console.log('Page Load Time:', loadTime, 'ms');
        
        // Track with analytics if available
        if (window.gtag) {
          window.gtag('event', 'page_load_time', {
            event_category: 'Performance',
            value: Math.round(loadTime)
          });
        }
      }
    };

    // Track when page is fully loaded
    if (document.readyState === 'complete') {
      trackPerformance();
    } else {
      window.addEventListener('load', trackPerformance);
    }

    return () => {
      window.removeEventListener('load', trackPerformance);
    };
  }, []);

  return null;
};

export default PerformanceTracker;
