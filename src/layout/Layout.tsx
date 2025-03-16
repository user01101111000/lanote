import {Outlet} from "react-router";
import {FC, JSX, Suspense} from "react";
import NavButtons from "../components/common/NavButtons.tsx";
import Tour from "../components/common/Tour.tsx";
import LoadingScreen from "../components/common/LoadingScreen.tsx";

const Layout: FC = (): JSX.Element => {

    return <main className="layout">
        <Suspense fallback={<LoadingScreen/>}>
            <Tour/>
            <Outlet/>
            <NavButtons/>
        </Suspense>
    </main>

}

export default Layout;