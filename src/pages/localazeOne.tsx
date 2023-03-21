/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";
import { useRouter } from "next/router";
import type { GetStaticProps } from "next";

import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Header } from "../module/Layouts/Header";
import { Footer } from "../module/Layouts/Footer";

type Props = {
    // Add custom props here
};
// _props: InferGetStaticPropsType<typeof getStaticProps>
const Homepage = () => {
    const router = useRouter();
    const { t } = useTranslation("common");

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // const onToggleLanguageClick = (newLocale: string) => {
    //     const { pathname, asPath, query } = router;
    //     router.push({ pathname, query }, asPath, { locale: newLocale });
    // };

    const changeTo = router.locale === "en" ? "fa" : "en";

    return (
        <div>
            <main>
                <Header heading={t("h1")} title={t("title")} />
                <div style={{ display: "inline-flex", width: "90%" }}>
                    <div style={{ width: "33%" }}>
                        <h3 style={{ minHeight: 70 }}>
                            {t("blog.appDir.question")}
                        </h3>
                        <p>
                            <Trans i18nKey="blog.appDir.answer">
                                Then check out
                                <a href={t("blog.optimized.link")}>
                                    this blog post
                                </a>
                                .
                            </Trans>
                        </p>
                        <a href={t("blog.appDir.link")}>
                            <img
                                style={{ width: "50%" }}
                                src="https://locize.com/blog/next-13-app-dir-i18n/next-13-app-dir-i18n.jpg"
                            />
                        </a>
                    </div>
                    <div style={{ width: "33%" }}>
                        <h3 style={{ minHeight: 70 }}>
                            {t("blog.optimized.question")}
                        </h3>
                        <p>
                            <Trans i18nKey="blog.optimized.answer">
                                Then you may have a look at
                                <a href={t("blog.optimized.link")}>
                                    this blog post
                                </a>
                                .
                            </Trans>
                        </p>
                        <a href={t("blog.optimized.link")}>
                            <img
                                style={{ width: "50%" }}
                                src="https://locize.com/blog/next-i18next/next-i18next.jpg"
                            />
                        </a>
                    </div>
                    <div style={{ width: "33%" }}>
                        <h3 style={{ minHeight: 70 }}>
                            {t("blog.ssg.question")}
                        </h3>
                        <p>
                            <Trans i18nKey="blog.ssg.answer">
                                Then you may have a look at
                                <a href={t("blog.ssg.link")}>this blog post</a>.
                            </Trans>
                        </p>
                        <a href={t("blog.ssg.link")}>
                            <img
                                style={{ width: "50%" }}
                                src="https://locize.com/blog/next-i18n-static/title.jpg"
                            />
                        </a>
                    </div>
                </div>
                <hr style={{ marginTop: 20, width: "90%" }} />
                <div className="flex gap-5">
                    <Link href="/localazeOne" locale={changeTo}>
                        <button type="button">
                            {" "}
                            {t("change-locale", { changeTo })}
                        </button>
                    </Link>
                    alternative language change without using Link component
                    {/* <button onClick={() => onToggleLanguageClick(changeTo)}>
                        {t("change-locale", { changeTo })}
                    </button> */}
                    <Link href="/localazeTwo">
                        <button type="button">{t("to-second-page")}</button>
                    </Link>
                </div>
            </main>
            <Footer />
        </div>
    );
};

// or getServerSideProps: GetServerSideProps<Props> = async ({ locale })
export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale ?? "en", ["common", "footer"])),
    },
});

export default Homepage;
