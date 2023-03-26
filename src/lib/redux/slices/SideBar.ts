import { ReactElement } from "react";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../store";

// Define a type for the slice state
interface SideBarState {
    component: ReactElement | null;
    statusSideBar: boolean;
}

// Define the initial state using that type
const initialState: SideBarState = {
    component: null,
    statusSideBar: false,
};

export const SideBarSlice = createSlice({
    name: "sideBar",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        openSideBar: state => {
            state.statusSideBar = !state.statusSideBar;
        },
        closeSideBar: state => {
            state.statusSideBar = !state.statusSideBar;
            state.component = null;
        },
        renderComponentInSideBar: (
            state,
            action: PayloadAction<ReactElement>
        ) => {
            state.component = action.payload;
            state.statusSideBar = true;
        },
    },
});

export const { openSideBar, closeSideBar, renderComponentInSideBar } =
    SideBarSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.sideBar;

export default SideBarSlice.reducer;
