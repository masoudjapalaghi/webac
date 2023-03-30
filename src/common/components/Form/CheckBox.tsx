import { FC, InputHTMLAttributes } from "react";
// Styles
import styled from "styled-components";
// Constent
import CssColorNames from "@constant/CssColorNames";

type Size = "large" | "medium" | "small";
type colorType = (typeof CssColorNames)[number];
// Type
interface CheckBoxType extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    redioSize?: Size;
    accentColor?: colorType;
}

const CheckBox: FC<CheckBoxType> = (props: CheckBoxType) => {
    const { label = "تست", ...rest } = props;

    return (
        <div className="flex  gap-2">
            <CheckInput type="checkbox" {...rest} />
            <label className="whitespace-nowrap text-xs ">{label}</label>
        </div>
    );
};

export default CheckBox;

const CheckInput = styled.input<CheckBoxType>(props => {
    const { redioSize = "small", accentColor = "RoyalBlue" } = props;

    return {
        accentColor,
        width: _size(redioSize),
        height: _size(redioSize),
    };
});

const _size = (redioSize: Size): string => {
    return {
        small: "14px",
        medium: "18px",
        large: "20px",
    }[redioSize || "medium"];
};
