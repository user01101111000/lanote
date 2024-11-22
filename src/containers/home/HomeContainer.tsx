import {FC, JSX, MutableRefObject, useEffect, useRef, useState} from "react";
import paper from "../../assets/images/paper.webp";
import ASection from "../../components/common/ASection.tsx";
import {useFormik} from "formik";
import {useTranslation} from "react-i18next";
import sender from "../../assets/icons/sender.webp"
import {Tooltip} from "react-tooltip";
import {messageSchema} from "../../utils/form/schema.ts";
import {AnimatePresence, motion} from "framer-motion";
import {useSettings} from "../../context/SettingsContext.tsx";
import loading from "../../assets/gifs/message_sending.gif";
// import {NavigateFunction, useNavigate} from "react-router-dom";


const HomeContainer: FC = (): JSX.Element => {

    const [showLoading, setShowLoading] = useState<boolean>(false);
    const {data} = useSettings();
    const {t} = useTranslation();
    const audio_ref: MutableRefObject<HTMLAudioElement> = useRef(new Audio("src/assets/audio/wings.mp3"));
//    const navigate: NavigateFunction = useNavigate();

    useEffect((): void => {
        const audio: HTMLAudioElement = audio_ref.current;
        audio.load();
    }, [])

    const play_audio: () => void = (): void => {
        audio_ref.current.currentTime = 0;
        audio_ref.current.play();
    }


    const {values, handleChange, handleSubmit, resetForm, errors, touched, handleBlur} = useFormik<{
        message: string
    }>({
        initialValues: {
            message: ""
        },
        onSubmit,
        validationSchema: messageSchema,
    });


    async function onSubmit(values: { message: string }): Promise<void> {

        setShowLoading(true);
        await new Promise((resolve: (value: unknown) => void): number => setTimeout(resolve, 4000));
        setShowLoading(false)

        console.log(values);
        if (data.sound) play_audio();
        resetForm();


    }


    return <ASection className={"home"}>

        <form onSubmit={handleSubmit}>
            <figure className={"paper"}>

                <img src={paper} alt="paper" loading={"lazy"}/>

                <div className={"home_content"}>
                    <button data-tooltip-id="sender" data-tooltip-content={t("send")} type={"submit"}>
                        <figure>
                            <img src={sender} alt="sender"/>
                        </figure>
                    </button>

                    <AnimatePresence>
                        {touched.message && errors.message &&
                            <motion.p initial={{opacity: 0, scale: 0.9}} animate={{opacity: 1, scale: 1}}
                                      exit={{opacity: 0, scale: 0.9}}
                                      className={"error_message"}>{errors.message}</motion.p>}
                    </AnimatePresence>

                    <textarea name="message" id="message" rows={7} placeholder={t("type_here")} value={values.message}
                              onBlur={handleBlur}
                              onChange={handleChange}></textarea>
                </div>

            </figure>

            <Tooltip id={"sender"}/>


            <AnimatePresence>
                {showLoading && <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}
                                            className={"loading_win"}>

                    <figure>
                        <img src={loading} alt="loading"/>
                    </figure>

                    <h1>{t("load_text")}</h1>

                </motion.div>}
            </AnimatePresence>
        </form>

    </ASection>


}


export default HomeContainer;