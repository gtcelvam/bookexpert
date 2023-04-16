import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export const BlogContainer = styled(Box)(({theme}) => ({
    width: "60%",
    border: "1px solid #422C3C40",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap:theme.spacing(4)
}));

export const BlogTitle = styled(Typography)(() => ({
    fontWeight: 600,
    textAlign: "center"
}));

export const BlogContent = styled(Typography)(() => ({
    fontWeight: 500,
    textAlign:"center"
}));