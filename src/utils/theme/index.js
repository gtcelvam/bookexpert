import { light } from "@mui/material/styles/createPalette";
import { custom } from "./customColor";
import { grey } from "@mui/material/colors";

export const CUSTOM_THEME = () => ({
    palette: {
        primary: custom,
        divider: light[500],
        text: {
            primary: custom[500],
            secondary: grey[800],
        }
    }
});