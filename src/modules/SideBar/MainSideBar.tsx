import { useLockBodyScroll } from "react-use";
// redux
import { shallow } from "zustand/shallow";
// import { closeSideBar } from "@slices/SideBar";
// Style
import s from "./sideBar.module.css";
// Components
import { Icon } from "@components";
import useMediaQuery from "@hook/useMediaQuery";
import useSideBarStore from "@stores/useSideBarStore";

const MainSideBar = () => {
    const { component, statusSideBar, closeSideBar } = useSideBarStore(
        state => ({
            component: state.component,
            statusSideBar: state.statusSideBar,
            closeSideBar: state.closeSideBar,
        }),
        shallow
    );

    // contorol for lock body
    const md = useMediaQuery("md");
    const finalConditinalIsLoack = !md && statusSideBar;
    useLockBodyScroll(finalConditinalIsLoack);

    const handleClose = () => {
        closeSideBar();
    };

    return (
        <aside
            className={`${s.root} ${statusSideBar ? s.openSideBar : "hidden"}`}
        >
            <header className="flex justify-end">
                <Icon name="cross" onClick={handleClose} />
            </header>
            <div>{component}</div>
        </aside>
    );
};

export default MainSideBar;
