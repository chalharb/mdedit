import React from "react";
import { render } from "../../test-utils";
import Hero from "./Hero";

describe("Hero Component", () => {
  it("renders Hero component with content", () => {
    const { container } = render(<Hero>Hero Content</Hero>);
    const el = container.querySelector("header");
    expect(el).toBeInTheDocument();
    expect(el).toHaveTextContent("Hero Content");
  });
});
