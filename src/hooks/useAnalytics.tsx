
import { useEffect } from 'react';

interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export const useAnalytics = () => {
  const trackEvent = ({ action, category, label, value }: AnalyticsEvent) => {
    // Log to console for development
    console.log('Analytics Event:', { action, category, label, value });

    // Track with Google Analytics if available
    if (window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value
      });
    }

    // Track with Facebook Pixel if available
    if ((window as any).fbq) {
      (window as any).fbq('track', action, {
        category,
        label,
        value
      });
    }
  };

  const trackPageView = (path: string) => {
    console.log('Page View:', path);

    if (window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: path
      });
    }
  };

  // Track button clicks automatically
  useEffect(() => {
    const handleButtonClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const button = target.closest('button, a[role="button"]');
      
      if (button) {
        const text = button.textContent?.trim() || '';
        const href = (button as HTMLAnchorElement).href;
        
        trackEvent({
          action: 'click',
          category: 'Button',
          label: text || href || 'Unknown Button'
        });
      }
    };

    document.addEventListener('click', handleButtonClick);
    
    return () => document.removeEventListener('click', handleButtonClick);
  }, []);

  return { trackEvent, trackPageView };
};
