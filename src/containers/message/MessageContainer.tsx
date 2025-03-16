import { FC, JSX, MutableRefObject, useEffect, useRef, useState } from "react";
import paper from "../../assets/images/paper.webp";
import fire from "../../assets/icons/fire.png";
import { useParams } from "react-router";
import useGetMessage from "../../hooks/service/useGetMessage.tsx";
import { Tooltip } from "react-tooltip";
import { AnimatePresence, motion } from "framer-motion";
import burning from "../../assets/gifs/burning.gif";
import useDeleteMessage from "../../hooks/service/useDeleteMessage.tsx";
import { useSettings } from "../../context/SettingsContext.tsx";
import LoadingScreen from "../../components/common/LoadingScreen.tsx";
import ErrorScreen from "../../components/common/ErrorScreen.tsx";
import { useTranslation } from "react-i18next";
import deleting from "../../assets/audio/deleting.mp3"

const MessageContainer: FC = (): JSX.Element => {

    const { id } = useParams();
    const [showMainPage, setShowMainPage] = useState<boolean>(true);
    const [showFire, setShowFire] = useState<boolean>(true);
    const [showBurn, setShowBurn] = useState<boolean>(false);
    const { t } = useTranslation();
    const { mutate } = useDeleteMessage();
    const { data: settings } = useSettings();
    const audio_ref: MutableRefObject<HTMLAudioElement> = useRef<HTMLAudioElement>(new Audio(deleting));


    useEffect((): void => {
        const audio: HTMLAudioElement = audio_ref.current;
        audio.load();

        const img = new Image();
        img.src = paper;
        img.onload = (): void => {
            setShowMainPage(true);
        }

    }, []);


    const play_audio: () => void = (): void => {
        audio_ref.current.currentTime = 0;
        audio_ref.current.play();
    }

    const { data, isLoading, isError } = useGetMessage(id as string);

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
        <LoadingScreen />
    </section>

    if (isError) return <section className={"message"}>
        <ErrorScreen />
    </section>


    return showMainPage ? <section className={"message"}>

        <figure className={"paper"}>

            <img src={paper} alt="paper" title="paper" loading={"eager"} height={"auto"} width={"573px"} />

            <div className={"message_content"}>
                <p>{data?.fields.message.stringValue}</p>
            </div>

            <AnimatePresence>
                {
                    showBurn && <motion.figure initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        transition={{ duration: 3 }}
                        className={"burning"}>
                        <img src={burning} alt="burning" loading={"eager"} title="burning" height={"auto"} width={"573px"} />
                    </motion.figure>
                }
            </AnimatePresence>

        </figure>


        <AnimatePresence>
            {showFire && <motion.figure initial={{ opacity: 1, translateY: 0 }}
                exit={{ opacity: 0, translateY: -100 }}
                transition={{ duration: 2 }}
                data-tooltip-content={t("burn_message")} data-tooltip-id="delete_message"
                className={"delete_message"}
                onClick={burn_message}>
                <img src={fire} alt="fire" loading={"eager"} title="fire" height={35} width={43} />
            </motion.figure>}
        </AnimatePresence>

        <Tooltip id="delete_message" />
    </section> : <section className={"message"}>
        <LoadingScreen />
    </section>;
}

export default MessageContainer;