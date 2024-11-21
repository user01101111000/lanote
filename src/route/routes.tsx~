import {RouteObject} from "react-router-dom";
import Layout from "../layout/Layout.tsx";
import Home from "../pages/home/Home.tsx";
import Message from "../pages/message/Message.tsx";
import NotFound from "../pages/not_found/NotFound.tsx";
import Settings from "../pages/settings/Settings.tsx";
import AboutUs from "../pages/about_us/AboutUs.tsx";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },

            {
                path: "/message/:id",
                element: <Message/>
            },

            {
                path: "/about_us",
                element: <AboutUs/>
            },

            {
                path: "/settings",
                element: <Settings/>
            },

            {
                path: "*",
                element: <NotFound/>
            }
        ]
    }
];

export default routes;