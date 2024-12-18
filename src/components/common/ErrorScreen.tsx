import {FC} from "react";
import {motion} from "framer-motion";
import error_burn from "../../assets/gifs/error_burn.gif";
import {useTranslation} from "react-i18next";

const ErrorScreen: FC = (): JSX.Element => {

    const {t} = useTranslation();

    return <div className={"error_screen"}>
        <motion.figure initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}}
                       className={"error_burn"}>
            <img src={error_burn} alt="error_burn" loading={"lazy"}/>
        </motion.figure>


        <motion.h1 initial={{opacity: 0}} animate={{opacity: 1}}
                   transition={{duration: 1}}>{t("error_text")}</motion.h1>
    </div>
}

export default ErrorScreen;