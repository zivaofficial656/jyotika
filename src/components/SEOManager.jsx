import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BUSINESS_INFO } from '../data/businessInfo';
import { FAQS } from '../data/faqData';
import { SERVICES } from '../data/servicesData';

const BASE_URL = 'https://www.jyotikaspa.com';
const DEFAULT_IMAGE = `${BASE_URL}/jyotika-spa-logo.svg`;

const SEO_ROUTES = {
  '/': {
    title:
      'Jyotika Spa | Boutique Wellness Sanctuary Thane | Full Body Massage & Couple Spa',
    description:
      'Experience contemporary boutique wellness at Jyotika Spa in Thane. Offering restorative full body massages, bespoke couple rituals, and holistic bodywork at Ashar Tiara Commercial Complex, Gandhi Nagar, Thane.',
    canonical: `${BASE_URL}/`,
    schemaType: 'DaySpa',
  },
  '/about': {
    title: 'About Jyotika Spa | Boutique Wellness Haven in Thane',
    description:
      'Discover Jyotika Spa, a tranquil sanctuary in Gandhi Nagar, Thane devoted to mindful relaxation, certified therapist care, and authentic musculoskeletal rejuvenation.',
    canonical: `${BASE_URL}/about`,
    schemaType: 'AboutPage',
  },
  '/services': {
    title: 'Full Body Massage Thane & Treatments | Jyotika Spa',
    description:
      'Explore Swedish massage, deep tissue massage, Balinese therapy, aromatherapy, and couple massage rituals at Jyotika Spa in Ashar Tiara Complex, Thane.',
    canonical: `${BASE_URL}/services`,
    schemaType: 'ItemPage',
  },
  '/experience': {
    title: 'The Jyotika Experience | Boutique Spa Atmosphere in Thane',
    description:
      'Immerse in the calming environment of Jyotika Spa in Thane. Explore our private treatment suites, soothing aromatics, ambient lighting, and immaculate hygiene standards.',
    canonical: `${BASE_URL}/experience`,
    schemaType: 'WebPage',
  },
  '/couple-spa': {
    title: 'Couple Spa Thane & Dual Private Suite | Jyotika Spa',
    description:
      'Indulge in a side-by-side couple spa retreat in our private candlelit dual sanctuary suite in Thane. Personalized pressure, pure botanical oils, and quiet tea service.',
    canonical: `${BASE_URL}/couple-spa`,
    schemaType: 'ItemPage',
  },
  '/packages': {
    title: 'Curated Wellness Packages & Rituals | Jyotika Spa Thane',
    description:
      'Discover multi-treatment wellness packages combining botanical body scrubs, deep tissue bodywork, and calming scalp therapies at Jyotika Spa Thane.',
    canonical: `${BASE_URL}/packages`,
    schemaType: 'ItemPage',
  },
  '/offers': {
    title: 'Curated Wellness Offers & Seasonal Packages | Jyotika Spa Thane',
    description:
      'Explore curated wellness journeys and seasonal promotional offerings at Jyotika Spa in Ashar Tiara Commercial Complex, Gandhi Nagar, Thane.',
    canonical: `${BASE_URL}/offers`,
    schemaType: 'ItemPage',
  },
  '/gallery': {
    title: 'Visual Gallery & Sanctuary Spaces | Jyotika Spa Thane',
    description:
      'Explore photos of our private single and couple therapy suites, serene welcome lounge, and pristine massage facilities at Jyotika Spa in Ashar Tiara Complex, Thane.',
    canonical: `${BASE_URL}/gallery`,
    schemaType: 'ImageGallery',
  },
  '/videos': {
    title: 'Cinema & Atmosphere Video Tours | Jyotika Spa Thane',
    description:
      'Watch high-definition video walkthroughs and atmosphere films of Jyotika Spa treatment rooms, massage therapies, and private suites in Thane.',
    canonical: `${BASE_URL}/videos`,
    schemaType: 'VideoGallery',
  },
  '/faq': {
    title: 'Frequently Asked Questions & Spa Etiquette | Jyotika Spa Thane',
    description:
      'Find answers regarding appointments, massage pressure preferences, arrival etiquette, and cleanliness standards at Jyotika Spa in Gandhi Nagar, Thane.',
    canonical: `${BASE_URL}/faq`,
    schemaType: 'FAQPage',
  },
  '/contact': {
    title: 'Contact Us | Boutique Spa in Thane | Jyotika Spa',
    description:
      'Visit Jyotika Spa at Ashar Tiara Commercial Complex, Gandhi Nagar, Thane. Call +91 80926 31411 or submit an inquiry for authentic full body massage in Thane.',
    canonical: `${BASE_URL}/contact`,
    schemaType: 'ContactPage',
  },
  '/booking': {
    title: 'Reserve Appointment Online | Jyotika Spa Thane',
    description:
      'Request your full body massage or couple spa session online at Jyotika Spa, 1st Floor, Ashar Tiara Commercial Complex, Gandhi Nagar, Thane.',
    canonical: `${BASE_URL}/booking`,
    schemaType: 'WebPage',
  },
  '/privacy': {
    title: 'Privacy Policy | Jyotika Spa Thane',
    description:
      'Read the guest privacy and confidentiality policy for Jyotika Spa, Ashar Tiara Commercial Complex, Thane.',
    canonical: `${BASE_URL}/privacy`,
    schemaType: 'WebPage',
  },
  '/terms': {
    title: 'Terms & Conditions | Jyotika Spa Thane',
    description:
      'Read the appointment terms, booking guidelines, and cancellation policies for Jyotika Spa, Thane.',
    canonical: `${BASE_URL}/terms`,
    schemaType: 'WebPage',
  },
};

