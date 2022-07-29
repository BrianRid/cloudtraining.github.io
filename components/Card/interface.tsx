import { ReactNode } from "react";
import { EducationalResourceTag } from "../../utils/data";

export interface CardProps {
  name: string;
  abstract: string;
  imageUrl: string;
  articleUrl?: string;
  deploymentUrl?: string;
  tags?: EducationalResourceTag[];
  onClick?: () => void;
}
