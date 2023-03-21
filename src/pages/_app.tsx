import "@/styles/globals.css";
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
export default App;
