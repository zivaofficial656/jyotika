import { SERVICE_IMAGES } from './images';

export const SERVICES = [
  {
    id: "swedish-massage",
    slug: "swedish-massage",
    name: "Swedish Massage",
    tagline: "Classic restorative massotherapy for muscular ease and full-body circulation",
    shortDescription: "A gentle yet deeply restorative therapy utilizing rhythmic effleurage, kneading, and light friction to relieve everyday tension and restore physical lightness at our Thane sanctuary.",
    description: "Our Swedish Massage at Jyotika Spa in Thane is an artful, restorative treatment designed to soothe tired muscles and optimize whole-body blood circulation. Using warm, cold-pressed botanical carrier oils, our certified therapists apply long, gliding strokes (effleurage), gentle kneading (petrissage), and light rhythmic friction. Ideal for those seeking an unhurried, mindful release from the fast pace of urban life.",
    duration: "60 / 90 mins",
    price: "Pricing on consultation",
    image: SERVICE_IMAGES.swedish,
    category: "massage",
    benefits: [
      "Encourages natural venous blood flow and lymphatic drainage",
      "Reduces physical fatigue and post-work muscular stiffness",
      "Improves joint range of motion and tissue suppleness",
      "Promotes deep parasympathetic nervous system relaxation"
    ],
    idealFor: "First-time spa guests, daily fatigue recovery, and gentle full-body rejuvenation in Thane.",
    pressure: "Light to Medium Pressure",
    preparation: "Please arrive 10–15 minutes early to enjoy our warm herbal welcome tea and consult with your therapist."
  },
  {
    id: "deep-tissue-massage",
    slug: "deep-tissue-massage",
    name: "Deep Tissue Massage",
    tagline: "Intensive musculoskeletal release targeting chronic tightness and postural strain",
    shortDescription: "Deliberate, slow friction and deep-layer pressure along muscle fibers and fascia to dissolve stubborn shoulder knots and lower-back tension.",
    description: "Designed for individuals experiencing stubborn tension, postural strain, or desk-bound stiffness. At Jyotika Spa, our therapists apply slow, deliberate pressure focused on the deeper layers of muscle tissue and connective fascia. Targeted techniques break down adhesions and release structural knots in the neck, shoulders, and lower lumbar region, restoring anatomical mobility.",
    duration: "60 / 90 mins",
    price: "Pricing on consultation",
    image: SERVICE_IMAGES.deepTissue,
    category: "massage",
    benefits: [
      "Releases deep myofascial knots and muscular adhesions",
      "Relieves chronic upper back, shoulder, and spinal fatigue",
      "Counteracts desk-posture slump and repetitive stress",
      "Enhances athletic mobility and musculoskeletal recovery"
    ],
    idealFor: "Desk workers, commuters, athletes, and anyone with persistent muscular knots in Thane.",
    pressure: "Therapeutic Firm Pressure",
    preparation: "Hydration before and after this deep session is encouraged to support natural muscle recovery."
  },
  {
    id: "aromatherapy-massage",
    slug: "aromatherapy-massage",
    name: "Aromatherapy Massage",
    tagline: "Custom cold-pressed botanical essences for mental serenity and emotional equilibrium",
    shortDescription: "A sensory journey pairing gentle, flowing bodywork with pure cold-pressed botanical oil blends formulated to quiet an overactive mind.",
    description: "A harmonious multisensory therapy combining rhythmic, gentle bodywork with handcrafted essential oil blends. We utilize cold-pressed botanical extracts chosen for their grounding, sedative, and balancing properties. As the warm oils are gently worked into the skin, the delicate aromatics work through the olfactory system to calm mental overload and foster deeply peaceful sleep.",
    duration: "60 / 90 mins",
    price: "Pricing on consultation",
    image: SERVICE_IMAGES.aromatherapy,
    category: "relaxation",
    benefits: [
      "Sensory nervous system de-escalation and stress relief",
      "Nourishing natural skin hydration with cold-pressed oils",
      "Eases sleep disturbances and mental exhaustion",
      "Encourages diaphragmatic breathing and emotional quiet"
    ],
    idealFor: "Stress alleviation, sensory fatigue, overstimulated minds, and peaceful sleep support.",
    pressure: "Gentle, Rhythmic Touch",
    preparation: "Guests select their preferred aromatic blend during the pre-treatment consultation."
  },
  {
    id: "balinese-massage",
    slug: "balinese-massage",
    name: "Balinese Massage",
    tagline: "Traditional Indonesian acupressure, gentle passive stretching, and rhythmic palm work",
    shortDescription: "A traditional full-body ritual harmonizing gentle acupressure, meridian palm pressure, and passive stretches for deep musculoskeletal vitality.",
    description: "Rooted in timeless Indonesian healing rituals, our Balinese Massage blends acupressure, rhythmic skin rolling, gentle passive stretching, and warm herbal oil applications. By stimulating the body's energy pathways (meridians) and releasing joint congestion, this comprehensive ritual brings a profound sense of lightness and renewed vitality to the entire musculoskeletal structure.",
    duration: "60 / 90 mins",
    price: "Pricing on consultation",
    image: SERVICE_IMAGES.balinese,
    category: "massage",
    benefits: [
      "Stimulates meridian energy points and vital circulation",
      "Gently opens tightened joints with mild passive stretches",
      "Relieves deep tension through firm palm & thumb pressure",
      "Restores holistic mind-body equilibrium"
    ],
    idealFor: "Sluggish circulation, total physical depletion, and deep musculoskeletal revival in Thane.",
    pressure: "Medium to Firm Acupressure",
    preparation: "Wear comfortable attire for effortless pre- and post-session unwinding."
  },
  {
    id: "couple-massage",
    slug: "couple-massage",
    name: "Couple Massage",
    tagline: "Side-by-side restorative sanctuary in our private dual therapy suite",
    shortDescription: "Share an intimate wellness escape in our private candlelit couples suite, with two dedicated therapists tailoring pressure to each guest.",
    description: "Step together into our private dual therapy suite at Ashar Tiara Complex in Thane. Illuminated with soft ambient lighting and filled with calming aromatics, this shared ritual allows two guests to relax side-by-side. Each partner is attended by an individual certified therapist, allowing complete personal customization of massage style, pressure, and botanical oil selection.",
    duration: "90 / 120 mins",
    price: "Pricing on consultation",
    image: SERVICE_IMAGES.couples,
    category: "couples",
    benefits: [
      "Exclusive private dual treatment suite with ambient lighting",
      "Completely personalized pressure and oils for both guests",
      "Soothing side-by-side synchronized bodywork",
      "Post-session herbal infusion and unhurried private lounge time"
    ],
    idealFor: "Anniversaries, birthdays, couples wellness dates, and shared quiet pauses in Thane.",
    pressure: "Customized Individually",
    preparation: "Advance booking is recommended to secure the private couples suite."
  },
  {
    id: "head-and-shoulder-massage",
    slug: "head-and-shoulder-massage",
    name: "Head and Shoulder Massage",
    tagline: "Targeted upper-body relief focused on the scalp, neck, temples, and trapezius",
    shortDescription: "A concentrated therapy targeting the epicenters of daily tension—dissolving desk headaches, neck stiffness, and shoulder fatigue.",
    description: "A focused, intensive therapy crafted for the parts of the body where urban stress accumulates most rapidly. Our therapists employ targeted acupressure along the occipital ridge, temples, cervical spine, and trapezius muscles. Warm herbal compresses and botanical salves melt away tension headaches and restore mental clarity in a time-efficient session.",
    duration: "30 / 45 mins",
    price: "Pricing on consultation",
    image: SERVICE_IMAGES.headShoulder,
    category: "massage",
    benefits: [
      "Relieves tension headaches and eye-strain fatigue",
      "Releases severe knots in the neck, traps, and upper back",
      "Promotes mental sharpness and scalp microcirculation",
      "Efficient midday reset that seamlessly fits a busy schedule"
    ],
    idealFor: "Quick midday recharge, screen fatigue, headache relief, and targeted neck/shoulder stress.",
    pressure: "Targeted Medium to Firm Pressure",
    preparation: "Ideal as a standalone treatment or combined with full body massotherapy."
  }
];
