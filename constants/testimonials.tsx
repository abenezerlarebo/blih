import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { MdOutlinePrecisionManufacturing } from "react-icons/md";
import { IoMdRocket } from "react-icons/io";

export const testimonials = [
  {
    name: "Samantha Lee",
    role: "Founder, FutureTech",
    text: "Their development team transformed our platform beyond conventional limits. Their technical architecture reduced latency by 92% while increasing throughput 4x.",
    rating: 5,
    icon: <IoMdRocket className="text-blue-400" />,
    companyLogo: "/assets/logos/futuretech.png",
    tech: ["React", "Node.js", "AWS"],
  },
  {
    name: "Daniel Cruz",
    role: "CTO, SynthLabs",
    text: "The team implemented our web infrastructure with precision. Their solutions maintain 99.999% uptime even under heavy traffic loads.",
    rating: 5,
    icon: <MdOutlinePrecisionManufacturing className="text-purple-400" />,
    companyLogo: "/assets/logos/synthlabs.png",
    tech: ["Next.js", "GraphQL", "Docker"],
  },
  {
    name: "Amina Yusuf",
    role: "Lead Developer, NexaAI",
    text: "Working with them was like accessing technology from the future. Their UI framework increased our engagement metrics by 450% in Q1.",
    rating: 5,
    icon: <RiDoubleQuotesL className="text-white" />,
    companyLogo: "/assets/logos/nexaai.png",
    tech: ["TypeScript", "Tailwind", "Framer Motion"],
  },
  {
    name: "Marcus Zhang",
    role: "Director, QuantumCore",
    text: "Their security protocols are rock solid. They implemented protections that our own security team couldn't penetrate.",
    rating: 5,
    icon: <RiDoubleQuotesR className="text-red-400" />,
    companyLogo: "/assets/logos/quantumcore.png",
    tech: ["OAuth", "JWT", "Security Headers"],
  },
];
