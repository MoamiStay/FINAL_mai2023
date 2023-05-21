import { ThemeProvider } from "styled-components";

export const theme = {
    color: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        primaryText: "var(--color-primaryText)",
    },
};

export const Theme = ({children}) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme;