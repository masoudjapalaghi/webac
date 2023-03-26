/* eslint-disable security/detect-object-injection */
import { ElementType, FC, HTMLAttributes, ReactNode } from "react";

// Style
import s from "./typography.module.css";

type Size =
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "2xxl"
    | "3xl"
    | "4xl";
type Theme = "primary" | "main" | "info" | "success" | "warning" | "error";

interface PropsType extends HTMLAttributes<HTMLElement> {
    size?: Size;
    theme?: Theme;
    children?: ReactNode | string;
    responsive?: boolean;
    bold?: boolean;
    Component?: ElementType;
}

type PropsSizeType = Pick<PropsType, "size" | "responsive">;

const Typography: FC<PropsType> = (props: PropsType) => {
    const {
        size = "h1",
        responsive = false,
        theme = "primary",
        bold = false,
        Component = "span",
        children,
        className = "",
        ...rest
    } = props;

    const propsSize: PropsSizeType = { size, responsive };

    return (
        <Component
            className={`${_ManageTheme(theme)} ${_ManageSize(propsSize)} ${
                bold ? "font-bold" : ""
            } ${className}`}
            {...rest}
        >
            {children}
        </Component>
    );
};

export default Typography;

const _ManageSize = (propsSize: PropsSizeType) => {
    const { size, responsive } = propsSize;
    return {
        h1: `text-sm ${responsive ? "md:text-lg" : ""} `,
        h2: `text-sm ${responsive ? "md:text-base" : ""}`,
        h3: `text-xs ${responsive ? "md:text-sm" : ""}`,
        h4: `text-small ${responsive ? "md:text-xs" : ""}`,
        h5: `text-mSmall`,
        h6: `text-base`,
        md: `text-base ${responsive ? "md:text-larg" : ""}`,
        lg: `text-lg`,
        xl: `text-xl`,
        "2xl": `text-2xl`,
        "2xxl": `text-larg`,
        "3xl": `text-3xl`,
        "4xl": `text-4xl`,
    }[size || "md"];
};

const _ManageTheme = (theme: Theme): string => {
    return {
        primary: ` ${s.primaryTheme} `,
        main: ` ${s.mainTheme} `,
        success: ` ${s.successTheme} `,
        warning: ` ${s.warningTheme} `,
        error: ` ${s.errorTheme} `,
        info: ` ${s.infoTheme} `,
    }[theme || "primary"];
};
