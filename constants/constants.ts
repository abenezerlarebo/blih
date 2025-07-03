import { features } from "process";
import {
  MdBolt,
  MdBuild,
  MdFavorite,
  MdLightbulb,
  MdSecurity,
  MdSupport,
} from "react-icons/md";

export const headlineTexts = [
  "WE CRAFT BOLD WEB EXPERIENCES",
  "FROM VISION TO REALITY – WE BUILD IT",
  "WEBSITES THAT MAKE A STATEMENT",
];

export const services = [
  {
    icon: MdBolt,
    title: "Fast Delivery",
    desc: "Rapid prototyping & deployment",
  },
  {
    icon: MdLightbulb,
    title: "Creative Solutions",
    desc: "Tailored UI/UX design",
  },
  {
    icon: MdBuild,
    title: "Full‑Stack Engineering",
    desc: "Robust end-to-end systems",
  },
  {
    icon: MdSecurity,
    title: "Secure Systems",
    desc: "Enterprise-grade compliance",
  },
  {
    icon: MdSupport,
    title: "24/7 Support",
    desc: "Ongoing technical assistance",
  },
  {
    icon: MdFavorite,
    title: "Client-Centric",
    desc: "Your satisfaction is priority",
  },
];

export const projects = [
  {
    id: 1,
    title: "MLER",
    description: "Professional maritime lens and equipment rental platform",
    longDescription: [
      "MLER (Maritime Lens & Equipment Rentals) is a modern, secure, and fully responsive ecommerce platform focused on renting professional camera gear for maritime and underwater use cases.",
      "We designed and built MLER with a heavy focus on user experience and accessibility, making the entire process from browsing to checkout seamless.",
      "Core technologies include:",
      "- Frontend: Next.js with modern UI principles",
      "- Backend: Drupal CMS for flexible product/content management",
      "- Integrated Stripe for secure payments and subscription handling",
      "- Accessible components ensuring WCAG 2.1 compliance",
      "UX-focused features include:",
      "- Quick equipment filters by type, brand, and purpose",
      "- Streamlined checkout flow with real-time availability",
      "- Modern UI components with micro-animations and feedback",
      "MLER provides filmmakers, researchers, and hobbyists with access to professional equipment while ensuring a premium ecommerce experience.",
    ],
    tags: ["Ecommerce", "Camera Rentals", "Next.js", "Drupal", "UX/UI"],
    imageUrl:
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=2232&auto=format&fit=crop",
    year: "2025",
    status: "Live",
    team: "6 developers, 2 designers, 1 accessibility expert",
    liveUrl: "https://mler-rentals.example.com",
    githubUrl: "https://github.com/maritimelens/mler",
    features: [
      {
        title: "Modern Ecommerce Experience",
        description:
          "A sleek and fast storefront designed for photographers and filmmakers to easily browse and rent camera gear.",
      },
      {
        title: "Next.js + Drupal Integration",
        description:
          "We used Next.js for a fast frontend experience and Drupal as the headless CMS for robust backend management.",
      },
      {
        title: "Secure Online Payments",
        description:
          "Integrated with Stripe to enable secure, fast, and reliable payments with support for subscriptions and discounts.",
      },
      {
        title: "Accessibility First Design",
        description:
          "WCAG 2.1-compliant components and flows, tested with screen readers and keyboard navigation for inclusivity.",
      },
      {
        title: "Responsive & Scalable",
        description:
          "Fully responsive design optimized for desktop, tablet, and mobile — scalable to handle thousands of concurrent users.",
      },
    ],
    chanllenges: [
      {
        title: "Drupal & Next.js Integration",
        description:
          "Synchronizing content between a decoupled Drupal backend and a static/dynamic hybrid frontend introduced data-fetching challenges.",
        solution:
          "We built a custom GraphQL bridge and caching layer for efficient, real-time synchronization with minimal latency.",
      },
      {
        title: "Accessible UI for Rentals",
        description:
          "Designing a rental-based ecommerce UI while maintaining accessibility was non-trivial, especially for availability-based calendar inputs.",
        solution:
          "We utilized accessible modal components and custom ARIA-enhanced date pickers that work across devices and assistive technologies.",
      },
      {
        title: "High-Fidelity Design Translation",
        description:
          "Turning pixel-perfect Figma designs into performant, responsive components without sacrificing UX quality.",
        solution:
          "We built a reusable component system with Tailwind CSS and Framer Motion to ensure consistent animations and layout fidelity.",
      },
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1549921296-3a4b5d10fa0d?q=80&w=2232&auto=format&fit=crop",
        alt: "Homepage with rental categories",
      },
      {
        url: "https://images.unsplash.com/photo-1604079628042-9438cd1db9b6?q=80&w=2232&auto=format&fit=crop",
        alt: "Equipment detail view with rental calendar",
      },
      {
        url: "https://images.unsplash.com/photo-1581091012184-1f15e1b321ec?q=80&w=2232&auto=format&fit=crop",
        alt: "Cart and checkout interface",
      },
      {
        url: "https://images.unsplash.com/photo-1592890288540-767798582c6f?q=80&w=2232&auto=format&fit=crop",
        alt: "Admin view in Drupal CMS",
      },
    ],
  },
  {
    id: 2,
    title: "Meli's Fashion",
    description: "Elegant ecommerce platform for modern fashion",
    longDescription: [
      "Meli's Fashion is a stylish ecommerce website for selling modern fashion items including clothing, accessories, and seasonal collections.",
      "The site was built on WordPress using WooCommerce, enabling fast product management, order processing, and payment integration.",
      "We focused on delivering a brand-forward, responsive experience that highlights the uniqueness of Meli’s offerings.",
      "Core features include:",
      "- User-friendly shopping experience",
      "- Mobile-first design",
      "- Custom product filters (size, color, category)",
      "- Integrated Stripe & PayPal payment gateways",
      "- Blog and style inspiration section",
      "We ensured SEO optimization, fast load times, and an elegant UI that aligns with the fashion brand’s identity.",
    ],
    tags: ["Ecommerce", "WordPress", "Fashion", "WooCommerce"],
    imageUrl:
      "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    year: "2024",
    status: "Live",
    team: "3 developers, 1 designer",
    liveUrl: "https://melisfashion.example.com",
    githubUrl: "",
    features: [
      {
        title: "WooCommerce Integration",
        description:
          "Built with WordPress and WooCommerce to manage products, categories, orders, and customers efficiently.",
      },
      {
        title: "Custom Style Filters",
        description:
          "Users can filter items by size, type, color, and season for a personalized shopping experience.",
      },
      {
        title: "Mobile Optimization",
        description:
          "Responsive layout with touch-optimized components, ensuring excellent usability on all devices.",
      },
      {
        title: "Blog & Style Guide",
        description:
          "Inspiration-driven blog content helps drive SEO and increase engagement with style-focused audiences.",
      },
      {
        title: "Secure Payments",
        description:
          "Supports multiple payment options with SSL encryption and fraud protection via Stripe and PayPal.",
      },
    ],
    chanllenges: [
      {
        title: "Brand-Oriented UI",
        description:
          "Creating a custom WordPress theme that reflects the Meli's Fashion identity while remaining fast and responsive.",
        solution:
          "We built a lightweight custom theme from scratch using Tailwind and integrated it with WooCommerce templates.",
      },
      {
        title: "Scalability on Shared Hosting",
        description:
          "WordPress performance began degrading as catalog size grew on shared hosting environments.",
        solution:
          "We implemented caching (LiteSpeed + Redis), optimized image delivery, and moved to a managed WordPress host.",
      },
      {
        title: "Customer Retention Tools",
        description:
          "Meli wanted returning customers but lacked tools like wishlists, abandoned cart recovery, and email automation.",
        solution:
          "We integrated Mailchimp, enabled wishlists, and used plugins for abandoned cart tracking and customer segmentation.",
      },
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1516762689617-e1cdf9f6f26f?q=80&w=2232&auto=format&fit=crop",
        alt: "Fashion storefront UI",
      },
      {
        url: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=2232&auto=format&fit=crop",
        alt: "Product details and variation selection",
      },
      {
        url: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=2232&auto=format&fit=crop",
        alt: "Checkout and cart page",
      },
      {
        url: "https://images.unsplash.com/photo-1491557369654-ef4a4e9a1dce?q=80&w=2232&auto=format&fit=crop",
        alt: "Style blog overview",
      },
    ],
  },
  {
    id: 3,
    title: "Fikreselam Hospital System",
    description: "Comprehensive hospital management platform",
    longDescription: [
      "We built a custom Hospital Management System (HMS) for Fikreselam General Hospital to streamline operations, improve patient care, and centralize medical data.",
      "The platform includes modules for appointments, patient records, billing, prescriptions, pharmacy inventory, lab results, and staff roles.",
      "Designed with reliability and security in mind, this web-based HMS helps staff collaborate in real time and access patient data securely.",
      "Highlights include:",
      "- Role-based dashboards (Doctor, Nurse, Admin, Lab Tech)",
      "- EMR/EHR system with patient history and test tracking",
      "- Pharmacy and lab modules with inventory and results",
      "- Appointment booking and notifications",
      "- Secure user authentication and audit trails",
      "Built with a modern tech stack, the system is future-ready and scalable.",
    ],
    tags: ["Healthcare", "Hospital System", "Web App", "Admin Panel"],
    imageUrl:
      "https://images.unsplash.com/photo-1485848395967-65dff62dc35b?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    year: "2025",
    status: "Live",
    team: "4 full-stack devs, 1 QA, 1 PM",
    liveUrl: "https://fikreselam-hms.example.com",
    githubUrl: "",
    features: [
      {
        title: "Modular Architecture",
        description:
          "Separate modules for departments like Lab, Pharmacy, Doctors, Nurses, Reception, and Admins with strict access rules.",
      },
      {
        title: "Patient Record System",
        description:
          "Stores diagnoses, test results, medical history, and visit summaries with version history and edit tracking.",
      },
      {
        title: "Inventory & Billing",
        description:
          "Tracks medicine, equipment, and consumables, with billing integration for inpatients and outpatients.",
      },
      {
        title: "Real-Time Notifications",
        description:
          "Email/SMS and internal alerts for appointment reminders, test results, and lab-pharmacy workflows.",
      },
      {
        title: "Data Security & Access Logs",
        description:
          "Encrypted patient records, login audit logs, and multi-level permission management ensure regulatory compliance.",
      },
    ],
    chanllenges: [
      {
        title: "User Role Complexity",
        description:
          "The hospital required strict access control with unique workflows for over 7 different roles.",
        solution:
          "We implemented a custom RBAC (Role-Based Access Control) layer with configurable permissions and route guards.",
      },
      {
        title: "Offline Support",
        description:
          "In areas with limited connectivity, medical staff needed to access core features offline.",
        solution:
          "We introduced service workers and local caching for critical data like patient records and prescriptions.",
      },
      {
        title: "Data Migration from Paper Records",
        description:
          "Fikreselam’s data was entirely on paper and had to be digitized.",
        solution:
          "We trained hospital staff and built a bulk-entry interface with validation layers for secure and fast input.",
      },
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1588776814546-4a55f79c3b3f?q=80&w=2232&auto=format&fit=crop",
        alt: "Doctor dashboard and EMR view",
      },
      {
        url: "https://images.unsplash.com/photo-1581090700227-1fd1a06c2288?q=80&w=2232&auto=format&fit=crop",
        alt: "Patient search and medical record module",
      },
      {
        url: "https://images.unsplash.com/photo-1588774069201-ecbc3b1b6d6f?q=80&w=2232&auto=format&fit=crop",
        alt: "Pharmacy inventory system",
      },
      {
        url: "https://images.unsplash.com/photo-1588776814443-97e1970df7d6?q=80&w=2232&auto=format&fit=crop",
        alt: "Admin analytics and activity logs",
      },
    ],
  },
  {
    id: 4,
    title: "Omni-Channel UX",
    description: "Seamless experience across all digital surfaces",
    longDescription: [
      "Omni-Channel UX represents a paradigm shift in cross-platform design, enabling truly seamless transitions between devices.",
      "Our framework includes:",
      "- Context preservation across 17 device types",
      "- 94% accurate journey prediction",
      "- Sub-50ms state synchronization",
      "Benefits for users:",
      "- 63% reduction in task completion time",
      "- 41% decrease in cognitive load",
      "- 87% improvement in cross-device workflow satisfaction",
      "Currently deployed in three enterprise environments with plans for public SDK release next quarter.",
    ],
    tags: ["UX", "IoT", "Multi-Device"],
    imageUrl:
      "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2232&auto=format&fit=crop",
    year: "2024",
    status: "Live Production",
    team: "15 specialists",
    liveUrl: "https://quantuminterface.example.com",
    githubUrl: "https://github.com/kecheste",
    features: [
      {
        title: "Adaptive Quantum States",
        description:
          "Interfaces that adjust in real-time based on user interaction patterns, leveraging quantum state superposition.",
      },
      {
        title: "Zero-Latency Transitions",
        description:
          "Instantaneous UI changes that eliminate traditional loading times, creating a seamless user experience.",
      },
      {
        title: "Predictive Rendering",
        description:
          "Utilizes quantum probability models to anticipate user actions and pre-render UI elements, enhancing responsiveness.",
      },
      {
        title: "Cross-Device Consistency",
        description:
          "Ensures a uniform experience across devices by maintaining quantum state coherence in multi-device environments.",
      },
      {
        title: "Scalable Architecture",
        description:
          "Built to handle millions of concurrent users with dynamic scaling based on quantum computational resources.",
      },
    ],
    chanllenges: [
      {
        title: "Quantum State Management",
        description:
          "Maintaining coherence and managing entanglement across distributed systems presented significant challenges, requiring novel algorithms.",
        solution:
          "We developed a state management protocol that uses quantum error correction techniques to ensure stability and reliability in user interfaces.",
      },
      {
        title: "User Adoption",
        description:
          "Introducing quantum concepts to users unfamiliar with the technology posed a barrier to adoption.",
        solution:
          "We implemented an intuitive onboarding process that gradually introduces quantum principles through interactive tutorials and visual aids.",
      },
      {
        title: "Integration with Legacy Systems",
        description:
          "Ensuring compatibility with existing web technologies while implementing quantum features was complex.",
        solution:
          "We created a hybrid architecture that allows legacy systems to interface with quantum components through standardized APIs, enabling gradual migration.",
      },
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2232&auto=format&fit=crop",
        alt: "Quantum Interface Image 1",
      },
      {
        url: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2232&auto=format&fit=crop",
        alt: "Quantum Interface Image 2",
      },
      {
        url: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2232&auto=format&fit=crop",
        alt: "Quantum Interface Image 3",
      },
      {
        url: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2232&auto=format&fit=crop",
        alt: "Quantum Interface Image 4",
      },
    ],
  },
  {
    id: 5,
    title: "Tripbooka",
    description: "Smart lead management platform for travel agents",
    longDescription: [
      "Tripbooka is a comprehensive lead management solution built for modern travel agencies. It bridges the gap between agents and travelers by streamlining the entire trip proposal lifecycle.",
      "With Tripbooka, travel agents can:",
      "- Manage incoming travel leads with ease",
      "- Send detailed proposals with multiple customizable options",
      "- Track traveller engagement and preferences",
      "On the traveler side, users can:",
      "- Submit travel requests specifying destination, budget, and timeline",
      "- Receive curated proposals with multiple package options",
      "- Choose their preferred travel option and confirm instantly",
      "Admins have complete control via a centralized dashboard:",
      "- Approve or reject proposals",
      "- Manage agent access levels and plan tiers (Premium/Basic)",
      "- Monitor platform-wide metrics and user feedback",
      "Tripbooka empowers travel agents with efficient tools and gives travelers a frictionless experience for planning trips.",
    ],
    tags: ["TravelTech", "Lead Management", "B2B SaaS"],
    imageUrl:
      "https://images.unsplash.com/photo-1523592121529-f6dde35f079e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    year: "2025",
    status: "Live",
    team: "12 developers + 2 product managers",
    liveUrl: "https://tripbooka.example.com",
    githubUrl: "https://github.com/tripbooka",
    features: [
      {
        title: "Multi-Option Proposals",
        description:
          "Agents can send multiple trip options within a single proposal, giving travelers flexibility and choice.",
      },
      {
        title: "Searchable Public Proposals",
        description:
          "Travelers without direct agent contact can search for proposals by entering travel destinations and preferences.",
      },
      {
        title: "Real-Time Status Tracking",
        description:
          "Both agents and travelers receive real-time updates on proposal status, traveler actions, and confirmation.",
      },
      {
        title: "Role-Based Dashboard",
        description:
          "Admins, agents, and travelers each have a personalized dashboard tailored to their workflow.",
      },
      {
        title: "Premium vs Basic Plans",
        description:
          "Travel agencies can subscribe to premium features such as priority leads, branded proposals, and analytics tools.",
      },
    ],
    chanllenges: [
      {
        title: "Complex Proposal Structuring",
        description:
          "Allowing agents to create flexible proposals with multiple options per lead without overwhelming the traveler UI.",
        solution:
          "We developed a dynamic schema builder and option selection UX, enabling scalable, intuitive proposal customization.",
      },
      {
        title: "Search-Based Discovery by Travelers",
        description:
          "Enabling travelers to find matching proposals without contacting agents directly posed data and security issues.",
        solution:
          "We built a smart proposal indexing service with filters, permissions, and obfuscated agent data until interaction.",
      },
      {
        title: "Plan Tier Management",
        description:
          "Implementing a billing and feature gating system to separate premium from basic users across roles.",
        solution:
          "We integrated Stripe billing with a role-based access control (RBAC) engine to toggle features based on subscription.",
      },
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1524777312-3b88d1075d4a?q=80&w=2232&auto=format&fit=crop",
        alt: "Tripbooka dashboard for agents",
      },
      {
        url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2232&auto=format&fit=crop",
        alt: "Traveler selecting from proposal options",
      },
      {
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2232&auto=format&fit=crop",
        alt: "Destination search interface",
      },
      {
        url: "https://images.unsplash.com/photo-1558980664-10ea0aa67ec0?q=80&w=2232&auto=format&fit=crop",
        alt: "Admin dashboard interface",
      },
    ],
  },
];

