// Centralized authentic photography library for Jyotika Spa, Thane
// Inspired by the luxury boutique aesthetics of La Bella Luxury Spas Gallery

// Hero & Brand Imagery
import heroLuxurySuite from '../assets/images/hero-luxury-suite.webp';
import heroBotanicalOil from '../assets/images/hero-botanical-oil.webp';
import heroReceptionAmbience from '../assets/images/hero-reception-ambience.webp';

// About & Suites Imagery
import aboutPristineSuite from '../assets/images/about-pristine-suite.webp';
import aboutCouplesSuite from '../assets/images/about-couples-suite.webp';
import aboutWelcomeLounge from '../assets/images/about-welcome-lounge.webp';

// Signature Services Imagery
import serviceSwedish from '../assets/images/service-swedish-massage.webp';
import serviceDeepTissue from '../assets/images/service-deep-tissue-massage.webp';
import serviceAromatherapy from '../assets/images/service-aromatherapy-massage.webp';
import serviceBalinese from '../assets/images/service-balinese-massage.webp';
import serviceCouples from '../assets/images/service-couple-massage.webp';
import serviceHeadShoulder from '../assets/images/service-head-shoulder-massage.webp';
import serviceHotStone from '../assets/images/service-hot-stone-therapy.webp';
import serviceBodyScrub from '../assets/images/service-body-scrub.webp';

// Experience Walkthrough Imagery
import experienceCorridor from '../assets/images/experience-corridor-ambience.webp';
import experienceTreatmentRooms from '../assets/images/experience-treatment-rooms.webp';
import experienceTherapistSetup from '../assets/images/experience-therapist-setup.webp';
import experienceHydroTub from '../assets/images/experience-hydro-tub-suite.webp';

// Gallery Exclusive Imagery
import galleryRomanSuite from '../assets/images/gallery-roman-column-suite.webp';

// Packages & Rituals
import packagesZenBanner from '../assets/images/packages-zen-banner.webp';

import elegantLogo from '../assets/images/elegant-jyotika-spa-logo.webp';

export const LOGO_IMAGE = elegantLogo;

export const HERO_IMAGES = {
  main: heroLuxurySuite,
  accent: heroBotanicalOil,
  secondary: heroReceptionAmbience
};

export const ABOUT_IMAGES = {
  intro: experienceCorridor,
  suite: aboutPristineSuite,
  oils: serviceAromatherapy,
  lounge: aboutWelcomeLounge
};

export const SERVICE_IMAGES = {
  swedish: serviceSwedish,
  deepTissue: serviceDeepTissue,
  aromatherapy: serviceAromatherapy,
  balinese: serviceBalinese,
  couples: serviceCouples,
  headShoulder: serviceHeadShoulder,
  hotStone: serviceHotStone,
  bodyScrub: serviceBodyScrub
};

export const EXPERIENCE_IMAGES = {
  atmosphere: experienceCorridor,
  treatmentRooms: experienceTreatmentRooms,
  therapists: experienceTherapistSetup,
  hygiene: aboutPristineSuite,
  lounge: aboutWelcomeLounge
};

export const GALLERY_IMAGES = {
  reception: aboutWelcomeLounge,
  suiteSingle: heroLuxurySuite,
  suiteCouple: aboutCouplesSuite,
  massageSession: serviceSwedish,
  hotStone: serviceHotStone,
  botanicalOils: heroBotanicalOil,
  postTreatment: packagesZenBanner,
  hydroTub: experienceHydroTub,
  facial: serviceHeadShoulder,
  bodyPolish: serviceBodyScrub,
  relaxationCorner: galleryRomanSuite,
  dualTherapy: serviceCouples
};

export const PACKAGE_IMAGES = {
  signature: heroLuxurySuite,
  couple: serviceCouples,
  recovery: serviceDeepTissue,
  express: packagesZenBanner
};

const IMAGES = {
  logo: LOGO_IMAGE,
  hero: HERO_IMAGES,
  about: ABOUT_IMAGES,
  services: SERVICE_IMAGES,
  experience: EXPERIENCE_IMAGES,
  gallery: GALLERY_IMAGES,
  packages: PACKAGE_IMAGES
};

export default IMAGES;
