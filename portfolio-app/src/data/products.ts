export interface Product {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  tags: string[];
  mainImage: string;
  additionalImages: string[];
}

export const products: Product[] = [
  {
    id: 'ecosphere-dashboard',
    title: 'EcoSphere Dashboard',
    category: 'WEB APPLICATION',
    shortDescription: 'A real-time environmental monitoring system with advanced data visualization.',
    fullDescription: 'EcoSphere Dashboard is a comprehensive solution for monitoring environmental metrics in real-time. Built with a focus on data accuracy and user experience, it features interactive charts, live data streams from IoT sensors, and predictive analytics to forecast environmental trends. The dashboard is designed to help organizations make data-driven decisions for sustainability.',
    tags: ['React', 'TypeScript', 'D3.js', 'Node.js'],
    mainImage: 'https://images.unsplash.com/photo-1551288049-bbbda5366991?auto=format&fit=crop&q=80&w=800',
    additionalImages: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800',
    ]
  },
  {
    id: 'nexus-ecommerce',
    title: 'Nexus E-Commerce',
    category: 'E-COMMERCE',
    shortDescription: 'High-conversion retail platform for boutique tech accessories.',
    fullDescription: 'Nexus E-Commerce is a premium shopping experience designed for boutique electronics and tech accessories. It features a custom checkout flow integrated with Stripe, a dynamic product filtering system, and a mobile-first responsive design. The platform leverages server-side rendering for optimal SEO and performance.',
    tags: ['Next.js', 'Stripe', 'Tailwind', 'PostgreSQL'],
    mainImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    additionalImages: [
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800',
    ]
  },
  {
    id: 'vanguard-brand',
    title: 'Vanguard Brand Identity',
    category: 'BRANDING',
    shortDescription: 'Visual identity and design system for a cybersecurity startup.',
    fullDescription: 'Vanguard Brand Identity is a complete visual overhaul for a modern cybersecurity company. The project included logo design, typography selection, color palette development, and a comprehensive brand guideline. The aesthetic is focused on trust, security, and forward-thinking innovation.',
    tags: ['Brand Design', 'Typography', 'Illustrator', 'Figma'],
    mainImage: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800',
    additionalImages: [
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800',
    ]
  },
  {
    id: 'aura-health',
    title: 'Aura Health App',
    category: 'HEALTHTECH',
    shortDescription: 'Mobile application for mental wellness and meditation tracking.',
    fullDescription: 'Aura Health App provides users with guided meditation sessions, stress tracking, and personalized wellness plans. The app uses biometric data to suggest breathing exercises and tracks progress over time with intuitive visualizations. The UI is designed to be calming and accessible for all users.',
    tags: ['React Native', 'Firebase', 'Redux', 'Wellness'],
    mainImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800',
    additionalImages: [
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1499209974431-9dac3e74a1e4?auto=format&fit=crop&q=80&w=800',
    ]
  },
  {
    id: 'fintrack-pro',
    title: 'FinTrack Pro',
    category: 'FINTECH',
    shortDescription: 'Enterprise-grade financial portfolio management tool.',
    fullDescription: 'FinTrack Pro is a high-performance tool for managing complex financial portfolios. It offers real-time stock market integration, tax reporting automation, and risk assessment models. The platform is designed for professional financial advisors and high-net-worth individuals who require precision and security.',
    tags: ['Go', 'React', 'GraphQL', 'AWS'],
    mainImage: 'https://images.unsplash.com/photo-1454165833767-027ff39c157c?auto=format&fit=crop&q=80&w=800',
    additionalImages: [
      'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1534951470249-15931c00280d?auto=format&fit=crop&q=80&w=800',
    ]
  },
  {
    id: 'zenith-mobile',
    title: 'Zenith Mobile Design',
    category: 'MOBILE DESIGN',
    shortDescription: 'UX/UI design for a travel exploration application.',
    fullDescription: 'Zenith Mobile Design focuses on the user journey of travel enthusiasts. The design emphasizes high-quality imagery, ease of navigation, and a robust discovery engine. Every interaction was crafted to inspire wonder and simplify the planning process of global explorations.',
    tags: ['UI Design', 'UX Research', 'Prototyping'],
    mainImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800',
    additionalImages: [
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800',
    ]
  },
  {
    id: 'spectral-graphics',
    title: 'Spectral Graphics',
    category: 'WEB APPLICATION',
    shortDescription: 'Online tool for generating abstract generative art patterns.',
    fullDescription: 'Spectral Graphics is an experimental web application that allows users to create unique, high-resolution abstract art using mathematical algorithms. Users can adjust parameters in real-time and export their creations for digital use or print.',
    tags: ['Canvas API', 'JavaScript', 'Generative Art'],
    mainImage: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800',
    additionalImages: [
      'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1500462859273-519d0c294026?auto=format&fit=crop&q=80&w=800',
    ]
  },
  {
    id: 'quantum-iot',
    title: 'Quantum IoT System',
    category: 'HARDWARE/SW',
    shortDescription: 'Embedded software for home automation and security.',
    fullDescription: 'Quantum IoT System integrates various smart home devices into a single, secure ecosystem. The software is optimized for low-latency communication and includes advanced encryption to protect user privacy. It allows for seamless control of lighting, climate, and security via a central hub or mobile app.',
    tags: ['C++', 'MQTT', 'Python', 'Security'],
    mainImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
    additionalImages: [
      'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
    ]
  },
];
