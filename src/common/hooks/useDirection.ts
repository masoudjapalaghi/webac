import { useRouter } from "next/router";

const useDirection = (): string => {
    const { locale } = useRouter();

    return locale === "fa" ? "rtl" : "ltr";
};

export default useDirection;
