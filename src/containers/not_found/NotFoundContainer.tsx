import {FC, JSX, MutableRefObject, useEffect, useRef} from "react";
import go_home from "../../assets/images/button_bg.svg"
import {useTranslation} from "react-i18next";
import {NavigateFunction, useNavigate} from "react-router-dom";


const NotFoundContainer: FC = (): JSX.Element => {

    const {t} = useTranslation();
    const navigate: NavigateFunction = useNavigate();
    const audio_ref: MutableRefObject<HTMLAudioElement> = useRef<HTMLAudioElement>(new Audio("src/assets/audio/go_home.mp3"));

    useEffect((): void => {
        const audio: HTMLAudioElement = audio_ref.current;
        audio.load();
    }, []);

    const play_audio: () => void = (): void => {
        audio_ref.current.currentTime = 0;
        audio_ref.current.play();
    }

    return <section className={"not_found"}>


        <h1>{t("not_found_text")}</h1>


        <figure onClick={(): void => {
            play_audio();
            navigate("/")
        }}>
            <img src={go_home} alt="go_home" loading={"lazy"}/>

            <h1>{t("go_home")}</h1>
        </figure>

    </section>
}

export default NotFoundContainer;