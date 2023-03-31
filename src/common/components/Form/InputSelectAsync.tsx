/* eslint-disable no-undef */
import React, { ReactElement } from "react";
// import SelectAsync from "react-select/async";

interface SelectProps<Option> extends ReactAsyncSelectProps<Option> {
    label?: string;
}

export const InputSelectAsync: <Option>(
    p: SelectProps<Option>
) => ReactElement<SelectProps<Option>> = props => {
    const { ...rest } = props;
    console.log({ ...rest });
    return <div />;
};

export default InputSelectAsync;
