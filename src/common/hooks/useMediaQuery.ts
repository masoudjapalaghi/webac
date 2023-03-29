import { useMedia } from "react-use";

type BrekPiont = "xsDown" | "xs" | "sm" | "md" | "lg" | "2xl";

const useMediaQuery = (breakPiont: BrekPiont): boolean => {
    const _manageConvertBreakPiont = (breakPiont: BrekPiont): string => {
        return {
            xsDown: "(max-width: 360px)",
            xs: "(min-width: 360px)",
            sm: "(min-width: 640px)",
            md: "(min-width: 768px)",
            lg: "(min-width: 1024px)x",
            xl: "(min-width: 1280px)x",
            "2xl": "(min-width: 1536px)px",
        }[breakPiont || "md"];
    };
    return useMedia(_manageConvertBreakPiont(breakPiont), false);
};

export default useMediaQuery;