export const openPositions = [
  {
    id: "frontend-dev",
    title: "Frontend Developer",
    type: "Full-time",
    location: "Remote",
    department: "Engineering",
    salary: "$90,000 - $120,000",
    description:
      "Develop and maintain high-quality web applications using modern JavaScript frameworks.",
    responsibilities: [
      "Build reusable components and front-end libraries",
      "Optimize applications for maximum performance",
      "Collaborate with UX designers to implement designs",
    ],
    requirements: [
      "3+ years experience with React",
      "Proficient in TypeScript",
      "Experience with responsive design",
    ],
  },
  {
    id: "ui-designer",
    title: "UI/UX Designer",
    type: "Full-time",
    location: "New York",
    department: "Design",
    salary: "$80,000 - $110,000",
    description:
      "Create beautiful and functional user interfaces for our digital products.",
    responsibilities: [
      "Design user flows and interfaces",
      "Create prototypes and mockups",
      "Conduct user research and testing",
    ],
    requirements: [
      "Portfolio demonstrating UI/UX skills",
      "Experience with Figma or Sketch",
      "Understanding of design systems",
    ],
  },
  {
    id: "marketing-specialist",
    title: "Digital Marketing Specialist",
    type: "Contract",
    location: "Remote",
    department: "Marketing",
    salary: "$60 - $80/hour",
    description:
      "Develop and execute digital marketing campaigns to drive engagement and conversions.",
    responsibilities: [
      "Manage social media channels",
      "Create and optimize paid campaigns",
      "Analyze campaign performance",
    ],
    requirements: [
      "2+ years digital marketing experience",
      "Google Ads and Meta Ads certification",
      "Analytical mindset",
    ],
  },
  {
    id: "backend-dev",
    title: "Backend Developer",
    type: "Full-time",
    location: "San Francisco",
    department: "Engineering",
    salary: "$100,000 - $140,000",
    description: "Build and maintain our server infrastructure and APIs.",
    responsibilities: [
      "Develop and maintain APIs",
      "Optimize database performance",
      "Implement security best practices",
    ],
    requirements: [
      "Experience with Node.js and Python",
      "Knowledge of database systems",
      "Understanding of cloud infrastructure",
    ],
  },
];
