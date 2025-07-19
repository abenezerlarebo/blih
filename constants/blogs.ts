export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  imageUrl: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of UI Design in 2024",
    excerpt:
      "Exploring the latest trends that will dominate user interfaces this year",
    content: "Full content about UI design trends...",
    category: "Design",
    date: "2024-03-15",
    author: "Marcelo Rodriguez",
    readTime: "5 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["UI/UX", "Trends", "Design Systems"],
  },
  {
    id: "2",
    title: "React 19: What's Coming Next",
    excerpt: "A deep dive into the upcoming features of React 19",
    content: "Full content about React 19 features...",
    category: "Development",
    date: "2024-03-10",
    author: "Sarah Johnson",
    readTime: "8 min read",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661326248013-3107a4b2bd91?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["React", "JavaScript", "Frontend"],
  },
  {
    id: "3",
    title: "Building Scalable Microservices",
    excerpt: "Architectural patterns for scalable microservice applications",
    content: "Full content about microservices...",
    category: "Engineering",
    date: "2024-03-05",
    author: "David Chen",
    readTime: "10 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1613909207039-6b173b755cc1?q=80&w=1247&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Backend", "Architecture", "Cloud"],
  },
  {
    id: "4",
    title: "The Psychology of Color in Marketing",
    excerpt: "How color choices impact user behavior and conversions",
    content: "Full content about color psychology...",
    category: "Marketing",
    date: "2024-02-28",
    author: "Emily Wilson",
    readTime: "6 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1599413722590-6d5f382480db?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Branding", "Psychology", "Conversion"],
  },
  {
    id: "5",
    title: "Advanced CSS Techniques for 2024",
    excerpt: "Cutting-edge CSS features you should be using today",
    content: "Full content about CSS techniques...",
    category: "Development",
    date: "2024-02-20",
    author: "Alex Turner",
    readTime: "7 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?q=80&w=1028&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["CSS", "Frontend", "Web Design"],
  },
  {
    id: "6",
    title: "Machine Learning for Designers",
    excerpt: "How designers can leverage AI in their workflow",
    content: "Full content about ML for designers...",
    category: "Design",
    date: "2024-02-15",
    author: "Priya Patel",
    readTime: "9 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1474403078171-7f199e9d1335?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["AI", "Design Tools", "Automation"],
  },
];

export const categories = [
  "All",
  "Design",
  "Development",
  "Engineering",
  "Marketing",
];
