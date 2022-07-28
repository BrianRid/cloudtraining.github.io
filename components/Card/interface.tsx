import { ReactNode } from "react";

export interface CardProps {
  name: string;
  abstract: string;
  imageUrl: string;
  articleUrl?: string;
  deploymentUrl?: string;
  onClick?: () => void;
}
