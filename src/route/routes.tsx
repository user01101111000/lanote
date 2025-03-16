import {RouteObject} from "react-router";
import React, {FC, LazyExoticComponent, Suspense} from "react";
import LoadingScreen from "../components/common/LoadingScreen.tsx";


const Home: LazyExoticComponent<FC> = React.lazy((): Promise<{ default: FC }> => import("../pages/home/Home.tsx"));
const Layout: LazyExoticComponent<FC> = React.lazy((): Promise<{ default: FC }> => import("../layout/Layout.tsx"));
const AboutUs: LazyExoticComponent<FC> = React.lazy((): Promise<{ default: FC }> => import("../pages/about_us/AboutUs.tsx"));
const NotFound: LazyExoticComponent<FC> = React.lazy((): Promise<{ default: FC }> => import("../pages/not_found/NotFound.tsx"));
const Settings: LazyExoticComponent<FC> = React.lazy((): Promise<{ default: FC }> => import("../pages/settings/Settings.tsx"));
const Message: LazyExoticComponent<FC> = React.lazy((): Promise<{ default: FC }> => import("../pages/message/Message.tsx"));

const routes: RouteObject[] = [
    {
        path: "/home?",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },

            {
                path: "about_us",
                element: <AboutUs/>
            },

            {
                path: "settings",
                element: <Settings/>
            }
        ]
    },
    {
        path: "/message/:id",
        element: <Suspense fallback={<LoadingScreen/>}><Message/></Suspense>
    },
    {
        path: "*",
        element: <Suspense fallback={<LoadingScreen/>}><NotFound/></Suspense>
    }
];

export default routes;