import { useState } from "react";
import "./App.css";
import Tager from "./Components/Tager";
import { Box } from "@mui/joy";
import Article from "./Components/Article";
function App() {
  const originalArticles = [
    {
      id: 1,
      tags: ["React", "Framework", "FrontEnd"],
      head: "React",
      body: "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.",
    },
    {
      id: 2,
      tags: ["Angular", "Framework", "FrontEnd"],
      head: "Angular",
      body: "Angular is a TypeScript-based free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations.",
    },
  ];
  const [tags, setTags] = useState([]);
  const [articles, setArticles] = useState([...originalArticles]);

  const filterArticles = (tags: string[]) => {
    if (tags.length === 0) {
      setArticles([...originalArticles]);
    } else {
      const filteredArticles = originalArticles.filter((article) =>
        tags.every((tag: string) => article.tags.includes(tag))
      );
      setArticles(filteredArticles);
    }
  };

  return (
    <>
      <Box
        sx={{
          borderRadius: 15,
          padding: 5,
          height: 200,
          maxWidth: 800,
          background: "white",
        }}
      >
        <h2>Tager</h2>
        <Tager setTags={setTags} tags={tags} onFilter={filterArticles} />
      </Box>
      {articles.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </>
  );
}

export default App;
