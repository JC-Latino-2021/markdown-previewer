import { useState } from "react";
import Header from "./Header";
import MarkdownCheatSheet from "./MarkdownCheatSheet";

const App = () => {
  const [showCheatSheet, setShowCheatSheet] = useState<boolean>(false);
  // Create a state to manage the markdown text
  const handleToggleGuide = () => {
    setShowCheatSheet(!showCheatSheet);
  };

  return (
    <>
      <Header onToggleGuide={handleToggleGuide} />
      {showCheatSheet && <MarkdownCheatSheet />}

      {/* Wrapped within a styled component div named Container */}
      {/* MarkdownInput (pass the markdown text as a value to this component as well as the handle change function) */}
      {/* MarkdownOutput (pass the markdown text as a prop to this component*/}
    </>
  );
};

export default App;