import styled from "styled-components";
// import the styled component library
// Define a textarea styled component
// define the interface for the props (one is listed below)
// onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void

// destructure the props
const InputContainer = styled.div`
  width: 50%;
  height: calc(100vh - 58.5px);
  padding: 20px;
  box-sizing: border-box;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  border: none;
  padding: 10px;
  box-sizing: border-box;
  font-size: 16px;
  outline: none;
`;

// pass the props (on change and value to the StyledTextArea styled component)
interface MarkdownInputProps {
  setMarkdown: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  markdown: string;
}

const MarkdownInput = ({setMarkdown, markdown}: MarkdownInputProps) => {
  return (
    <InputContainer>
      <StyledTextArea
        onChange={setMarkdown}
        value={markdown}
      />
    </InputContainer>
  );
};

export default MarkdownInput;