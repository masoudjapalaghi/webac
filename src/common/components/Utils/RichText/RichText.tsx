import { FC, AreaHTMLAttributes, useState } from "react";
// style
// import s from "./richText.module.css";

// Components
import MultiLineInput from "@components/Form/MultiLineInput";
import { Button } from "@components/Button";
import useSideBarStore from "@stores/useSideBarStore";

export interface OptionalStyleTextType {
    italic?: boolean;
    bold?: number;
}

interface RichTextProps extends AreaHTMLAttributes<HTMLAreaElement> {
    label: string;
}

const RichText: FC<RichTextProps> = () => {
    const [editOption] = useState<OptionalStyleTextType>({
        italic: true,
        bold: 120,
    });
    const renderComponentInSideBar = useSideBarStore(
        state => state.renderComponentInSideBar
    );
    const openSettigSideBar = () => {
        renderComponentInSideBar(<div />);
        // renderComponentInSideBar(<Test setEditOption={setEditOption} />);
    };

    return (
        <div className="relative">
            <Button icon="settings" size="small" onClick={openSettigSideBar} />
            <MultiLineInput optionalStyle={editOption} />
        </div>
    );
};

export default RichText;

// const Test = ({ setEditOption }) => {
//     console.log(setEditOption);
//     return (
//         <Button onClick={() => setEditOption({ italic: false })}>Toggle</Button>
//     );
// };
