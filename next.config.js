// eslint-disable-next-line @typescript-eslint/no-var-requires
const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    i18n,
    trailingSlash: true,
    compiler: {
        styledComponents: true,
    },
};

module.exports = nextConfig;
