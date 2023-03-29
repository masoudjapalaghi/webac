import { useRouter } from "next/router";

const useDirection = (): string => {
    const { locale } = useRouter();
    console.log(locale === "fa" ? "rtl" : "ltr");

    return locale === "fa" ? "rtl" : "ltr";
};

export default useDirection;
