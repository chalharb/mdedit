import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { StyledRender } from "./styled";

interface MarkdownProps {
  markdown: string;
}

const Render: React.FC<MarkdownProps> = ({ markdown }) => {
  return (
    <StyledRender>
      <ReactMarkdown remarkPlugins={[[remarkGfm, { singleTilde: false }]]}>
        {markdown}
      </ReactMarkdown>
    </StyledRender>
  );
};

export default Render;
