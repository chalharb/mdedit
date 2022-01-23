import React from 'react';
import { StyledHero } from './styled';
import { HeroProps } from './models';

const Hero: React.FC<HeroProps> = ({
    size = 'sm',
    color = 'primary',
    children,
    ...props
}) => <StyledHero size={size} color={color} {...props}>{children}</StyledHero>;

export default Hero;