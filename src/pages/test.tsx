import React from "react";

import { CheckBox, Input, RadioBox, RichText, Slider } from "@components";

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
        </>
    );
};

export default TEst;

// const data = [
//     {
//         id: 1,
//         label: "1",
//         active: true,
//     },
//     {
//         id: 1,
//         label: "1",
//     },
//     {
//         id: 1,
//         label: "1",
//     },
//     {
//         id: 1,
//         label: "1",
//         // active: true,
//     },
//     {
//         id: 1,
//         label: "1",
//     },
// ];
