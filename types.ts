import { LucideIcon } from "lucide-react";

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  previousRole: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface BlogPost {
  category: string;
  title: string;
  type: "ARTICLE" | "CASE STUDIES";
}