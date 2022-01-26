import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { StyledEditor } from "./styled";
import markdownContent from "./demoContent";
import { EditorProps } from "./models";

const MarkdownEditor: React.FC<EditorProps> = ({
  onContentChange,
}) => {
  const [markdown, setMarkdown] = useState(markdownContent);

  const handleEditorChange = (value: any) => {
    setMarkdown(value);
    onContentChange(value);
  };

  return (
    <StyledEditor>
      <Editor
        theme="vs-light"
        defaultLanguage="markdown"
        defaultValue={markdown}
        options={{
          lineNumbers: "off",
          minimap: {
            enabled: false,
          },
        }}
        onChange={handleEditorChange}
      />
    </StyledEditor>
  );
};

export default MarkdownEditor;
