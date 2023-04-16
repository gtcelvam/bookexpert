import { Box, styled } from "@mui/material";

export const FooterContainer = styled(Box)(({theme}) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding:`0 ${theme.spacing(2)}`
}));


export const FooterULContainer = styled('ul')(({theme}) => ({
    display: "flex",
    listStyleType: "none",
    gap:theme.spacing(2)
}));

export const FooterAnchorTag = styled("a")(({theme}) => ({
    color: theme.palette.text.primary,
    textDecoration: "none",
    cursor:"pointer"
}));

