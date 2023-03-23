import "../styles/globals.css";
// localization
import { appWithTranslation } from "next-i18next";
// Theme
import { ThemeProvider } from "next-themes";

import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <ThemeProvider>
            <Component {...pageProps} />
        </ThemeProvider>
    );
};
export default appWithTranslation(App);
