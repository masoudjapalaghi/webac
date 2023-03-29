/* eslint-disable no-undef */
/* eslint-disable security/detect-object-injection */
import { FC, HTMLAttributes } from "react";

// Style
import s from "./icon.module.css";

type Color = "primary" | "info" | "success" | "warning" | "error";

interface PropsType extends HTMLAttributes<HTMLElement> {
    name: TypeIcon;
    color?: Color;
}

const Icon: FC<PropsType> = (props: PropsType) => {
    const { name = "Cannabis", color = "primary", ...rest } = props;

    return (
        <i
            className={`fi fi-rr-${name} contents cursor-pointer ${_ManageColor(
                color
            )}`}
            {...rest}
        />
    );
};

export default Icon;

const _ManageColor = (color: Color): string => {
    return {
        primary: ` ${s.primaryColor} `,
        success: ` ${s.successColor} `,
        warning: ` ${s.warningColor} `,
        error: ` ${s.errorColor} `,
        info: ` ${s.infoColor} `,
    }[color];
};
