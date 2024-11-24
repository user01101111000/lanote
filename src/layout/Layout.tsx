import {Outlet} from "react-router-dom";
import {FC, JSX} from "react";
import NavButtons from "../components/common/NavButtons.tsx";
import Tour from "../components/common/Tour.tsx";

const Layout: FC = (): JSX.Element => {
    return <main className="layout">
        <Tour/>
        <Outlet/>
        <NavButtons/>
    </main>

}

export default Layout;