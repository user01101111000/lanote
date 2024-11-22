import {FC, MutableRefObject, useEffect, useRef} from "react";
import about from "../../assets/icons/about.webp";
import sender from "../../assets/icons/pen.webp";
import setting from "../../assets/icons/setting.webp";
import {useSettings} from "../../context/SettingsContext.tsx";
import {Location, NavigateFunction, useLocation, useNavigate} from "react-router-dom";
import {Tooltip} from 'react-tooltip'
import {useTranslation} from "react-i18next";

const NavButtons: FC = (): JSX.Element => {

    const {t} = useTranslation();
    const {data} = useSettings();

    const navigate: NavigateFunction = useNavigate();
    const location: Location = useLocation();

    const audioRef: MutableRefObject<HTMLAudioElement> = useRef(new Audio("src/assets/audio/next_page.wav"));


    useEffect((): void => {
        const audio: HTMLAudioElement = audioRef.current;
        audio.load();
    }, []);

    const play_audio: () => void = (): void => {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
    }


    return <div className={"buttons"}>

        <button data-tooltip-id="about" data-tooltip-content={t("about")} type={"button"} onClick={(): void => {
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


        <button data-tooltip-id="write" data-tooltip-content={t("write")} type={"button"} onClick={(): void => {
            if (location.pathname != "/") {
                if (data.sound) play_audio();
                navigate("/");
            }

        }}>
            <figure className={"sender"}>
                <img src={sender} alt="sender" loading={"lazy"}/>
            </figure>
        </button>


        <button data-tooltip-id="settings" data-tooltip-content={t("settings")} type={"button"} onClick={(): void => {
            if (location.pathname != "/settings") {
                if (data.sound) play_audio();
                navigate("/settings");
            }
        }}>
            <figure className={"setting_icon"}>
                <img src={setting} alt="setting" loading={"lazy"}/>
            </figure>
        </button>


        <Tooltip id="about"/>
        <Tooltip id="settings"/>
        <Tooltip id="write"/>


    </div>
}

export default NavButtons;