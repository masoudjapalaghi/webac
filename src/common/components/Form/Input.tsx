/* eslint-disable no-undef */
import React, { FC, InputHTMLAttributes } from "react";
// styles
import styled from "styled-components";

// Type
interface InputType extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    inputSize?: ElementSize;
}

const Input: FC<InputType> = (props: InputType) => {
    const { label = "asd", ...rest } = props;
    return (
        <div className="flex flex-col gap-2">
            {label && <label>{label}</label>}
            <InputElement {...rest} />
        </div>
    );
};

export default Input;

const InputElement = styled.input<InputType>(props => {
    const { inputSize = "medium" } = props;
    const _division = 1.9;
    return {
        boxSizing: "border-box",
        margin: "0",
        padding: "4px 11px",
        color: "rgba(0,0,0,.88)",
        fontSize: _size(inputSize, _division),
        listStyle: "none",
        position: "relative",
        display: "inline-block",
        width: "100%",
        minWidth: "0",
        height: _size(inputSize),
        backgroundColor: "#fff",
        backgroundImage: "none",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "#d9d9d9",
        borderRadius: "6px",
        transition: "all .2s",
        "&:focus": {
            boxShadow: " 0 0 0 2px rgba(5,145,255,.1)",
            outline: " 0",
            borderInlineEndWidth: " 1px",
            borderColor: "#4096ff",
        },
        "&:hover": {
            borderInlineEndWidth: " 1px",
            borderColor: "#4096ff",
        },
    };
});

const _size = (inputSize: ElementSize, division?: number): string => {
    const isDivision = division || 1;
    return {
        small: `${22 / +isDivision}px`,
        medium: `${32 / +isDivision}px`,
        large: `${42 / +isDivision}px`,
    }[inputSize || "medium"];
};
