import Input from "@mui/joy/Input";
import Chip from "@mui/joy/Chip";
import { Box } from "@mui/joy";
import { useState } from "react";
interface Props {
  tags: string[];
  setTags: (tags: string[]) => void;
  onFilter: (tags: string[]) => void;
}
const Tager = ({ tags, setTags, onFilter }: Props) => {
  const [inputValue, setInputValue] = useState("");
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      const newTag = inputValue.trim();
      if (!tags.includes(newTag)) {
        const updatedTags = [...tags, newTag];
        setTags(updatedTags);
        onFilter(updatedTags);
      }
      setInputValue("");
    }
  };
  const handleDelete = (tagToDelete: string) => () => {
    const updatedTags = tags.filter((tag) => tag !== tagToDelete);
    setTags(updatedTags);
    onFilter(updatedTags);
  };
  return (
    <>
      <Input
        placeholder="Tags in here…"
        color="primary"
        size="lg"
        value={inputValue}
        onChange={handleInput}
        onKeyPress={handleKeyPress}
      />
      <Box sx={{ display: "flex", gap: 1, marginTop: 1, alignItems: "center" }}>
        {tags.map((tag) => (
          <Chip variant="soft" key={tag} onClick={handleDelete(tag)}>
            {tag}
          </Chip>
        ))}
      </Box>
    </>
  );
};

export default Tager;
