import styled from 'styled-components';
import { HeroProps } from './models';

export const StyledHero = styled.header<HeroProps>`
  padding: ${({ theme, size }) => theme.sizes[size!]} 0;
  background-color: ${({ theme, color }) => theme.colors[color!]};
`;