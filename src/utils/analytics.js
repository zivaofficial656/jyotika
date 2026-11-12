// Jyotika Spa Production Analytics & Conversion Event Utility
// Supports Google Analytics 4 (GA4) and Google Tag Manager (GTM)

const GA_MEASUREMENT_ID = (import.meta.env.VITE_GA_MEASUREMENT_ID || '').trim();
const GTM_ID = (import.meta.env.VITE_GTM_ID || '').trim();

let isGaInitialized = false;
let isGtmInitialized = false;

/**
 * Initializes Google Tag Manager if a valid GTM container ID is configured.
 */
export function initGTM() {
  if (typeof window === 'undefined' || isGtmInitialized || !GTM_ID) return;

  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(GTM_ID)}`;
    document.head.appendChild(script);

    isGtmInitialized = true;
  } catch {
    // Fail silently in restricted sandbox or adblock environments
  }
}

/**
 * Initializes Google Analytics 4 if a valid GA4 Measurement ID is configured.
 */
export function initGA() {
  if (typeof window === 'undefined' || isGaInitialized || !GA_MEASUREMENT_ID) return;

  try {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_MEASUREMENT_ID)}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, {
      send_page_view: false, // Page views managed via React Router in trackPageView
      anonymize_ip: true,
    });

    isGaInitialized = true;
  } catch {
    // Fail silently in restricted sandbox or adblock environments
  }
}

/**
 * Tracks a page view in GA4 and dataLayer on route navigation.
 */
export function trackPageView(path, title) {
  if (typeof window === 'undefined') return;

  if (window.gtag && GA_MEASUREMENT_ID) {
    window.gtag('event', 'page_view', {
      page_path: path,
      page_title: title || document.title,
      page_location: window.location.href,
    });
  }

  if (window.dataLayer) {
    window.dataLayer.push({
      event: 'page_view',
      page_path: path,
      page_title: title || document.title,
    });
  }
}

/**
 * Tracks click-to-call conversion event.
 */
export function trackCallClick(locationLabel = 'general') {
  if (typeof window === 'undefined') return;

  if (window.gtag && GA_MEASUREMENT_ID) {
    window.gtag('event', 'click_to_call', {
      event_category: 'contact',
      event_label: locationLabel,
      value: 1,
    });
  }

  if (window.dataLayer) {
    window.dataLayer.push({
      event: 'call_click',
      click_location: locationLabel,
    });
  }
}

/**
 * Tracks click-to-WhatsApp conversion event.
 */
export function trackWhatsAppClick(locationLabel = 'floating_button') {
  if (typeof window === 'undefined') return;

  if (window.gtag && GA_MEASUREMENT_ID) {
    window.gtag('event', 'whatsapp_click', {
      event_category: 'contact',
      event_label: locationLabel,
      value: 1,
    });
  }

  if (window.dataLayer) {
    window.dataLayer.push({
      event: 'whatsapp_click',
      click_location: locationLabel,
    });
  }
}

/**
 * Tracks online booking request submission.
 */
export function trackBookingSubmission(serviceName = 'General Spa Inquiry') {
  if (typeof window === 'undefined') return;

  if (window.gtag && GA_MEASUREMENT_ID) {
    window.gtag('event', 'generate_lead', {
      event_category: 'booking',
      event_label: serviceName,
      value: 1,
    });
  }

  if (window.dataLayer) {
    window.dataLayer.push({
      event: 'booking_submission',
      service_requested: serviceName,
    });
  }
}

/**
 * Tracks contact inquiry form submission.
 */
export function trackContactSubmission() {
  if (typeof window === 'undefined') return;

  if (window.gtag && GA_MEASUREMENT_ID) {
    window.gtag('event', 'contact_inquiry', {
      event_category: 'inquiry',
      value: 1,
    });
  }

  if (window.dataLayer) {
    window.dataLayer.push({
      event: 'contact_submission',
    });
  }
}
