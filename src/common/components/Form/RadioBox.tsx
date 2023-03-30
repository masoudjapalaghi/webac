import { FC, InputHTMLAttributes } from "react";
// styles
import styled from "styled-components";
// constant
import CssColorNames from "@constant/CssColorNames";

type Size = "large" | "medium" | "small";
type colorType = (typeof CssColorNames)[number];

// Type
interface RadioBoxType extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    redioSize?: Size;
    accentColor?: colorType;
}

const RadioBox: FC<RadioBoxType> = (props: RadioBoxType) => {
    const { label = "تست", ...rest } = props;

    return (
        <div className="flex  gap-2">
            <RadioInput type="radio" {...rest} />
            <label className="whitespace-nowrap text-xs ">{label}</label>
        </div>
    );
};

export default RadioBox;

const RadioInput = styled.input<RadioBoxType>(props => {
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
