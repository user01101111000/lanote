import {FC} from "react";
import {motion} from "framer-motion";
import loading from "../../assets/gifs/message_sending.gif";
import {useTranslation} from "react-i18next";

const LoadingScreen: FC = (): JSX.Element => {

    const {t} = useTranslation();

    return <motion.div className={"loading_screen"}>
        <motion.figure initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}}>
            <img src={loading} alt="loading" loading={"lazy"}/>
        </motion.figure>

        <motion.h1 initial={{opacity: 0}} animate={{opacity: 1}}
                   transition={{duration: 1}}>{t("loading")}</motion.h1>
    </motion.div>
}

export default LoadingScreen;