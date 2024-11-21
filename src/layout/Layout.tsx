import {NavigateFunction, Outlet, useNavigate} from "react-router-dom";
import {FC, JSX} from "react";
import about from "../assets/icons/about.webp";
import sender from "../assets/icons/sender.webp";
import setting from "../assets/icons/setting.webp";


const Layout: FC = (): JSX.Element => {


    const navigate: NavigateFunction = useNavigate();


    return <main className="layout">
        <Outlet/>


        <div className={"buttons"}>

            <button type={"button"} onClick={(): void => {
                navigate("/about_us");
            }}>
                <figure className={"setting_icon"}>
                    <img src={about} alt="about" loading={"lazy"}/>
                </figure>
            </button>


            <button type={"button"} onClick={() => {
                navigate("/");
            }}>
                <figure className={"sender"}>
                    <img src={sender} alt="sender" loading={"lazy"}/>
                </figure>
            </button>


            <button type={"button"} onClick={() => {
                navigate("/settings");
            }}>
                <figure className={"setting_icon"}>
                    <img src={setting} alt="setting" loading={"lazy"}/>
                </figure>
            </button>


        </div>
    </main>

}

export default Layout;