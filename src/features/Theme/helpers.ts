import { BREAKPOINTS } from "./constants";

export const mediaQuery = (key: keyof typeof BREAKPOINTS) => {
    return (style: TemplateStringsArray | String) =>
      `@media (min-width: ${BREAKPOINTS[key]}) { ${style} }`;
  };