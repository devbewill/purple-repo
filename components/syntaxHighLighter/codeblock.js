import { useState, useEffect } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import nightOwl from "react-syntax-highlighter/dist/cjs/styles/hljs/night-owl";
import styled from "styled-components";

const CodeBlock = ({ items }) => {
  const [fromFile, setFromFile] = useState("");

  useEffect(() => {
    const readFromFile = () => {
      fetch("code.txt")
        .then((r) => r.text())
        .then((text) => {
          setFromFile(text);
        });
    };
    readFromFile();
  }, []);

  return (
    <Content>
      <SyntaxHighlighter
        language="javascript"
        className={"syntax-highlighter"}
        wrapLongLines={true}
        style={nightOwl}
        wrapLines={true}
      >
        {fromFile}
      </SyntaxHighlighter>
    </Content>
  );
};

const Content = styled.a`
  max-width: 50vw;
  margin: 0 auto;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 1.1rem;

  .syntax-highlighter {
    font-size: 1rem;
    line-height: 1.4;
  }
`;

export default CodeBlock;
