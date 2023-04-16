import { Box, Stack, styled } from "@mui/material";

export const BlogsContainer = styled(Stack)(({ theme }) => ({
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(2),
}));

export const BlogsMainWrapper = styled(Stack)(() => ({
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  width: "70%",
  height: "80vh",
  overflow: "auto",
  gap: "1rem",
}));
