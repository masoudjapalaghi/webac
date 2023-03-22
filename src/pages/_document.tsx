/* eslint-disable react/destructuring-assignment */
import { Html, Head, Main, NextScript } from "next/document";

const LANGUAGES = ["fa", "en"];

const Document = (props: { __NEXT_DATA__: { page: string } }) => {
    const pathPrefix = props.__NEXT_DATA__.page.split("/")[1];

    const lang =
        LANGUAGES.indexOf(pathPrefix) !== -1 ? pathPrefix : LANGUAGES[0];

    return (
        <Html lang={lang}>
            <Head>
                <meta charSet="utf-8" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};
export default Document;
