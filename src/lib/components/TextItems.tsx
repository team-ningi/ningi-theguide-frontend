import { Box, Paragraph, Flex, Button } from "theme-ui";

export const Title = ({ text }: { text: string }) => (
  <Paragraph
    sx={{
      fontWeight: "300",
      fontSize: "19px",
      textAlign: "left",
      color: "#666",
    }}
  >
    {text}
  </Paragraph>
);

export const Description = ({ text }: { text: string }) => (
  <Paragraph
    sx={{ textAlign: "left", mt: "30px", color: "#666", fontWeight: "300" }}
  >
    {text}
  </Paragraph>
);
