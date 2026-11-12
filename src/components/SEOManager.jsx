import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BUSINESS_INFO } from '../data/businessInfo';
import { FAQS } from '../data/faqData';
import { SERVICES } from '../data/servicesData';
import { initGA, initGTM, trackPageView } from '../utils/analytics';

// Production Canonical Origin (falls back to https://jyotika.online)
const BASE_URL = (
  import.meta.env.VITE_SITE_URL || 'https://jyotika.online'
).replace(/\/+$/, '');

const OG_IMAGE_URL = `${BASE_URL}/og-image.jpg`;
const LOGO_URL = `${BASE_URL}/jyotika-spa-logo.png`;
const GSC_VERIFICATION = import.meta.env.VITE_GSC_VERIFICATION || '';

const SEO_ROUTES = {
  '/': {
    title: 'Jyotika Spa Thane | Luxury Spa & Body Massage',
    description:
      'Discover Jyotika Spa in Thane for relaxing wellness experiences and massage treatments. Explore our spa services and enquire about appointments.',
    canonical: `${BASE_URL}/`,
    schemaType: 'DaySpa',
    breadcrumbName: 'Home',
  },
  '/about': {
    title: 'About Jyotika Spa | Wellness & Relaxation in Thane',
    description:
      'Learn about Jyotika Spa in Gandhi Nagar, Thane. Dedicated to mindful relaxation, certified therapist care, and authentic musculoskeletal rejuvenation.',
    canonical: `${BASE_URL}/about`,
    schemaType: 'AboutPage',
    breadcrumbName: 'About Us',
  },
  '/services': {
    title: 'Spa Treatments in Thane | Jyotika Spa',
    description:
      'Explore Swedish massage, deep tissue massage, Balinese therapy, aromatherapy, and couple rituals at Jyotika Spa in Ashar Tiara Complex, Thane.',
    canonical: `${BASE_URL}/services`,
    schemaType: 'ItemPage',
    breadcrumbName: 'Spa Treatments',
  },
  '/experience': {
    title: 'The Spa Experience in Thane | Jyotika Spa',
    description:
      'Immerse in the calming ambiance of Jyotika Spa in Thane. Explore our private therapy suites, soothing aromatics, and immaculate hygiene standards.',
    canonical: `${BASE_URL}/experience`,
    schemaType: 'WebPage',
    breadcrumbName: 'Experience',
  },
  '/couple-spa': {
    title: 'Couple Spa in Thane | Jyotika Spa',
    description:
      'Experience a romantic couple massage and private sanctuary ritual at Jyotika Spa in Thane. Unhurried botanical wellness for partners.',
    canonical: `${BASE_URL}/couple-spa`,
    schemaType: 'ItemPage',
    breadcrumbName: 'Couple Spa',
  },
  '/packages': {
    title: 'Curated Wellness Packages & Offers | Jyotika Spa Thane',
    description:
      'Discover curated spa packages and rejuvenating wellness journeys at Jyotika Spa in Ashar Tiara Complex, Thane.',
    canonical: `${BASE_URL}/packages`,
    schemaType: 'ItemPage',
    breadcrumbName: 'Packages',
  },
  '/offers': {
    title: 'Curated Wellness Offers & Seasonal Packages | Jyotika Spa Thane',
    description:
      'Explore seasonal wellness packages, couple retreat specials, and restorative massotherapy offerings at Jyotika Spa, Gandhi Nagar, Thane.',
    canonical: `${BASE_URL}/offers`,
    schemaType: 'ItemPage',
    breadcrumbName: 'Offers',
  },
  '/gallery': {
    title: 'Photo Gallery | Jyotika Spa Thane',
    description:
      'View authentic photographs of private massage suites, couple sanctuary rooms, and serene interiors at Jyotika Spa in Gandhi Nagar, Thane.',
    canonical: `${BASE_URL}/gallery`,
    schemaType: 'ImageGallery',
    breadcrumbName: 'Gallery',
  },
  '/videos': {
    title: 'Video Tours & Ambiance | Jyotika Spa Thane',
    description:
      'Watch HD video walkthroughs and serene suite atmosphere tours of Jyotika Spa at Ashar Tiara Complex in Thane.',
    canonical: `${BASE_URL}/videos`,
    schemaType: 'VideoGallery',
    breadcrumbName: 'Video Tours',
  },
  '/faq': {
    title: 'Frequently Asked Questions | Jyotika Spa Thane',
    description:
      'Common questions regarding appointment booking, massage techniques, therapist etiquette, and hygiene at Jyotika Spa in Thane.',
    canonical: `${BASE_URL}/faq`,
    schemaType: 'FAQPage',
    breadcrumbName: 'FAQ',
  },
  '/contact': {
    title: 'Contact Jyotika Spa | Gandhi Nagar, Thane',
    description:
      'Visit Jyotika Spa at Ashar Tiara Commercial Complex, Gandhi Nagar, Thane. Call +91 9203824656 or get Google Maps directions to our boutique spa.',
    canonical: `${BASE_URL}/contact`,
    schemaType: 'ContactPage',
    breadcrumbName: 'Contact Us',
  },
  '/booking': {
    title: 'Book an Appointment | Jyotika Spa Thane',
    description:
      'Reserve your massage or couple spa treatment online at Jyotika Spa, 1st Floor, Ashar Tiara Commercial Complex, Gandhi Nagar, Thane.',
    canonical: `${BASE_URL}/booking`,
    schemaType: 'WebPage',
    breadcrumbName: 'Book Appointment',
  },
  '/privacy': {
    title: 'Privacy Policy | Jyotika Spa Thane',
    description:
      'Guest confidentiality and privacy policies for Jyotika Spa, Ashar Tiara Commercial Complex, Thane.',
    canonical: `${BASE_URL}/privacy`,
    schemaType: 'WebPage',
    breadcrumbName: 'Privacy Policy',
  },
  '/terms': {
    title: 'Terms & Conditions | Jyotika Spa Thane',
    description:
      'Appointment policies, booking guidelines, and terms of service for Jyotika Spa, Thane.',
    canonical: `${BASE_URL}/terms`,
    schemaType: 'WebPage',
    breadcrumbName: 'Terms & Conditions',
  },
};

