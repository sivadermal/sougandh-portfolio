export interface ProjectImage {
  url: string;
  caption: string;
  aspectRatio: "landscape" | "portrait" | "square";
  room?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "Living & Courtyard" | "Modular Kitchens" | "Master Suites" | "Bedrooms" | "All";
  heroImage: string;
  images: ProjectImage[];
  location: string;
  year: string;
  scope: string;
  software: string[];
  materials: string[];
  description: string;
  highlights: string[];
  featured?: boolean;
  hasSequence?: boolean;
}

export const DESIGNER_INFO = {
  name: "V. Sougandh Rajan",
  title: "Interior Designer & 3D Visualizer",
  tagline: "Crafting transformative environments through modern minimalism and Kerala architectural heritage.",
  experienceYears: "2+",
  location: "Kannur, Kerala, India",
  phone: "+91 9995069961",
  email: "sougandhsou200@gmail.com",
  profileImage: "/images/profile/sougandh.jpg",
  cvPdfUrl: "/documents/v-sougandh-rajan-portfolio.pdf",
  bio: "Interior Designer with over 2 years of professional experience in high-end residential design and architectural visualization. Rooted in Kerala's rich vernacular tradition and trained in civil engineering and interior architecture, I specialize in combining modern minimalist aesthetics with tactile regional materiality. Expert in 3ds Max, V-Ray, SketchUp, and Photoshop to deliver photo-real spatial journeys from concept to execution.",
  education: [
    {
      degree: "Diploma in Interior Designing",
      institution: "Govt. ITI Thottada, Kannur",
      year: "Certified",
    },
    {
      degree: "Diploma in Civil Engineering",
      institution: "Swami Nithyananda Polytechnic College, Kanhangad",
      year: "2023",
    },
    {
      degree: "Higher Secondary (Vocational)",
      institution: "Govt. VHSS Neruvambram, Kannur",
      year: "2020",
    },
  ],
  certifications: [
    "STED Council Certified Interior Designer",
    "Govt. ITI Thottada Professional Certification",
  ],
  skills: [
    { name: "3ds Max", level: 95 },
    { name: "V-Ray Rendering", level: 92 },
    { name: "SketchUp", level: 90 },
    { name: "Adobe Photoshop", level: 88 },
    { name: "AutoCAD & Civil Engineering", level: 85 },
    { name: "Space Planning & Joinery Detailing", level: 94 },
  ],
  services: [
    {
      title: "3D Architectural Visualization",
      description: "Photorealistic 3D interior renderings, cinematic camera walkthroughs, and lighting simulation that bring architectural concepts to life before construction.",
      tags: ["3ds Max", "V-Ray", "Cinematic Sequences", "Photorealistic Renders"],
    },
    {
      title: "Residential Interior Architecture",
      description: "End-to-end space planning, spatial ergonomics, structural modifications, and personalized design schemes for villas, apartments, and modern homes.",
      tags: ["Space Planning", "Civil Layouts", "Zoning", "Circulation"],
    },
    {
      title: "Bespoke Modular Kitchens & Joinery",
      description: "Tailored modular kitchen systems, custom wardrobes with integrated LED illumination, breakfast counters, and precision storage solutions.",
      tags: ["Modular Kitchens", "Walk-in Wardrobes", "Joinery Details", "Hardware"],
    },
    {
      title: "Lighting Architecture & Materiality",
      description: "Atmospheric layered lighting design (ambient cove, task, and accent lighting) paired with a handpicked palette of natural woods, stone, and artisan tiles.",
      tags: ["Cove Lighting", "Material Boards", "Kerala Terracotta", "Acoustics"],
    },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: "kerala-courtyard-residence",
    title: "Tropical Modern Courtyard Residence",
    subtitle: "A contemporary reinvention of the Kerala Nadumuttam",
    category: "Living & Courtyard",
    heroImage: "/images/projects/IMG-20260817-WA0029.jpg",
    featured: true,
    location: "Kannur, Kerala",
    year: "2024",
    scope: "Courtyard Architecture, Living Lounge & Dining Pavilion",
    software: ["3ds Max", "V-Ray", "Photoshop", "AutoCAD"],
    materials: [
      "Emerald Glazed Terracotta Tiles",
      "Athangudi Heritage Inlay Patterns",
      "Solid Teak Rafter Ceiling",
      "Rough Granite Stone Planter",
      "Cane & Rattan Weaving",
    ],
    highlights: [
      "Sunlit double-height skylight framing a live indoor bonsai pedestal",
      "Suspended traditional wooden swing (oonjal) with brass chain hardware",
      "Floating timber stair treads with integrated safety glass balustrade",
      "Emerald terracotta lounge floor paired with chevron timber ceiling",
    ],
    description:
      "This residence pays homage to traditional Kerala architecture while embracing minimalist modern luxury. The central spine is organized around an open skylit Nadumuttam (internal courtyard) with an elevated rough-stone planter pedestal, illuminated timber steps, and Athangudi-inspired tile borders. Adjacent, a sunken lounge boasts glossy emerald terracotta tiles and a ceiling chevron woodwork beam that subtly defines zones without erecting physical barriers.",
    images: [
      {
        url: "/images/projects/IMG-20260817-WA0029.jpg",
        caption: "Central Skylit Courtyard (Nadumuttam) with bonsai planter, suspended swing & dining",
        aspectRatio: "portrait",
        room: "Courtyard & Dining",
      },
      {
        url: "/images/projects/IMG-20260817-WA0024.jpg",
        caption: "Formal Living Lounge with emerald terracotta flooring, timber chevron ceiling & cane credenza",
        aspectRatio: "portrait",
        room: "Living Lounge",
      },
    ],
  },
  {
    id: "opulent-master-suite",
    title: "Opulent Master Suite & Media Lounge",
    subtitle: "High-end contemporary sanctuary with continuous cinematic sequence",
    category: "Master Suites",
    heroImage: "/images/projects/IMG-20260916-WA0027.jpg",
    featured: true,
    hasSequence: true,
    location: "Private Residence",
    year: "2024",
    scope: "Master Bedroom Suite, Custom Wardrobe & Floating Media Console",
    software: ["3ds Max", "V-Ray", "Photoshop"],
    materials: [
      "Channel-Tufted Chocolate Leather",
      "Vertical Bronze Mirrors",
      "Smoked Fluted Glass",
      "Calacatta White Gloss Marble",
      "Brushed Champagne Brass Trim",
    ],
    highlights: [
      "Interactive 192-frame cinematic scrollytelling sequence showcasing the space in 360-degree camera motion",
      "Symmetrical bed headboard with concentric bronze geometric wall art",
      "Custom floor-to-ceiling wardrobe with illuminated smoked glass display and open display niche",
      "Curved floating marble TV console with backlit stucco accent wall",
    ],
    description:
      "A masterclass in modern residential luxury. The suite balances deep walnut warmth with airy alabaster surfaces. Behind the bed, a custom channel-tufted leather panel is flanked by vertical bronze mirrors and warm edge-lit strips. The wardrobe features tinted glass doors with illuminated clothing rails and collectible display niches. The media wall is completed with a floating rounded-edge marble console beneath an artfully illuminated textured wall.",
    images: [
      {
        url: "/images/projects/IMG-20260916-WA0027.jpg",
        caption: "Direct Frontal Symmetrical View (Hero Frame 0001 of Scrollytelling Sequence)",
        aspectRatio: "landscape",
        room: "Master Bed Center",
      },
      {
        url: "/images/projects/IMG-20260817-WA0020.jpg",
        caption: "Three-Quarter Perspective showcasing wardrobe glass illumination (Hero Frame 0192)",
        aspectRatio: "landscape",
        room: "Master Wardrobe & Bed",
      },
      {
        url: "/images/projects/IMG-20260817-WA0021.jpg",
        caption: "Reverse Angle: Floating curved marble TV media wall with brushed brass inlays",
        aspectRatio: "landscape",
        room: "Media & Entertainment Wall",
      },
    ],
  },
  {
    id: "contemporary-modular-kitchen",
    title: "Contemporary Modular L-Kitchen & Breakfast Bar",
    subtitle: "Ergonomic culinary craftsmanship with warm metallic accents",
    category: "Modular Kitchens",
    heroImage: "/images/projects/IMG-20260817-WA0015.jpg",
    featured: true,
    location: "Kannur Villa",
    year: "2024",
    scope: "Kitchen Planning, Modular Cabinetry & Island Bar",
    software: ["3ds Max", "SketchUp", "V-Ray", "Photoshop"],
    materials: [
      "Matte Taupe Anti-Fingerprint Laminate",
      "Rose Gold Aluminium Glass Profiles",
      "Fluted Natural Oak Wood Slats",
      "Calacatta Gold Vein Quartz Countertop",
      "Artisanal Woven Wicker Pendants",
    ],
    highlights: [
      "Seamless waterfall quartz breakfast island with warm under-counter LED glow",
      "Upper cabinetry featuring rose-gold framed fluted glass display compartments",
      "Tactile subway tile backsplash with continuous recessed task illumination",
      "Integrated tall crockery tower with warm interior downlighting",
    ],
    description:
      "Conceived as both a functional chef's kitchen and a social gathering hub. The L-shaped layout maximizes efficiency, featuring handleless taupe base units paired with upper rose-gold glass storage. The breakfast island is detailed with fluted oak slats and illuminated with soft under-counter lighting, flanked by brushed brass barstools and drop wicker luminaires.",
    images: [
      {
        url: "/images/projects/IMG-20260817-WA0015.jpg",
        caption: "Living Room perspective: Waterfall breakfast counter with fluted oak panelling and brass stools",
        aspectRatio: "landscape",
        room: "Breakfast Bar View",
      },
      {
        url: "/images/projects/IMG-20260817-WA0013.jpg",
        caption: "L-Shaped Cooking Zone: Rose gold glass cabinets, subway tile backsplash & black fixtures",
        aspectRatio: "landscape",
        room: "Modular Cooking Zone",
      },
      {
        url: "/images/projects/IMG-20260817-WA0016.jpg",
        caption: "Prep counter angle showing wicker pendant glow and tall illuminated crockery pantry",
        aspectRatio: "landscape",
        room: "Storage & Island Details",
      },
    ],
  },
  {
    id: "japandi-wabi-sabi-sanctuary",
    title: "Japandi Wabi-Sabi Sanctuary",
    subtitle: "Organic tranquility, limewash textures, and minimalist calmness",
    category: "Bedrooms",
    heroImage: "/images/projects/IMG-20260817-WA0026.jpg",
    featured: true,
    location: "Eco Villa",
    year: "2024",
    scope: "Bedroom Architecture & Materiality Concept",
    software: ["3ds Max", "V-Ray", "Photoshop"],
    materials: [
      "Hand-Troweled Limewash Microcement",
      "Natural Woven Cane Headboard",
      "Solid Ash Wood Furniture",
      "Textured Stone Floor Flags",
      "Raw Linen & Sheer Drapery",
    ],
    highlights: [
      "Seamless microcement wall and ceiling finish eliminating hard visual boundaries",
      "Continuous fluted timber ledge running behind the bed with concealed warm backlighting",
      "Ergonomic Scandinavian reading armchair paired with solid timber pedestal table",
      "Floor-to-ceiling sheer linen curtains filtering soft natural courtyard light",
    ],
    description:
      "A serene minimalist retreat grounded in the principles of Wabi-Sabi. The space strips away ornamental noise in favor of authentic tactile finishes: microcement walls that capture natural light softly, a low cane-woven wooden bed, and a reading nook overlooking garden foliage.",
    images: [
      {
        url: "/images/projects/IMG-20260817-WA0026.jpg",
        caption: "Full bedroom perspective showcasing microcement textures, cane bed & garden view",
        aspectRatio: "portrait",
        room: "Bedroom & Reading Nook",
      },
    ],
  },
  {
    id: "linear-luxe-bedroom",
    title: "Linear Luxe & Architectural Lighting Suite",
    subtitle: "Sculptural ceiling illumination and high-contrast finishes",
    category: "Bedrooms",
    heroImage: "/images/projects/IMG-20260817-WA0027.jpg",
    featured: false,
    location: "Penthouse Suite",
    year: "2024",
    scope: "Lighting Design & Bedroom Architecture",
    software: ["3ds Max", "V-Ray"],
    materials: [
      "High-Gloss Calacatta Marble",
      "Sculptural S-Curve LED Neon Luminaire",
      "Smoked Glass & Vertical Slat Wardrobe",
      "Houndstooth Ottoman Upholstery",
    ],
    highlights: [
      "Architectural ceiling with dual parallel recessed LED light tracks",
      "Custom curved perimeter cove lighting providing diffuse ambient glow",
      "Striking organic S-curve illuminated pendant light beside bed",
      "Modular wardrobe combining vertical fluted top fascia with illuminated smoked glass",
    ],
    description:
      "An exploration of light as a primary architectural material. Dual linear light profiles in the false ceiling guide sightlines toward the window, while an S-curve hanging LED pendant adds organic flair against disciplined vertical slats and gloss marble flooring.",
    images: [
      {
        url: "/images/projects/IMG-20260817-WA0027.jpg",
        caption: "Vertical architectural view highlighting ceiling linear tracks and S-curve pendant",
        aspectRatio: "portrait",
        room: "Suite Perspective",
      },
    ],
  },
  {
    id: "botanic-luxury-bedroom",
    title: "Botanical Warmth Bedroom Suite",
    subtitle: "Biophilic accent wall with tailored wardrobe architecture",
    category: "Bedrooms",
    heroImage: "/images/projects/IMG-20260817-WA0012.jpg",
    featured: false,
    location: "Modern Residence",
    year: "2024",
    scope: "Interior Visualization & Space Planning",
    software: ["3ds Max", "V-Ray"],
    materials: [
      "Botanical Tropical Mural Wallpaper",
      "Woven Macrame Tapestry",
      "High-Gloss Veined Marble Floor",
      "Slate Grey Wardrobe with Integrated Glass Case",
      "Warm Recessed Ceiling Cove",
    ],
    highlights: [
      "Backlit wooden headboard paneling framing subtle botanical leaf murals",
      "Built-in wardrobe with slatted vertical header and interior-lit glass door display",
      "Double layered sheer and blackout drapery cascading across corner windows",
    ],
    description:
      "A harmonious blend of biophilic textures and clean contemporary cabinetry. Warm accent lights gently illuminate the botanical headboard niche, creating an inviting ambience reflected in high-gloss marble floors.",
    images: [
      {
        url: "/images/projects/IMG-20260817-WA0012.jpg",
        caption: "Full master bedroom view: Botanical headboard niche, grey wardrobe & coffer ceiling",
        aspectRatio: "square",
        room: "Master Bedroom",
      },
    ],
  },
  {
    id: "minimalist-walnut-suite",
    title: "Matte Grey & Walnut Minimalist Suite",
    subtitle: "Understated elegance through warm timber and acoustic paneling",
    category: "Bedrooms",
    heroImage: "/images/projects/IMG-20260817-WA0018.jpg",
    featured: false,
    location: "Contemporary Apartment",
    year: "2024",
    scope: "Bedroom Joinery & Lighting Specification",
    software: ["3ds Max", "V-Ray", "Photoshop"],
    materials: [
      "Natural Walnut Cladding",
      "Matte Grey Architectural Panels",
      "Brushed Brass Pendant Globes",
      "Textured Boucle Rug",
      "Upholstered Platform Bed",
    ],
    highlights: [
      "Asymmetrical headboard wall pairing warm vertical walnut grain with matte grey panels",
      "Dual staggered brass drop globes casting warm bedside task light",
      "Curved corner nightstand with marble top and subtle gold trim",
    ],
    description:
      "Understated sophistication defined by asymmetric balance. A vertical walnut timber accent warms the matte grey headboard backdrop, highlighted by floating brass globes and soft monochromatic textiles.",
    images: [
      {
        url: "/images/projects/IMG-20260817-WA0018.jpg",
        caption: "Bed perspective showing walnut feature wall, pendant globes & architectural artwork",
        aspectRatio: "landscape",
        room: "Bedroom",
      },
    ],
  },
];

