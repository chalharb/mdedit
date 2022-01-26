import React from "react";
import { RowProps } from "./models";
import { StyledRow } from "./styled";

const Row: React.FC<RowProps> = ({ children, ...props }) => (
  <StyledRow {...props}>{children}</StyledRow>
);

export default Row;
