import {FC, JSX, MutableRefObject, useEffect, useRef, useState} from "react";
import paper from "../../assets/images/paper.webp";
import fire from "../../assets/icons/fire.png";
import {useParams} from "react-router-dom";
import useGetMessage from "../../hooks/service/useGetMessage.tsx";
import {Tooltip} from "react-tooltip";
import {AnimatePresence, motion} from "framer-motion";
import burning from "../../assets/gifs/burning.gif";
import useDeleteMessage from "../../hooks/service/useDeleteMessage.tsx";
import {useSettings} from "../../context/SettingsContext.tsx";
import LoadingScreen from "../../components/common/LoadingScreen.tsx";
import ErrorScreen from "../../components/common/ErrorScreen.tsx";
import {useTranslation} from "react-i18next";


const MessageContainer: FC = (): JSX.Element => {

    const {id} = useParams();
    const [showFire, setShowFire] = useState<boolean>(true);
    const [showBurn, setShowBurn] = useState<boolean>(false);
    const {t} = useTranslation();
    const {mutate} = useDeleteMessage();
    const {data: settings} = useSettings();
    const audio_ref: MutableRefObject<HTMLAudioElement> = useRef<HTMLAudioElement>(new Audio("/src/assets/audio/deleting.mp3"));


    useEffect((): void => {
        const audio: HTMLAudioElement = audio_ref.current;
        audio.load();
    }, []);


    const play_audio: () => void = (): void => {
        audio_ref.current.currentTime = 0;
        audio_ref.current.play();
    }

    const {data, isLoading, isError} = useGetMessage(id as string);

    async function burn_message(): Promise<void> {
        mutate(data?.fields.id.stringValue as string);
        setShowFire(false);
        await new Promise((resolve: (value: unknown) => void): number => setTimeout(resolve, 2000));
        if (settings.sound) play_audio();
        setShowBurn(true)
        await new Promise((resolve: (value: unknown) => void): number => setTimeout(resolve, 3000));
        window.location.reload();
    }


    if (isLoading) return <section className={"message"}>
        <LoadingScreen/>
    </section>

    if (isError) return <section className={"message"}>
        <ErrorScreen/>
    </section>


    return <section className={"message"}>

        <figure className={"paper"}>

            <img src={paper} alt="paper" loading={"lazy"}/>

            <div className={"message_content"}>
                {data?.fields.message.stringValue}
            </div>

            <AnimatePresence>
                {
                    showBurn && <motion.figure initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}
                                               transition={{duration: 3}}
                                               className={"burning"}>
                        <img src={burning} alt="burning"/>
                    </motion.figure>
                }
            </AnimatePresence>

        </figure>


        <AnimatePresence>
            {showFire && <motion.figure initial={{opacity: 1, translateY: 0}} exit={{opacity: 0, translateY: -100}}
                                        transition={{duration: 2}}
                                        data-tooltip-content={t("burn_message")} data-tooltip-id="delete_message"
                                        className={"delete_message"}
                                        onClick={burn_message}>
                <img src={fire} alt="fire"/>
            </motion.figure>}
        </AnimatePresence>

        <Tooltip id="delete_message"/>
    </section>
}

export default MessageContainer;