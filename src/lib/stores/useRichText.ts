/* eslint-disable no-undef */
// import { FontStyle } from "@types/Richtext";
import { create } from "zustand";

interface RichTextStore {
    style: OptionalStyleTextType;
}

const useSideBarStore = create<RichTextStore>(set => ({
    style: {},
    setFontStyle: (fontStyle: FontStyleType) =>
        set(state => ({
            style: { ...state.style, italic: fontStyle },
        })),
}));

export default useSideBarStore;
