import styled from "styled-components";
import { ContainerProps } from "./models";

import { mediaQuery } from "../../features/Theme";

export const StyledContainer = styled.div<ContainerProps>`
  width: 100%;
  margin: auto;

  ${(props) => mediaQuery("md")(`width: ${props.theme.breakpoints.md}`)}

  ${(props) => mediaQuery("lg")(`width: ${props.theme.breakpoints.lg}`)}

  ${(props) => mediaQuery("xl")(`width: ${props.theme.breakpoints.xl}`)}
  
  ${(props) => mediaQuery("xxl")(`width: ${props.theme.breakpoints.xxl}`)}
`;
