// import components
// import { useTranslation } from "../../hooks/useTranslation";

// improt styles
// import styles from "./localaztion.module.css";

import Link from "next/link";
import { useRouter } from "next/router";

const LocaleChanger = () => {
    const router = useRouter();
    const { locales = [] } = router;
    // const activeLocales = locales.filter(locale => locale === activeLocale);
    return (
        <div>
            {/* <span>{useTranslation("sidebar", "locale")}</span> */}
            <ul>
                {locales.map(locale => {
                    const { pathname, query, asPath } = router;
                    return (
                        <li key={locale}>
                            <Link
                                href={{ pathname, query }}
                                as={asPath}
                                locale={locale}
                            >
                                {locale}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
export default LocaleChanger;
