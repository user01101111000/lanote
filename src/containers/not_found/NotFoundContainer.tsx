import { FC, JSX, MutableRefObject, useEffect, useRef } from "react";
import go_home from "../../assets/images/button_bg.svg"
import { useTranslation } from "react-i18next";
import { NavigateFunction, useNavigate } from "react-router";

const NotFoundContainer: FC = (): JSX.Element => {

    const { t } = useTranslation();
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

        <p className="not_found_text">{t("not_found_text")}</p>

        <figure onClick={(): void => {
            play_audio();
            navigate("/")
        }}>
            <img src={go_home} alt="go_home" loading={"eager"} title="go_home" width={150} height={"auto"} />

            <p className="not_found_button">{t("go_home")}</p>
        </figure>

    </section>
}

export default NotFoundContainer;