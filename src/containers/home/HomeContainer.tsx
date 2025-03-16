import { FC, JSX, MutableRefObject, Suspense, useEffect, useRef, useState } from "react";
import paper from "../../assets/images/paper.webp";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import sender from "../../assets/icons/sender.webp"
import { Tooltip } from "react-tooltip";
import { messageSchema } from "../../utils/form/schema.ts";
import { AnimatePresence, motion } from "framer-motion";
import { useSettings } from "../../context/SettingsContext.tsx";
import usePostMessage from "../../hooks/service/usePostMessage.tsx";
import LoadingScreen from "../../components/common/LoadingScreen.tsx";
import wings from "../../assets/audio/wings.mp3";
import go_home from "../../assets/audio/go_home.mp3";
import envelope from "../../assets/images/envelope.svg"
import ASection from "../../components/common/ASection.tsx";

const HomeContainer: FC = (): JSX.Element => {

    const [showMainPage, setShowMainPage] = useState<boolean>(true);

    const { data } = useSettings();
    const { t } = useTranslation();
    const audio_ref: MutableRefObject<HTMLAudioElement> = useRef(new Audio(wings));
    const audio_ref1: MutableRefObject<HTMLAudioElement> = useRef(new Audio(go_home));
    const [showLinkPage, setShowLinkPage] = useState<boolean>(false);
    const [messageURL, setMessageURL] = useState<string>("");

    const { mutateAsync, isPending } = usePostMessage();

    useEffect((): void => {
        const audio: HTMLAudioElement = audio_ref.current;
        const audio1: HTMLAudioElement = audio_ref1.current;
        audio.load();
        audio1.load();


        const img = new Image();
        img.src = paper;
        img.onload = (): void => {
            setShowMainPage(true);
        }

    }, [])

    const play_audio: () => void = (): void => {
        audio_ref.current.currentTime = 0;
        audio_ref.current.play();
    }

    const play_audio1: () => void = (): void => {
        audio_ref1.current.currentTime = 0;
        audio_ref1.current.play();
    }

    const { values, handleChange, handleSubmit, resetForm, errors, touched, handleBlur } = useFormik<{
        message: string
    }>({
        initialValues: {
            message: ""
        },
        onSubmit,
        validationSchema: messageSchema,
    });


    async function onSubmit(values: { message: string }): Promise<void> {
        try {
            const id: string = await mutateAsync(values.message);
            const message_url: string = window.location.href + "message/" + id
            setMessageURL(message_url);

        } catch (e) {
            console.error(e);
        }
        if (data.sound) play_audio();
        resetForm();
        setShowLinkPage(true);
    }


    return showMainPage ? <Suspense fallback={<LoadingScreen />}>
        <ASection className={"home"}>

            <form onSubmit={handleSubmit}>
                <figure className={"paper"}>

                    <img src={paper} alt="paper" title="paper" loading={"eager"} height={"auto"} width={"573px"} />

                    <div className={"home_content"}>
                        <button data-tooltip-id="sender" data-tooltip-content={t("send")} type={"submit"}
                            className={"sender_button"}>
                            <figure>
                                <img src={sender} alt="sender" loading={"eager"} title="sender" height={"auto"} width={60} />
                            </figure>
                        </button>

                        <AnimatePresence>
                            {touched.message && errors.message &&
                                <motion.p initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className={"error_message"}>{errors.message}</motion.p>}
                        </AnimatePresence>

                        <textarea name="message" id="message" rows={7} placeholder={t("type_here")}
                            value={values.message}
                            onBlur={handleBlur}
                            onChange={handleChange}></textarea>
                    </div>

                </figure>

                <Tooltip id={"sender"} />


                {isPending && <LoadingScreen />}

            </form>

            <AnimatePresence>
                {showLinkPage && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className={"link_page"}>

                    <figure className={"envelope"}>
                        <img src={envelope} alt="envelope" loading={"lazy"} />
                    </figure>

                    <div className={"envelope_buttons"}>
                        <button onClick={(): void => {
                            if (data.sound) play_audio1();
                            window.open(messageURL, "_blank");
                            setShowLinkPage(false)

                        }}>{t("open_env")}</button>

                        <button onClick={(): void => {
                            if (data.sound) play_audio1();
                            navigator.clipboard.writeText(messageURL);
                            setShowLinkPage(false)
                        }}>{t("copy")}</button>
                    </div>

                </motion.div>}
            </AnimatePresence>

        </ASection>
    </Suspense> : <></>


}


export default HomeContainer;