import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
// Styles
import "../styles/globals.css";
// localization
import { appWithTranslation } from "next-i18next";
// Theme
import { ThemeProvider } from "next-themes";
// Redux
import { Provider } from "react-redux";
import { store } from "@redux/store";

import type { AppProps } from "next/app";
import MainLayout from "@modules/Layouts/MainLayout";

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
    const getLayout =
        Component.getLayout ?? (page => <MainLayout>{page}</MainLayout>);

    return (
        <Provider store={store}>
            <ThemeProvider>
                {getLayout(<Component {...pageProps} />)}
            </ThemeProvider>
        </Provider>
    );
};
export default appWithTranslation(App);
