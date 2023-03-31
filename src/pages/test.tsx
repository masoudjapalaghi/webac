import React from "react";

import {
    CheckBox,
    Input,
    InputSelect,
    InputSelectAsync,
    RadioBox,
    RichText,
    Slider,
} from "@components";

type ItemType = {
    label: string;
    value: string;
};

const TEst = () => {
    // const [value, setValue] = useState("This is inline editable");
    // const [multilineValue, setMultilineValue] = React.useState(
    //     "This is the multi-line version!"
    // );

    return (
        <>
            <RichText label="asd" />
            <Slider max={14} />
            <RadioBox />
            <CheckBox />
            <Input inputSize="large" />
            <InputSelect options={data} />
            <InputSelectAsync<ItemType> options={data} />
        </>
    );
};

export default TEst;

const data = [
    {
        value: "1",
        label: "1",
    },
    {
        value: "2",
        label: "2",
    },
    {
        value: "3",
        label: "3",
    },
    {
        value: "4",
        label: "4",
    },
    {
        value: "5",
        label: "5",
    },
];