export default function SEOManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const currentPath =
      pathname.length > 1 ? pathname.replace(/\/+$/, '') : '/';

    let seo = SEO_ROUTES[currentPath];

    // Dynamic handling for /treatments/:slug
    if (!seo && currentPath.startsWith('/treatments/')) {
      const slug = currentPath.replace('/treatments/', '');
      const treatment = SERVICES.find((s) => s.slug === slug);
      if (treatment) {
        seo = {
          title: `${treatment.name} in Thane | Jyotika Spa`,
          description: `${treatment.shortDescription} Experience professional ${treatment.name} at Jyotika Spa, Ashar Tiara Commercial Complex, Gandhi Nagar, Thane.`,
          canonical: `${BASE_URL}/treatments/${slug}`,
          schemaType: 'Service',
          serviceData: treatment,
        };
      }
    }

    if (!seo) {
      seo = {
        title: '404 Page Not Found | Jyotika Spa Thane',
        description: 'The requested page was not found on the Jyotika Spa website.',
        canonical: `${BASE_URL}${currentPath}`,
        schemaType: 'WebPage',
      };
    }

    document.title = seo.title;

    const setMetaTag = (selector, attributeName, attributeValue, content) => {
      let element = document.head.querySelector(selector);

      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }

      element.setAttribute('content', content);
    };

    setMetaTag('meta[name="description"]', 'name', 'description', seo.description);
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', seo.title);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', seo.description);
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', seo.canonical);
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', DEFAULT_IMAGE);
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', 'website');
    setMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', 'Jyotika Spa');

    setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', seo.title);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', seo.description);
    setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', DEFAULT_IMAGE);

    let canonicalLink = document.head.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', seo.canonical);

    // Schema script element handling
    let schemaScript = document.getElementById('dynamic-jsonld-schema');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'dynamic-jsonld-schema';
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }

    const businessSchema = {
      '@context': 'https://schema.org',
      '@type': 'DaySpa',
      '@id': `${BASE_URL}/#business`,
      name: BUSINESS_INFO.name,
      description: BUSINESS_INFO.shortDescription,
      url: `${BASE_URL}/`,
      image: DEFAULT_IMAGE,
      logo: DEFAULT_IMAGE,
      telephone: BUSINESS_INFO.contact.phoneDisplay,
      priceRange: '₹₹₹',
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
        latitude: 19.1905,
        longitude: 72.9645,
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
    };

    let schemaData;

    if (currentPath === '/') {
      schemaData = businessSchema;
    } else if (currentPath === '/faq') {
      schemaData = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: FAQS.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      };
    } else if (currentPath === '/services') {
      schemaData = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
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
          },
        })),
      };
    } else if (seo.serviceData) {
      schemaData = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: seo.serviceData.name,
        description: seo.serviceData.description,
        provider: {
          '@id': `${BASE_URL}/#business`,
        },
        url: seo.canonical,
      };
    } else {
      schemaData = {
        '@context': 'https://schema.org',
        '@type': seo.schemaType,
        name: seo.title,
        description: seo.description,
        url: seo.canonical,
        isPartOf: {
          '@type': 'WebSite',
          name: 'Jyotika Spa',
          url: `${BASE_URL}/`,
        },
      };
    }

    schemaScript.textContent = JSON.stringify(schemaData);
  }, [pathname]);

  return null;
}
