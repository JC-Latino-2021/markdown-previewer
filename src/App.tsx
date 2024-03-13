import { useState } from "react";
import Header from "./components/Header";
import MarkdownInput from "./components/MarkdownInput";
import MarkdownOutput from "./components/MarkdownOutput";
import styled from "styled-components";
import MarkdownGuide from "./components/MarkdownGuide";
import { createGlobalStyle } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width:100%;
`;

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    box-sizing: border-box;
    color: #333;
  }
`;

const App = () => {
  const [markdown, setMarkdown] = useState(`# Hello World`);
  const [showGuide, setShowGuide] = useState(false);
  // Create a state to manage the markdown text

  const handleToggleGuide = () => {
    setShowGuide(!showGuide);
  };

  const handleChangeEvent = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(event.target.value);
  }

  return (
    <>
      <GlobalStyles />
      <Header onToggleGuide={handleToggleGuide} />
      {showGuide && <MarkdownGuide />}
      <Container>
        <MarkdownInput markdown={markdown} setMarkdown={handleChangeEvent} />
        <MarkdownOutput markdown={markdown} />
      </Container>
    </>
  );
};


export default App;