export const MATERIAL_PALETTE = [
  {
    title: "Kerala Glazed Terracotta",
    origin: "Traditional / Regional",
    description: "Deep emerald and earthen terracotta tiles offering tactile coolness and glassy ambient reflections.",
    color: "#234e40",
    textureUrl: "/images/projects/IMG-20260817-WA0024.jpg",
  },
  {
    title: "Natural Teak & Walnut Wood",
    origin: "Sustainable Hardwood",
    description: "Rich vertical grain woodwork bringing organic warmth to ceilings, fluted ledges, and bespoke joinery.",
    color: "#6b4423",
    textureUrl: "/images/projects/IMG-20260817-WA0018.jpg",
  },
  {
    title: "Calacatta Gold Vein Marble",
    origin: "Natural Stone",
    description: "Pristine white polished marble with bold grey and gold veining, used for waterfall counters and flooring.",
    color: "#e8e5df",
    textureUrl: "/images/projects/IMG-20260817-WA0015.jpg",
  },
  {
    title: "Smoked Glass & Aluminium",
    origin: "Precision Architectural",
    description: "Tinted translucent glass panels with warm internal LED backlighting for modern wardrobe systems.",
    color: "#2a2725",
    textureUrl: "/images/projects/IMG-20260817-WA0020.jpg",
  },
  {
    title: "Handmade Cane & Wicker",
    origin: "Artisanal Craft",
    description: "Breathable woven cane screens and wicker lighting pendants that diffuse light with gentle organic shadows.",
    color: "#c29e6b",
    textureUrl: "/images/projects/IMG-20260817-WA0016.jpg",
  },
  {
    title: "Brushed Champagne Brass",
    origin: "Metallic Detail",
    description: "Refined metallic trim inlays, pendant stems, and cabinet handles offering understated luxury.",
    color: "#b89758",
    textureUrl: "/images/projects/IMG-20260817-WA0021.jpg",
  },
];

