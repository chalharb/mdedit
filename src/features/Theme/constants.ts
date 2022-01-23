import { ColorOptions } from "./models";

export const THEME_COLORS: { [key in ColorOptions]: string } = {
  primary: "#00bcd4",
  secondary: "#ff9800",
  accent: "#f44336",
  error: "#f44336",
  warning: "#ff9800",
  info: "#00bcd4",
  success: "#4caf50",
  lightgray: "#f5f5f5",
};

export const THEME_SIZES = {
  xs: "0.75rem",
  sm: "1rem",
  md: "1.5rem",
  lg: "2rem",
  xl: "3rem",
  xxl: "4rem",
};

export const BREAKPOINTS = {
  md: "480px",
  lg: "768px",
  xl: "992px",
  xxl: "1200px",
};

export const theme = {
  colors: THEME_COLORS,
  sizes: THEME_SIZES,
  breakpoints: BREAKPOINTS,
};
