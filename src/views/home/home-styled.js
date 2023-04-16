import { Box, Stack, styled } from "@mui/material";

export const HomeContainer = styled(Stack)({

});

export const CardsWrapper = styled(Box)(({theme}) => ({
    padding: theme.spacing(2),
    display: "flex",
    flexDirection:"column",
    alignItems: "center",
    justifyContent: "center",
    gap:theme.spacing(4)
}));