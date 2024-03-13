import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* top right bottom left */
  padding: 15px;
  background-color: #282c34;
  color: white;
`;

const Title = styled.h2`
  margin: 0;
`;

const Button = styled.button`
  background-color: #61dafb;
  padding: 10px;
  color: #282c34;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  /* pseudo class */
  &:hover {
    background-color: #35a8d4;
  }
`;

interface HeaderProps {
  onToggleGuide: () => void;
}
const Header = ({ onToggleGuide }: HeaderProps) => {
  return (
    <HeaderContainer>
      <Title>Markdown Previewer</Title>
      <Button onClick={onToggleGuide}>Markdown Cheat Sheet</Button>
    </HeaderContainer>
  );
};

export default Header;