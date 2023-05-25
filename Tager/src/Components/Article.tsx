import { Box, Card, Chip, Typography } from "@mui/joy";
interface Article {
  id: number;
  tags: string[];
  head: string;
  body: string;
}
interface Props {
  article: Article;
}

const Article = ({ article }: Props) => {
  return (
    <Card variant="outlined" sx={{ maxWidth: 800, marginTop: 1 }}>
      <Typography level="h2">{article.head}</Typography>
      <Typography level="h2" fontSize="xl" sx={{ mb: 0.5 }}>
        <Box
          sx={{ display: "flex", gap: 1, marginTop: 1, alignItems: "center" }}
        >
          {article.tags.map((tag) => (
            <Chip variant="soft" key={tag}>
              {tag}
            </Chip>
          ))}
        </Box>
      </Typography>
      <Typography sx={{ marginTop: 3, textAlign: "left" }} level="body1">
        {article.body}
      </Typography>
    </Card>
  );
};

export default Article;
