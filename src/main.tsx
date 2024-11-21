import {createRoot} from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import router from "./route/router.tsx";
import './scss/index.scss'
import Providers from "./components/helpers/Providers.tsx";
import "./i18n.ts"

createRoot(document.getElementById('root')!).render(
    <Providers>
        <RouterProvider router={router} future={{
            v7_startTransition: true
        }}/>
    </Providers>
)

