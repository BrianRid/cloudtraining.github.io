import { ReactNode } from "react";

export interface CardProps {
  name: string;
  abstract: string;
  imageUrl: string;
  url?: string;
  onClick?: () => void;
}
