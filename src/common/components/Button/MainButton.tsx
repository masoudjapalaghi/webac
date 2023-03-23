import { ButtonHTMLAttributes, FC, ReactNode } from "react";
// import Styles
import s from "./btn.module.css";

type Size = "large" | "middle" | "small";
type Variant = "outline" | "primary" | "dashed" | "text" | "link";
type Shape = "main" | "circle" | "round" | "flat";
type Theme = "primary" | "main" | "info" | "success" | "warning" | "error";

interface PropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: Size;
    variant?: Variant;
    theme?: Theme;
    children?: ReactNode | string;
    shape?: Shape;
    type?: "button";
    block?: boolean;
    icon?: string;
    disabled?: boolean;
}
type PropsSizeType = Pick<PropsType, "size" | "block">;
type PropsThemeType = Pick<PropsType, "theme" | "variant">;

const MainButton: FC<PropsType> = (props: PropsType) => {
    const {
        size,
        variant = "primary",
        theme = "primary",
        type = "button",
        block = false,
        shape = "main",
        children,
        icon,
        disabled,
        ...rest
    } = props;

    const propsSize: PropsSizeType = { size, block };
    const propsthem: PropsThemeType = { theme, variant };

    return (
        <button
            type={type}
            className={`
            ${_ManageVarient(variant)}
            ${_ManageSize(propsSize)}
            ${!disabled && _ManageTheme(propsthem)}
            ${_ManageShape(shape)}
            `}
            disabled={disabled}
            {...rest}
        >
            {children}
            {icon && <i className={`${icon} ${!children && "flex"}`} />}
        </button>
    );
};
export default MainButton;

//  *******====> STYLE MANAGING <====*******

const _ManageVarient = (varient: Variant): string => {
    return {
        primary: `${s.base} ${s.primary} `,
        outline: `${s.base} ${s.outline}`,
        dashed: `${s.base} ${s.dashed}`,
        text: `${s.base} ${s.text}`,
        link: `${s.base} ${s.link}`,
    }[varient || "primary"];
};

const _ManageTheme = (propsTheme: PropsThemeType): string => {
    const { theme, variant } = propsTheme;
    const isTransParant = variant !== "primary";
    return {
        primary: ` ${isTransParant ? s.primaryTheme_tp : s.primaryTheme} `,
        main: ` ${isTransParant ? s.mainTheme_tp : s.mainTheme} `,
        success: ` ${isTransParant ? s.successTheme_tp : s.successTheme} `,
        warning: ` ${isTransParant ? s.warningTheme_tp : s.warningTheme} `,
        error: ` ${isTransParant ? s.errorTheme_tp : s.errorTheme} `,
        info: ` ${isTransParant ? s.infoTheme_tp : s.infoTheme} `,
    }[theme || "primary"];
};

const _ManageSize = (propsSize: PropsSizeType): string => {
    const { size, block } = propsSize;
    const isFull = block ? s.full : "";

    return {
        large: ` ${s.large} ${isFull}`,
        middle: ` ${s.middle} ${isFull}`,
        small: ` ${s.small} ${isFull}`,
    }[size || "middle"];
};

const _ManageShape = (shape: Shape): string => {
    return {
        main: `${s.mainRedius}`,
        circle: ` ${s.circleRedius} `,
        round: ` ${s.roundRedius} `,
        flat: ` ${s.flatRedius} `,
    }[shape || "main"];
};
