import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeProps } from './models';
import { theme } from './constants';

const Theme: React.FC<ThemeProps> = ({
  children,
}) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;