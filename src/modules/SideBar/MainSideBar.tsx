import { useLockBodyScroll } from "react-use";
// redux
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { closeSideBar } from "@slices/SideBar";
// Style
import s from "./sideBar.module.css";
// Components
import { Icon } from "@components";
import useMediaQuery from "@hook/useMediaQuery";

const MainSideBar = () => {
    const { component, statusSideBar } = useAppSelector(state => state.sideBar);

    const dispatch = useAppDispatch();

    // contorol for lock body
    const md = useMediaQuery("md");
    const finalConditinalIsLoack = !md && statusSideBar;
    useLockBodyScroll(finalConditinalIsLoack);

    const handleClose = () => {
        dispatch(closeSideBar());
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
