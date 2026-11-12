import { PACKAGE_IMAGES } from './images';

export const PACKAGES = [
  {
    id: "jyotika-signature-balance",
    title: "Jyotika Balance Sanctuary Journey",
    badge: "Signature Ritual",
    description: "An unhurried half-day sensory journey pairing full-body botanical exfoliation with a personalized Swedish or Aromatherapy massotherapy session and calming scalp tension relief.",
    image: PACKAGE_IMAGES.signature,
    includes: [
      "Botanical Body Exfoliation (30 mins)",
      "Full Body Restorative Massage (60 mins)",
      "Aromatic Scalp & Temple Pressure Release (15 mins)",
      "Artisan Herbal Tea & Welcome Foot Compress"
    ],
    duration: "105 mins",
    price: "Pricing on consultation",
    idealFor: "Complete personal sensory restoration in an unhurried, welcoming haven in Thane."
  },
  {
    id: "couple-harmony-retreat",
    title: "Couple Harmony Retreat",
    badge: "Shared Escape",
    description: "A private dual sanctuary escape in our candlelit suite at Ashar Tiara Complex, curated for partners celebrating milestones or simply seeking quiet connection together.",
    image: PACKAGE_IMAGES.couple,
    includes: [
      "Dual Side-by-Side Swedish or Balinese Massage (60 mins)",
      "Private Candlelit Suite with Ambient Acoustics",
      "Warm Herbal Towel Thermal Compress",
      "Complimentary Artisan Tea & Seasonal Fruit Service"
    ],
    duration: "90 mins",
    price: "Pricing on consultation",
    idealFor: "Anniversaries, birthdays, and restorative couples wellness in Thane."
  },
  {
    id: "deep-tension-recovery",
    title: "Deep Tension Muscle Recovery",
    badge: "Therapeutic Focus",
    description: "Targeted musculoskeletal therapy pairing intensive deep tissue bodywork with heated volcanic basalt stones to melt away chronic neck stiffness and lumbar strain.",
    image: PACKAGE_IMAGES.recovery,
    includes: [
      "Focused Deep Tissue Bodywork (60 mins)",
      "Heated Volcanic Basalt Stone Integration",
      "Spinal & Trapezius Trigger Point Release",
      "Restorative Herbal Arnica Salve Application"
    ],
    duration: "90 mins",
    price: "Pricing on consultation",
    idealFor: "Athletes, commuters, and desk professionals dealing with chronic muscular tightness."
  },
  {
    id: "express-vitality-reset",
    title: "Express Vitality Reset",
    badge: "Midday Decompression",
    description: "A refined, time-efficient therapy designed to fit smoothly into a demanding schedule, providing immediate upper-body tension relief and renewed mental clarity.",
    image: PACKAGE_IMAGES.express,
    includes: [
      "Targeted Upper Body Massotherapy (30 mins)",
      "Aromatic Scalp & Temple Acupressure (15 mins)",
      "Warm Herbal Compress Finish",
      "Calming Botanical Hydration"
    ],
    duration: "45 mins",
    price: "Pricing on consultation",
    idealFor: "Lunch-hour decompression, midday fatigue, and quick muscular renewal in Thane."
  }
];