export default function SEOManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    initGA();
    initGTM();
  }, []);

  useEffect(() => {
    const currentPath =
      pathname.length > 1 ? pathname.replace(/\/+$/, '') : '/';

    let seo = SEO_ROUTES[currentPath];

    // Dynamic resolution for /treatments/:slug
    if (!seo && currentPath.startsWith('/treatments/')) {
      const slug = currentPath.replace('/treatments/', '');
      const treatment = SERVICES.find((s) => s.slug === slug);
      if (treatment) {
        seo = {
          title: `${treatment.name} in Thane | Jyotika Spa`,
          description: `${treatment.shortDescription} Experience professional ${treatment.name} at Jyotika Spa, Ashar Tiara Complex, Gandhi Nagar, Thane.`,
          canonical: `${BASE_URL}/treatments/${slug}`,
          schemaType: 'Service',
          breadcrumbName: treatment.name,
          serviceData: treatment,
        };
      }
    }

    if (!seo) {
      seo = {
        title: '404 Page Not Found | Jyotika Spa Thane',
        description:
          'The requested page was not found on Jyotika Spa website. Return to our sanctuary home.',
        canonical: `${BASE_URL}${currentPath}`,
        schemaType: 'WebPage',
        breadcrumbName: '404 Not Found',
        is404: true,
      };
    }

    // 1. Title
    document.title = seo.title;

    // Helper for upserting meta tags cleanly
    const setMetaTag = (selector, attributeName, attributeValue, content) => {
      let element = document.head.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Primary Meta Tags
    setMetaTag('meta[name="description"]', 'name', 'description', seo.description);
    setMetaTag(
      'meta[name="robots"]',
      'name',
      'robots',
      seo.is404 ? 'noindex, nofollow' : 'index, follow'
    );

    // Google Search Console Verification Meta Tag (if configured)
    if (GSC_VERIFICATION) {
      setMetaTag(
        'meta[name="google-site-verification"]',
        'name',
        'google-site-verification',
        GSC_VERIFICATION
      );
    }

    // 3. Open Graph Tags
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', seo.title);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', seo.description);
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', seo.canonical);
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', OG_IMAGE_URL);
    setMetaTag('meta[property="og:image:width"]', 'property', 'og:image:width', '1200');
    setMetaTag('meta[property="og:image:height"]', 'property', 'og:image:height', '630');
    setMetaTag(
      'meta[property="og:image:alt"]',
      'property',
      'og:image:alt',
      'Jyotika Spa Thane - Luxury Wellness Sanctuary'
    );
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', 'website');
    setMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', 'Jyotika Spa');
    setMetaTag('meta[property="og:locale"]', 'property', 'og:locale', 'en_IN');

    // 4. Twitter Card Tags
    setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', seo.title);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', seo.description);
    setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', OG_IMAGE_URL);

    // 5. Canonical Link
    let canonicalLink = document.head.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', seo.canonical);

    // 6. Schema.org JSON-LD Handling
    let schemaScript = document.getElementById('dynamic-jsonld-schema');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'dynamic-jsonld-schema';
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }

    // Core Business Entity
    const coreBusinessEntity = {
      '@type': ['DaySpa', 'LocalBusiness', 'HealthAndBeautyBusiness'],
      '@id': `${BASE_URL}/#business`,
      name: BUSINESS_INFO.name,
      alternateName: 'Jyotika Spa Thane',
      description: BUSINESS_INFO.shortDescription,
      url: `${BASE_URL}/`,
      telephone: BUSINESS_INFO.contact.phone,
      priceRange: '₹₹₹',
      image: OG_IMAGE_URL,
      logo: LOGO_URL,
      hasMap: BUSINESS_INFO.mapsUrl,
      paymentAccepted: BUSINESS_INFO.paymentMethods.join(', '),
      currenciesAccepted: 'INR',
      address: {
        '@type': 'PostalAddress',
        streetAddress: `${BUSINESS_INFO.address.floor}, ${BUSINESS_INFO.address.complex}, ${BUSINESS_INFO.address.area}`,
        addressLocality: BUSINESS_INFO.address.city,
        addressRegion: BUSINESS_INFO.address.state,
        postalCode: BUSINESS_INFO.address.pincode,
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: BUSINESS_INFO.geo.latitude,
        longitude: BUSINESS_INFO.geo.longitude,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
          ],
          opens: '10:00',
          closes: '21:30',
        },
      ],
      areaServed: [
        { '@type': 'City', name: 'Thane' },
        { '@type': 'AdministrativeArea', name: 'Maharashtra' },
      ],
    };

    // Breadcrumb Schema
    const breadcrumbSchema = {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `${BASE_URL}/`,
        },
      ],
    };

    if (currentPath !== '/') {
      if (currentPath.startsWith('/treatments/')) {
        breadcrumbSchema.itemListElement.push({
          '@type': 'ListItem',
          position: 2,
          name: 'Spa Treatments',
          item: `${BASE_URL}/services`,
        });
        breadcrumbSchema.itemListElement.push({
          '@type': 'ListItem',
          position: 3,
          name: seo.breadcrumbName,
          item: seo.canonical,
        });
      } else {
        breadcrumbSchema.itemListElement.push({
          '@type': 'ListItem',
          position: 2,
          name: seo.breadcrumbName,
          item: seo.canonical,
        });
      }
    }

    const schemaGraph = [coreBusinessEntity, breadcrumbSchema];

    // Page-specific schema additions
    if (currentPath === '/faq') {
      schemaGraph.push({
        '@type': 'FAQPage',
        mainEntity: FAQS.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      });
    } else if (currentPath === '/services') {
      schemaGraph.push({
        '@type': 'ItemList',
        name: 'Jyotika Spa Treatments Menu',
        itemListElement: SERVICES.map((srv, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          item: {
            '@type': 'Service',
            name: srv.name,
            description: srv.description,
            provider: {
              '@id': `${BASE_URL}/#business`,
            },
            url: `${BASE_URL}/treatments/${srv.slug}`,
          },
        })),
      });
    } else if (seo.serviceData) {
      schemaGraph.push({
        '@type': 'Service',
        name: seo.serviceData.name,
        description: seo.serviceData.description,
        provider: {
          '@id': `${BASE_URL}/#business`,
        },
        url: seo.canonical,
        areaServed: {
          '@type': 'City',
          name: 'Thane',
        },
      });
    }

    const schemaData = {
      '@context': 'https://schema.org',
      '@graph': schemaGraph,
    };

    schemaScript.textContent = JSON.stringify(schemaData);

    // Track analytics page view on route change
    trackPageView(currentPath, seo.title);
  }, [pathname]);

  return null;
}
