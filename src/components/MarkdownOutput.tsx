// import the styled component library
// import ReactMarkdown from "react-markdown";

// Create a Output container styled component which is a div

// create the interface for the props

// destructure the props
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

const OutputContainer = styled.div`
  width: 50%;
  height: calc(100vh - 58.5px);
  padding: 20px;
  box-sizing: border-box;
  overflow: auto;
  border-left: 1px solid #ddd;
  background-color: #f9f9f9;
`;

interface MarkdownOutputProps {
  markdown: string;
}

const MarkdownOutput = ({markdown}: MarkdownOutputProps) => {
    // return the OutputContainer with <ReactMarkdown>{markdown}</ReactMarkdown> as a child
    return (
      <OutputContainer>
        <ReactMarkdown>{markdown}</ReactMarkdown>;
      </OutputContainer>
    );
  };
  
  export default MarkdownOutput;