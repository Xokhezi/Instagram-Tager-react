import { useState } from "react";
import "./App.css";
import Tager from "./Components/Tager";
function App() {
  const [tags, setTags] = useState(["React", "Angular", "Vue", "CSS"]);

  return (
    <>
      <Tager setTags={setTags} tags={tags} />
    </>
  );
}

export default App;
