import { useState } from "react";
import "./App.css";
import Tager from "./Components/Tager";
import { Box } from "@mui/joy";
function App() {
  const [tags, setTags] = useState(["React", "Angular", "Vue", "CSS"]);

  return (
    <>
      <Box
        sx={{
          borderRadius: 15,
          padding: 5,
          height: 400,
          width: 400,
          background: "white",
        }}
      >
        <h2>Tager</h2>
        <Tager setTags={setTags} tags={tags} />
      </Box>
    </>
  );
}

export default App;
