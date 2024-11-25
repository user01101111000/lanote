import {Outlet} from "react-router-dom";
import {FC, JSX, Suspense} from "react";
import NavButtons from "../components/common/NavButtons.tsx";
import Tour from "../components/common/Tour.tsx";
import LoadingScreen from "../components/common/LoadingScreen.tsx";

const Layout: FC = (): JSX.Element => {
    return <main className="layout">
        <Tour/>
        <Suspense fallback={<LoadingScreen/>}>
            <Outlet/>
        </Suspense>
        <NavButtons/>
    </main>

}

export default Layout;