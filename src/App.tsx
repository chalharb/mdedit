import React from 'react';
import Hero from './features/Hero';
import Heading from './components/Heading';
import Container from './components/Container';

function App() {
  return (
    <>
      <Hero size='lg' color='primary'>
        <Container>
          <Heading tag='h1'>Markdown Edit</Heading>
          <Heading tag='h3'>A simple markdown editor</Heading>
        </Container>
      </Hero>
    </>
  );
}

export default App;
