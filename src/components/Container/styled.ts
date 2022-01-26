import styled from "styled-components";
import { ContainerProps } from "./models";
import { mediaQuery } from "../../features/Theme";

export const StyledContainer = styled.div<ContainerProps>`
  width: ${(props) => props.theme.containerWidths.xs};
  margin: auto;

  ${(props) => mediaQuery("sm")(`width: ${props.theme.containerWidths.sm}`)}
  ${(props) => mediaQuery("md")(`width: ${props.theme.containerWidths.md}`)}
  ${(props) => mediaQuery("lg")(`width: ${props.theme.containerWidths.lg}`)}
  ${(props) => mediaQuery("xl")(`width: ${props.theme.containerWidths.xl}`)}
  ${(props) => mediaQuery("xxl")(`width: ${props.theme.containerWidths.xxl}`)}
  ${(props) => mediaQuery("xxxl")(`width: ${props.theme.containerWidths.xxxl}`)}
`;
