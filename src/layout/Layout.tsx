import {Location, NavigateFunction, Outlet, useLocation, useNavigate} from "react-router-dom";
import {FC, JSX} from "react";
import about from "../assets/icons/about.webp";
import sender from "../assets/icons/sender.webp";
import setting from "../assets/icons/setting.webp";
import {useSettings} from "../context/SettingsContext.tsx";


const Layout: FC = (): JSX.Element => {
    const {data} = useSettings();

    const navigate: NavigateFunction = useNavigate();
    const location: Location = useLocation();


    const play_audio: () => void = (): void => {
        const audio = new Audio("src/assets/audio/next_page.wav");

        audio.play()
    }


    return <main className="layout">
        <Outlet/>


        <div className={"buttons"}>

            <button type={"button"} onClick={(): void => {
                if (location.pathname != "/about_us") {

                    if (data.sound) play_audio();

                    navigate("/about_us");
                }
            }
            }>
                <figure className={"setting_icon"}>
                    <img src={about} alt="about" loading={"lazy"}/>
                </figure>
            </button>


            <button type={"button"} onClick={(): void => {
                if (location.pathname != "/") {
                    if (data.sound) play_audio();
                    navigate("/");
                }

            }}>
                <figure className={"sender"}>
                    <img src={sender} alt="sender" loading={"lazy"}/>
                </figure>
            </button>


            <button type={"button"} onClick={(): void => {
                if (location.pathname != "/settings") {
                    if (data.sound) play_audio();
                    navigate("/settings");
                }
            }}>
                <figure className={"setting_icon"}>
                    <img src={setting} alt="setting" loading={"lazy"}/>
                </figure>
            </button>


        </div>
    </main>

}

export default Layout;