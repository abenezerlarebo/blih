import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { MdOutlinePrecisionManufacturing } from "react-icons/md";
import { IoMdRocket } from "react-icons/io";

export const testimonials = [
  {
    name: "Helmut Okike",
    role: "CEO, Tripbooka",
    text: "Blih Technologies helped us launch Tripbooka from the ground up. Their fast and scalable lead management system changed the way travel agents operate and manage clients.",
    rating: 5,
    icon: <IoMdRocket className="text-blue-400" />,
    companyLogo: "/assets/logos/tripbooka.png",
    tech: ["React", "Firebase", "Node.js"],
  },
  {
    name: "Gendy Blackman",
    role: "CEO, Maritime Lens & Equipment Rentals (MLER)",
    text: "They completely modernized our booking system. What used to take hours now takes minutes; our customers love the speed and simplicity.",
    rating: 5,
    icon: <MdOutlinePrecisionManufacturing className="text-purple-400" />,
    companyLogo: "/assets/logos/mler.png",
    tech: ["Next.js", "MongoDB", "Stripe"],
  },
  {
    name: "Mohamed Farax",
    role: "CEO, Nuun Academy",
    text: "The learning platform they built for us is intuitive and reliable. It’s helping thousands of students access quality education in the Somali region.",
    rating: 5,
    icon: <RiDoubleQuotesL className="text-green-400" />,
    companyLogo: "/assets/logos/nuunacademy.png",
    tech: ["TypeScript", "Tailwind", "Supabase"],
  },
  {
    name: "Eliza Trent",
    role: "Founder, Modest Designs (Portland, OR)",
    text: "As a small studio, we needed someone who just *got it*. Blih Technologies delivered a stunning portfolio site and handled all the backend complexity so we could focus on design.",
    rating: 5,
    icon: <RiDoubleQuotesR className="text-pink-400" />,
    companyLogo: "/assets/logos/modestdesigns.png",
    tech: ["Next.js", "Prisma", "Vercel"],
  },
];
