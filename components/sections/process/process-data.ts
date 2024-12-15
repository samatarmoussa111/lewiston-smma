import { FileSearch, Rocket, Users, CheckCircle } from "lucide-react";

export const processSteps = [
  {
    step: 1,
    icon: Users,
    title: "Free Consultation",
    description:
      "We discuss your goals, challenges, and vision for your online presence.",
  },
  {
    step: 2,
    icon: FileSearch,
    title: "Personalized Strategy",
    description:
      "Our team crafts a custom digital strategy tailored to your business needs.",
  },
  {
    step: 3,
    icon: Rocket,
    title: "Development Phase",
    description:
      "We bring your vision to life with modern design and powerful functionality.",
  },
  {
    step: 4,
    icon: CheckCircle,
    title: "Launch & Optimize",
    description:
      "Your site goes live with ongoing support and performance optimization.",
  },
] as const;
