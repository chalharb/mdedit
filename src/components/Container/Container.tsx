import React from "react";
import { ContainerProps } from "./models";
import { StyledContainer } from "./styled";

const Container: React.FC<ContainerProps> = ({ children, ...props }) => (
  <StyledContainer {...props}>{children}</StyledContainer>
);

export default Container;
