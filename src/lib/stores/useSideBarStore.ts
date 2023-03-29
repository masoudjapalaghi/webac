import { ReactElement } from "react";
import { create } from "zustand";

interface SideBarStore {
    component: ReactElement | null;
    statusSideBar: boolean;
    openSideBar: () => void;
    closeSideBar: () => void;
    renderComponentInSideBar: (component: ReactElement) => void;
}

const useSideBarStore = create<SideBarStore>(set => ({
    component: null,
    statusSideBar: false,
    openSideBar: () =>
        set(() => ({
            statusSideBar: true,
        })),

    closeSideBar: () =>
        set(() => ({
            statusSideBar: false,
            component: null,
        })),

    renderComponentInSideBar: component =>
        set(() => ({
            statusSideBar: true,
            component,
        })),
}));

export default useSideBarStore;
