import { Box, Stack, styled } from "@mui/material";

export const CardContainer = styled(Stack)(() => ({
    alignItems: "center",
    justifyContent: "center",
    gap:"1rem"
}));

export const CardImageContainer = styled(Box)(() => ({
    flex: 1,
    height:"100%"
}));

export const CardContentContainer = styled(Box)(() => ({
    flex: 1,
    height: "100%",
    display: "flex",
    alignItems:"center",
    justifyContent:"center"
}));

export const CardImage = styled('img')(() => ({
    width: "100%",
    height:"100%"
}));