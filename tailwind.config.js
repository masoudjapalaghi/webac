// eslint-disable-next-line import/no-extraneous-dependencies, @typescript-eslint/no-var-requires
const tailwindRtl = require("tailwindcss-rtl");
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "th-m-hover": "var(--menu_text_hover_color)",
                "th-m-bg": "var(--menu_color)",
                "th-m-color": "var(--menu_text_color)",
                "th-m-border": "var(--menu_thin_border)",
                "th-mdl-bgp": "var(--modules_color)",
                "th-mdl-textp": "var(--modules_color_text)",
                "th-mdl-boxp": "var( --modules_color_box)",
                "th-mdl-boxtextp": "var(--modules_color_text_box)",
                "th-mdl-bgs": "var(--modules_color_second)",
                "th-mdl-texts": "var(--modules_color_text_second)",
                "th-mdl-boxs": "var(--modules_color_second_box)",
                "th-mdl-boxtexts": "var(--modules_color_text_second_box)",
                "th-mdl-bginside": "var(--inside_modules_color)",
                "th-mdl-textinside": "var(--inside_modules_color_text)",
                "th-mdl-bginsidebox": "var(--inside_modules_color_box)",
                "th-mdl-textinsidebox": "var(--inside_modules_color_text_box)",
                "th-f-hover": "var(--footer_text_hover)",
                "th-f-link": "var(--footer_links_color)",
                "th-f-bg": "var(--footer_back)",
                "th-f-text": "var(--footer_text)",
                "th-g-main": "var(--global_main_color)",
                "th-g-main02": "var(--global_main_color_rgba_02)",
                "th-g-main07": "var(--global_main_color_rgba_07)",
                "th-g-btntext": "var(--global_main_color_btn_text_color)",
                "th-g-divider1": "var(--homepageShapeDividerList_Color1)",
                "th-g-bg": "var(--home_background_color)",
            },
            fontFamily: {
                iranyekan: ["iranyekan"],
                iranyekanBold: ["iranyekanBold"],
            },
        },
    },
    plugins: [tailwindRtl],
};
