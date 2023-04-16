import { Box, styled } from "@mui/material";

export const HeaderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: `0 ${theme.spacing(2)}`,
}));

export const LogoContainer = styled(Box)(() => ({
  width: "100px",
  height: "auto",
}));

export const LogoImage = styled("img")(() => ({
  width: "100%",
  height: "100%",
}));

export const HeaderULContainer = styled("ul")(({ theme }) => ({
  display: "flex",
  listStyleType: "none",
  gap: theme.spacing(2),
}));

export const HeaderList = styled("li")(({ theme }) => ({
  cursor: "pointer",
  a: {
    textDecoration: "none",
    color: "#05a0e8",
    "&:hover": {
      color: "#05529aeb",
    },
  },
}));

export const HeaderAnchorTag = styled("a")(({ theme }) => ({
  color: "#05a0e8",
  textDecoration: "none",
  cursor: "pointer",
}));
