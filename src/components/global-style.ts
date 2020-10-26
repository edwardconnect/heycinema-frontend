import { createGlobalStyle } from "styled-components"

export const PRIMARY_COLOR = '#7FAAE4';
export const SECONDARY_COlOR = '#834DB7';
export const TERTIARY_COLOR = '#34283';

export const GlobalStyle = createGlobalStyle`
    h5 {
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
        font-size: 18px;
    }

    body {
        background: lightgray;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 16px;
    }
`;