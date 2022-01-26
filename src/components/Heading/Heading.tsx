import React from "react";
import { HeadingProps } from "./models";

const Heading: React.FC<HeadingProps> = ({ tag, children, ...props }) =>
  React.createElement(tag, { ...props }, children);

export default Heading;
