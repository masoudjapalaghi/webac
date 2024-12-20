/* eslint-disable no-undef */
import { ButtonHTMLAttributes, FC, ReactNode } from "react";
// Style
import s from "./btn.module.css";
// Components
import Snipper from "@components/Loading/Snipper";
import Icon from "@components/Icon/Icon";

type Size = "large" | "medium" | "small";
type Variant = "outline" | "primary" | "dashed" | "text";
type Shape = "main" | "circle" | "round" | "flat" | "mainStart" | "mainEnd";
type Theme = "primary" | "main" | "info" | "success" | "warning" | "error";

export interface ButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: Size;
    variant?: Variant;
    theme?: Theme;
    children?: ReactNode | string;
    shape?: Shape;
    type?: "button";
    block?: boolean;
    icon?: TypeIcon;
    disabled?: boolean;
    loading?: boolean;
    active?: boolean;
}
type PropsSizeType = Pick<ButtonType, "size" | "block">;
type PropsThemeType = Pick<ButtonType, "theme" | "variant">;

const Button: FC<ButtonType> = (props: ButtonType) => {
    const {
        size = "medium",
        variant = "primary",
        theme = "primary",
        type = "button",
        block = false,
        shape = "main",
        children = "",
        icon,
        disabled,
        loading = false,
        ...rest
    } = props;

    const propsSize: PropsSizeType = { size, block };
    const propsthem: PropsThemeType = { theme, variant };

    const finalDisabled: boolean = disabled || loading;

    return (
        <button
            type={type}
            className={`
            ${_ManageVarient(variant)}
            ${_ManageSize(propsSize)}
            ${!finalDisabled && _ManageTheme(propsthem)}
            ${_ManageShape(shape)}
            `}
            disabled={finalDisabled}
            {...rest}
        >
            {loading ? (
                <span className="flex gap-2">
                    {children && <span>Loading</span>}
                    <Snipper />
                </span>
            ) : (
                <>
                    {icon && <Icon name={icon} />}
                    {children}
                </>
            )}
        </button>
    );
};
export default Button;

//  *******====> STYLE MANAGING <====*******

const _ManageVarient = (varient: Variant): string => {
    return {
        primary: `${s.base} ${s.primary} `,
        outline: `${s.base} ${s.outline}`,
        dashed: `${s.base} ${s.dashed}`,
        text: `${s.base} ${s.text}`,
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
        medium: ` ${s.middle} ${isFull}`,
        small: ` ${s.small} ${isFull}`,
    }[size || "medium"];
};

const _ManageShape = (shape: Shape): string => {
    return {
        main: `${s.mainRedius}`,
        circle: ` ${s.circleRedius} `,
        round: ` ${s.roundRedius} `,
        flat: ` ${s.flatRedius} `,
        mainStart: ` ${s.mainStart} `,
        mainEnd: ` ${s.mainEnd} `,
    }[shape || "main"];
};
