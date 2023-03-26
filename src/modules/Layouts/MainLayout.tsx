import { FC, ReactNode } from "react";
// style
import s from "./layout.module.css";
// Module
import { MainSideBar, MainHeader } from "@modules";

interface PropsType {
    children?: ReactNode | string;
}

const MainLayout: FC<PropsType> = props => {
    const { children } = props;
    return (
        <div>
            <MainHeader />
            <div className="flex">
                <MainSideBar />
                <main className={s.main}>
                    <div>{children}</div>
                </main>
            </div>
        </div>
    );
};

export default MainLayout;
