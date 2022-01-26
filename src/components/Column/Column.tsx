import React from "react";
import { ColumnProps } from "./models";
import { StyledColumn } from "./styled";

const Column: React.FC<ColumnProps> = ({ children, ...props }) => (
  <StyledColumn {...props}>{children}</StyledColumn>
);

export default Column;
