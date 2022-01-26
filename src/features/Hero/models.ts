import { ColorOptions } from "../Theme";

type HeroSize = "sm" | "md" | "lg";

export interface HeroProps {
  size?: HeroSize;
  color?: ColorOptions;
  children: React.ReactNode;
}
