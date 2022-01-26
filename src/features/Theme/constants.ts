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
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  xxl: "1400px",
  xxxl: "1800px",
};

export const CONTAINER_WIDTHS = {
  xs: "100%",
  sm: "540px",
  md: "720px",
  lg: "960px",
  xl: "1140px",
  xxl: "1320px",
  xxxl: "1600px",
};

export const theme = {
  colors: THEME_COLORS,
  sizes: THEME_SIZES,
  breakpoints: BREAKPOINTS,
  containerWidths: CONTAINER_WIDTHS,
};
