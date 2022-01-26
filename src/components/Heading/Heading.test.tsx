import React from "react";
import { render } from "../../test-utils";
import Heading from "./Heading";

describe("Heading Component", () => {
  it("renders Heading component with h1 tag", () => {
    const { container } = render(<Heading tag="h1">Heading Content</Heading>);
    const el = container.querySelector("h1");
    expect(el).toBeInTheDocument();
    expect(el).toHaveTextContent("Heading Content");
  });

  it("renders Heading component with h2 tag", () => {
    const { container } = render(<Heading tag="h2">Heading Content</Heading>);
    const el = container.querySelector("h2");
    expect(el).toBeInTheDocument();
    expect(el).toHaveTextContent("Heading Content");
  });

  it("renders Heading component with h3 tag", () => {
    const { container } = render(<Heading tag="h3">Heading Content</Heading>);
    const el = container.querySelector("h3");
    expect(el).toBeInTheDocument();
    expect(el).toHaveTextContent("Heading Content");
  });

  it("renders Heading component with h4 tag", () => {
    const { container } = render(<Heading tag="h4">Heading Content</Heading>);
    const el = container.querySelector("h4");
    expect(el).toBeInTheDocument();
    expect(el).toHaveTextContent("Heading Content");
  });

  it("renders Heading component with h5 tag", () => {
    const { container } = render(<Heading tag="h5">Heading Content</Heading>);
    const el = container.querySelector("h5");
    expect(el).toBeInTheDocument();
    expect(el).toHaveTextContent("Heading Content");
  });

  it("renders Heading component with h6 tag", () => {
    const { container } = render(<Heading tag="h6">Heading Content</Heading>);
    const el = container.querySelector("h6");
    expect(el).toBeInTheDocument();
    expect(el).toHaveTextContent("Heading Content");
  });
});
