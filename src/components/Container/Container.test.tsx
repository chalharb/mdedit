import React from 'react';
import { render, screen } from '../../test-utils';
import Container from './Container';

describe('Container Component', () => {
  it('renders Heading component with h1 tag', () => {
    render(<Container>Container Content</Container>);
    const containerContent = screen.getByText(/Container Content/i);
    expect(containerContent).toBeInTheDocument();
  });
});