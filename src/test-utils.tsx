import React, { FC, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { Theme } from "./features/Theme";

const AllTheProviders: FC = ({ children }) => {
  return <Theme>{children}</Theme>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
