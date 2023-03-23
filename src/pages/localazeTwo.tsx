/* eslint-disable import/no-extraneous-dependencies */
import Link from "next/link";
import type { GetServerSideProps } from "next";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Header } from "@modules/Layouts/Header";
import { Footer } from "@modules/Layouts/Footer";

type Props = {
    // Add custom props here
};
// _props: InferGetServerSidePropsType<typeof getServerSideProps>
const SecondPage = () => {
    const { t } = useTranslation(["common", "second-page"]);

    return (
        <>
            <main>
                <Header
                    heading={t("second-page:h1")}
                    title={t("second-page:title")}
                />
                <Link href="/localazeOne">
                    <button type="button">
                        {t("second-page:back-to-home")}
                    </button>
                </Link>
            </main>
            <Footer />
        </>
    );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
    locale,
}) => ({
    props: {
        ...(await serverSideTranslations(locale ?? "en", [
            "second-page",
            "footer",
        ])),
    },
});

export default SecondPage;
