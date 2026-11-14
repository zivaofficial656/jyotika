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
    title: 'Jyotika Spa Thane | Luxury Spa & Body Massage Centre',
    description:
      'Experience luxury wellness and restorative body massage at Jyotika Spa in Thane. Explore Swedish, deep tissue, Balinese & couple therapies at Ashar Tiara.',
    canonical: `${BASE_URL}/`,
    schemaType: 'DaySpa',
    breadcrumbName: 'Home',
    indexable: true,
  },
  '/about': {
    title: 'About Jyotika Spa | Boutique Wellness Sanctuary in Thane',
    description:
      'Discover Jyotika Spa at Ashar Tiara Complex, Gandhi Nagar, Thane. Dedicated to bespoke massotherapy, certified therapists, and holistic relaxation rituals.',
    canonical: `${BASE_URL}/about`,
    schemaType: 'AboutPage',
    breadcrumbName: 'About Us',
    indexable: true,
  },
  '/services': {
    title: 'Spa Treatments & Massage Services in Thane | Jyotika Spa',
    description:
      'Explore our complete menu of therapeutic massage services in Thane: Swedish, Deep Tissue, Balinese, Aromatherapy, and Head & Shoulder therapies.',
    canonical: `${BASE_URL}/services`,
    schemaType: 'ItemPage',
    breadcrumbName: 'Spa Treatments',
    indexable: true,
  },
  '/experience': {
    title: 'The Wellness Experience | Jyotika Spa Sanctuary in Thane',
    description:
      'Immerse in the restorative atmosphere of Jyotika Spa in Thane. Private suites, ambient lighting, bespoke aromatherapy, and immaculate hygiene standards.',
    canonical: `${BASE_URL}/experience`,
    schemaType: 'WebPage',
    breadcrumbName: 'Experience',
    indexable: true,
  },
  '/couple-spa': {
    title: 'Couple Spa & Dual Massage Rituals in Thane | Jyotika Spa',
    description:
      'Indulge in private couple massage sessions and romantic wellness rituals at Jyotika Spa, Thane. Dedicated dual suites and customized botanical therapies.',
    canonical: `${BASE_URL}/couple-spa`,
    schemaType: 'ItemPage',
    breadcrumbName: 'Couple Spa',
    indexable: true,
  },
  '/packages': {
    title: 'Curated Wellness Packages & Rituals | Jyotika Spa Thane',
    description:
      'Discover curated spa packages, full-body rejuvenation journeys, and signature massotherapy rituals at Jyotika Spa, Ashar Tiara Complex, Thane.',
    canonical: `${BASE_URL}/packages`,
    schemaType: 'ItemPage',
    breadcrumbName: 'Packages',
    indexable: true,
  },
  '/offers': {
    title: 'Seasonal Spa Offers & Wellness Specials | Jyotika Spa Thane',
    description:
      'View current seasonal spa specials, weekday packages, and couple retreat packages at Jyotika Spa in Gandhi Nagar, Thane. Enquire for details.',
    canonical: `${BASE_URL}/offers`,
    schemaType: 'ItemPage',
    breadcrumbName: 'Offers',
    indexable: true,
  },
  '/gallery': {
    title: 'Photo Gallery | Luxury Therapy Suites | Jyotika Spa Thane',
    description:
      'Take a visual tour of Jyotika Spa in Thane. Explore our private treatment suites, couples therapy rooms, relaxation nooks, and boutique amenities.',
    canonical: `${BASE_URL}/gallery`,
    schemaType: 'ImageGallery',
    breadcrumbName: 'Gallery',
    indexable: true,
  },
  '/videos': {
    title: 'Video Walkthroughs & Suite Tours | Jyotika Spa Thane',
    description:
      'Watch video tours and serene suite walkthroughs showcasing the peaceful ambiance and pristine treatment rooms of Jyotika Spa in Thane.',
    canonical: `${BASE_URL}/videos`,
    schemaType: 'VideoGallery',
    breadcrumbName: 'Video Tours',
    indexable: true,
  },
  '/faq': {
    title: 'Frequently Asked Questions | Jyotika Spa Thane',
    description:
      'Find answers to common questions about spa etiquette, massage styles, therapist certifications, appointment reservations, and hygiene at Jyotika Spa Thane.',
    canonical: `${BASE_URL}/faq`,
    schemaType: 'FAQPage',
    breadcrumbName: 'FAQ',
    indexable: true,
  },
  '/contact': {
    title: 'Contact Jyotika Spa | Ashar Tiara, Gandhi Nagar, Thane',
    description:
      'Get directions and contact Jyotika Spa on 1st Floor, Ashar Tiara Commercial Complex, Gandhi Nagar, Thane. Call +91 9203824656 or enquire online.',
    canonical: `${BASE_URL}/contact`,
    schemaType: 'ContactPage',
    breadcrumbName: 'Contact Us',
    indexable: true,
  },
  '/booking': {
    title: 'Book an Appointment | Jyotika Spa Thane',
    description:
      'Schedule your private massage or couple spa session at Jyotika Spa, Ashar Tiara Complex, Thane. Quick online booking and concierge confirmation.',
    canonical: `${BASE_URL}/booking`,
    schemaType: 'WebPage',
    breadcrumbName: 'Book Appointment',
    indexable: true,
  },
  '/privacy': {
    title: 'Privacy Policy | Jyotika Spa Thane',
    description:
      'Privacy policy and guest confidentiality practices at Jyotika Spa, Ashar Tiara Commercial Complex, Gandhi Nagar, Thane.',
    canonical: `${BASE_URL}/privacy`,
    schemaType: 'WebPage',
    breadcrumbName: 'Privacy Policy',
    indexable: true,
  },
  '/terms': {
    title: 'Terms & Conditions | Jyotika Spa Thane',
    description:
      'Terms of service, booking policies, and cancellation guidelines for Jyotika Spa, Ashar Tiara Complex, Thane.',
    canonical: `${BASE_URL}/terms`,
    schemaType: 'WebPage',
    breadcrumbName: 'Terms & Conditions',
    indexable: true,
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
        const treatmentTitles = {
          'swedish-massage': 'Swedish Massage in Thane | Restorative Massotherapy | Jyotika Spa',
          'deep-tissue-massage': 'Deep Tissue Massage in Thane | Myofascial Knot Release | Jyotika Spa',
          'aromatherapy-massage': 'Aromatherapy Massage in Thane | Botanical Essences | Jyotika Spa',
          'balinese-massage': 'Balinese Massage in Thane | Acupressure & Vitality | Jyotika Spa',
          'couple-massage': 'Couple Massage in Thane | Private Dual Suite Therapy | Jyotika Spa',
          'head-and-shoulder-massage': 'Head & Shoulder Massage in Thane | Tension Headache Relief | Jyotika Spa',
        };

        const treatmentDescriptions = {
          'swedish-massage': 'Classic Swedish massage for stress relief and circulation improvement at Jyotika Spa in Ashar Tiara Complex, Thane. Gentle to medium pressure.',
          'deep-tissue-massage': 'Target chronic muscle stiffness and postural tension with deep tissue massage at Jyotika Spa in Gandhi Nagar, Thane. Therapeutic firm pressure.',
          'aromatherapy-massage': 'Calm your mind and soothe your senses with botanical aromatherapy massage at Jyotika Spa in Thane. Cold-pressed essential oils and gentle touch.',
          'balinese-massage': 'Experience traditional Indonesian Balinese massage at Jyotika Spa, Thane. Acupressure, passive stretches, and warm herbal oils for total revival.',
          'couple-massage': 'Unwind together in our candlelit couple suite at Jyotika Spa in Thane. Synchronized massage by certified therapists with personalized botanical oils.',
          'head-and-shoulder-massage': 'Fast, focused tension relief for scalp, neck, and shoulders at Jyotika Spa, Ashar Tiara Complex, Thane. Relieves desk strain and mental fatigue.',
        };

        seo = {
          title: treatmentTitles[slug] || `${treatment.name} in Thane | Jyotika Spa`,
          description: treatmentDescriptions[slug] || `${treatment.shortDescription} Experience professional ${treatment.name} at Jyotika Spa, Ashar Tiara Complex, Gandhi Nagar, Thane.`,
          canonical: `${BASE_URL}/treatments/${slug}`,
          schemaType: 'Service',
          breadcrumbName: treatment.name,
          serviceData: treatment,
          image: treatment.image,
          indexable: true,
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
    
    // Robots directive: noindex for utility/legal/404, index, follow for indexable pages
    let robotsDirective = 'index, follow';
    if (seo.is404) {
      robotsDirective = 'noindex, nofollow';
    } else if (seo.noindex) {
      robotsDirective = 'noindex, follow';
    }
    setMetaTag('meta[name="robots"]', 'name', 'robots', robotsDirective);

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
    const ogImage = seo.image || OG_IMAGE_URL;
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', seo.title);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', seo.description);
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', seo.canonical);
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', ogImage);
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
    setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage);

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

    // 6a. WebSite Schema
    const websiteEntity = {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: `${BASE_URL}/`,
      name: BUSINESS_INFO.name,
      description: BUSINESS_INFO.shortDescription,
      publisher: {
        '@id': `${BASE_URL}/#business`,
      },
      inLanguage: 'en-IN',
    };

    // 6b. Core Business Entity (DaySpa / LocalBusiness / Organization)
    const coreBusinessEntity = {
      '@type': ['DaySpa', 'LocalBusiness', 'Organization'],
      '@id': `${BASE_URL}/#business`,
      name: BUSINESS_INFO.name,
      alternateName: 'Jyotika Spa Thane',
      description: BUSINESS_INFO.shortDescription,
      url: `${BASE_URL}/`,
      telephone: BUSINESS_INFO.contact.phone,
      email: BUSINESS_INFO.contact.email,
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

    // 6c. WebPage Schema
    const webPageEntity = {
      '@type': seo.schemaType || 'WebPage',
      '@id': `${seo.canonical}#webpage`,
      url: seo.canonical,
      name: seo.title,
      description: seo.description,
      isPartOf: {
        '@id': `${BASE_URL}/#website`,
      },
      about: {
        '@id': `${BASE_URL}/#business`,
      },
      inLanguage: 'en-IN',
    };

    // 6d. Breadcrumb Schema
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

    const schemaGraph = [websiteEntity, coreBusinessEntity, webPageEntity, breadcrumbSchema];

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
            serviceType: 'Spa Therapy',
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
        serviceType: 'Spa Therapy',
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
