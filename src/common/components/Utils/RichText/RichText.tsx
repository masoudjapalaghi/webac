import { FC, AreaHTMLAttributes, useState } from "react";
// style
// import s from "./richText.module.css";

// Stores
import useSideBarStore from "@stores/useSideBarStore";
// Components
import MultiLineInput from "@components/Form/MultiLineInput";
import { Button } from "@components/Button";

interface RichTextProps extends AreaHTMLAttributes<HTMLAreaElement> {
    label: string;
}

const RichText: FC<RichTextProps> = () => {
    // eslint-disable-next-line no-undef
    const [editOption] = useState<OptionalStyleTextType>({
        fontStyle: "normal",
        weight: 100,
    });
    const renderComponentInSideBar = useSideBarStore(
        state => state.renderComponentInSideBar
    );
    const openSettigSideBar = () => {
        renderComponentInSideBar(<div />);
    };

    return (
        <div className="relative group rounded-sm hover:outline hover:outline-blue-600">
            <div className="hidden  group-hover:flex gap-1 absolute -top-3.5 start-2.5 ">
                <Button
                    icon="settings"
                    size="small"
                    onClick={openSettigSideBar}
                />
                <Button icon="apps-delete" size="small" />
            </div>
            <MultiLineInput
                optionalStyle={editOption}
                placeholder="masoud japalagi"
            />
        </div>
    );
};

export default RichText;
