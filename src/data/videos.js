// Video catalogue for Jyotika Spa, Thane
// Featuring premium boutique spa ambience, massage therapies, and private suites

import heroSuitePoster from '../assets/images/hero-luxury-suite.webp';
import swedishPoster from '../assets/images/service-swedish-massage.webp';
import aromatherapyPoster from '../assets/images/service-aromatherapy-massage.webp';
import hotStonePoster from '../assets/images/service-hot-stone-therapy.webp';
import suitesPoster from '../assets/images/experience-treatment-rooms.webp';
import couplePoster from '../assets/images/service-couple-massage.webp';

export const VIDEO_CATEGORIES = [
  { id: 'all', label: 'All Spa Films' },
  { id: 'ambience', label: 'Spa Ambience' },
  { id: 'treatments', label: 'Rituals & Massages' },
  { id: 'suites', label: 'Private Suites' },
  { id: 'couples', label: 'Couples Retreat' }
];

export const HERO_VIDEO = {
  src: '/assets/videos/spa-ambience-hero.mp4',
  poster: heroSuitePoster,
  heading: 'Experience the Art of Relaxation.',
  subheading: 'Discover a peaceful space designed to help you slow down and reconnect.',
  caption: 'Boutique Wellness Sanctuary • Ashar Tiara Complex, Thane'
};

export const SPA_VIDEOS = [
  {
    id: 1,
    title: 'A Peaceful Sanctuary: Interior Ambience Tour',
    category: 'ambience',
    duration: '0:24',
    src: '/assets/videos/spa-ambience-hero.mp4',
    poster: heroSuitePoster,
    alt: 'Ambient view of peaceful spa room with soft warm illumination and relaxation bed',
    description: 'Step inside our tranquil sanctuary designed with warm natural lighting, soft acoustic privacy, and grounding aromatherapy.'
  },
  {
    id: 2,
    title: 'Artisan Bodywork & Deep Muscle Relief',
    category: 'treatments',
    duration: '0:18',
    src: '/assets/videos/massage-therapy-flow.mp4',
    poster: swedishPoster,
    alt: 'Therapist performing gentle restorative massage with warm botanical oil',
    description: 'Experience intentional tension release through rhythmic long strokes, focused trigger point work, and warm cold-pressed carrier oils.'
  },
  {
    id: 3,
    title: 'Botanical Infusion & Essential Oil Ceremony',
    category: 'treatments',
    duration: '0:28',
    src: '/assets/videos/aromatherapy-ritual.mp4',
    poster: aromatherapyPoster,
    alt: 'Pure cold pressed botanical oils being poured during soothing spa ritual',
    description: 'Pure therapeutic essences of lavender, sandalwood, and sweet orange blended to quiet nervous tension and ease physical stiffness.'
  },
  {
    id: 4,
    title: 'Volcanic Basalt Stone Thermal Therapy',
    category: 'treatments',
    duration: '0:22',
    src: '/assets/videos/hot-stone-wellness.mp4',
    poster: hotStonePoster,
    alt: 'Heated volcanic basalt stones placed along spine in calm candlelit therapy suite',
    description: 'Smooth river-polished volcanic stones heated to optimum therapeutic warmth to melt stubborn knots and encourage circulation.'
  },
  {
    id: 5,
    title: 'Private Therapy Suites & Clinical Cleanliness',
    category: 'suites',
    duration: '0:30',
    src: '/assets/videos/treatment-suite-ambience.mp4',
    poster: suitesPoster,
    alt: 'Immaculate single therapy suite with fresh white linen and private bath amenities',
    description: 'Tour our sound-dampened treatment chambers featuring custom ergonomic massage beds, fresh organic linen, and private attached showers.'
  },
  {
    id: 6,
    title: 'Couples Harmony & Private Suite Retreat',
    category: 'couples',
    duration: '0:25',
    src: '/assets/videos/couples-relaxation.mp4',
    poster: couplePoster,
    alt: 'Side-by-side couple massage setup with rose petal decoration and warm ambient glow',
    description: 'Synchronized therapeutic care for two in our spacious couple suite complete with romantic lighting, hydro-tub, and post-session tea.'
  }
];
