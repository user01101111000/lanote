import {Outlet} from "react-router-dom";
import {FC, JSX,} from "react";
import NavButtons from "../components/common/NavButtons.tsx";


const Layout: FC = (): JSX.Element => {

    return <main className="layout">
        <Outlet/>
        <NavButtons/>
    </main>

}

export default Layout;