import React, { useState } from "react";

import Hero from "../Hero";
import Heading from "../../components/Heading";
import Container from "../../components/Container";
import { Render, Editor } from "../Markdown";
import Row from "../../components/Row/Row";
import Column from "../../components/Column/Column";
import markdownContent from "../Markdown/demoContent";

function App() {
  const [markdown, setMarkdown] = useState(markdownContent);

  const handleEditorUpdate = (value: string) => {
    setMarkdown(value);
  };

  return (
    <>
      <Hero size="sm" color="primary">
        <Container>
          <Row>
            <Column>
              <Heading tag="h1">Markdown Edit</Heading>
              <Heading tag="h3">A simple markdown editor</Heading>
            </Column>
          </Row>
        </Container>
      </Hero>

      <Container>
        <Row>
          <Column>
            <Heading tag="h2">Markdown Editor</Heading>
            <Editor onContentChange={handleEditorUpdate} />
          </Column>
          <Column>
            <Heading tag="h2">Compiled Markdown</Heading>
            <Render markdown={markdown} />
          </Column>
        </Row>
      </Container>
    </>
  );
}

export default App;
