import "@/styles/globals.css";
// localization
// eslint-disable-next-line import/no-extraneous-dependencies
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
