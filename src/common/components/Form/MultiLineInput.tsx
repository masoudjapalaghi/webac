import {
    ChangeEvent,
    FC,
    TextareaHTMLAttributes,
    useCallback,
    useEffect,
    useRef,
} from "react";
// Styels
import styled from "styled-components";

// Types
import { OptionalStyleTextType } from "@components/Utils/RichText/RichText";

interface MultiLineInputType
    extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    optionalStyle: OptionalStyleTextType;
}

const MultiLineInput: FC<MultiLineInputType> = (props: MultiLineInputType) => {
    const { ...rest } = props;

    const onInput = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
        if (event) {
            event.target.style.height = "0px";
            event.target.style.height = `${event.target.scrollHeight}px`;
        }
    }, []);

    const initilizeHeight = (ref: HTMLTextAreaElement | null) => {
        if (ref) {
            ref.style.height = "0px";
            const { scrollHeight } = ref;
            ref.style.height = `${scrollHeight}px`;
        }
    };

    const textareaRef = useRef<HTMLTextAreaElement>(null);
    useEffect(() => {
        initilizeHeight(textareaRef.current);
    }, []);

    return (
        <TextArea
            className="hidden_scroll"
            onInput={onInput}
            ref={textareaRef}
            {...rest}
        />
    );
};
export default MultiLineInput;

const TextArea = styled.textarea<MultiLineInputType>(props => {
    const { italic } = props.optionalStyle;

    return {
        width: "100%",
        backgroundColor: "transparent",
        borderRadius: "4px",
        padding: "4px",
        color: "gray",
        border: "unset",
        "&:focus,&:hover": {
            border: "unset",
            outline: "2px solid royalBlue",
        },
        fontSize: "24px",
        fontStyle: italic ? "italic" : "normal",
    };
});
