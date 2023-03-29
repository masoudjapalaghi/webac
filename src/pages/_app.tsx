import type { AppProps } from "next/app";
/* eslint-disable camelcase */
/* eslint-disable react/no-unknown-property */
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
// Styles
import "../styles/globals.css";
// localization
import { appWithTranslation } from "next-i18next";
// Theme
import { ThemeProvider } from "next-themes";
// layouts
import MainLayout from "@modules/Layouts/MainLayout";

import { Roboto, Merriweather, Playfair_Display, Lora } from "next/font/google";

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

const roboto = Roboto({
    subsets: ["latin"],
    weight: "100",
});

const merriweather = Merriweather({
    weight: "700",
    subsets: ["latin"],
});
const playfairDisplay = Playfair_Display({
    weight: "700",
    subsets: ["latin"],
});
const lora = Lora({
    weight: "700",
    subsets: ["latin"],
});

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
    const getLayout =
        Component.getLayout ?? (page => <MainLayout>{page}</MainLayout>);

    return (
        <>
            <ThemeProvider>
                {getLayout(<Component {...pageProps} />)}
            </ThemeProvider>
            <style jsx global>{`
                :root {
                    --roboto-font: ${roboto.style.fontFamily};
                    --merriweather-font: ${merriweather.style.fontFamily};
                    --playfairDisplay-font: ${playfairDisplay.style.fontFamily};
                    --lora-font: ${lora.style.fontFamily};
                }
            `}</style>
        </>
    );
};
export default appWithTranslation(App);
