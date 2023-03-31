/* eslint-disable no-undef */
import React, { ReactElement } from "react";
import { GroupBase } from "react-select";

interface SelectProps<
    Option,
    IsMulti extends boolean = false,
    Group extends GroupBase<Option> = GroupBase<Option>
> extends ReactSelectProps<Option> {
    isMulti?: IsMulti;
    group?: Group;
}

export const InputSelect: <
    Option,
    IsMulti extends boolean,
    Group extends GroupBase<Option>
>(
    p: SelectProps<Option, IsMulti, Group>
) => ReactElement<SelectProps<Option, IsMulti, Group>> = props => {
    const { ...rest } = props;
    console.log({ ...rest });
    return <div />;
};

export default InputSelect;
