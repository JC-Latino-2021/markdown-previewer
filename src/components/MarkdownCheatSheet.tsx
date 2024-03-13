import styled from "styled-components";

const GuideContainer = styled.div`
  background-color: #f9f9f9;
  padding: 10px;
  margin: 10px;
  border: 1px solid #ddd;
`;

const MarkdownCheatSheet = () => {
    return (
    <GuideContainer>
    <h2>Markdown Cheat Sheet</h2>
    <ul>
        <li># H1</li>
        <li>## H2</li>
        <li>### H3</li>
        <li>**bold**</li>
        <li>*italic*</li>
        <li>[Link](http://a.com)</li>
        <li>![Image](http://url/a.png)</li>
        <li>`inline code`</li>
        <li>```block code```</li>
        <li>- list item</li>
    </ul>
    </GuideContainer>
    )
  };
  
  export default MarkdownCheatSheet;