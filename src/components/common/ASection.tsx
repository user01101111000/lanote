import {motion} from "framer-motion";
import React, {FC, JSX} from "react";

type ASectionProps = {
    children: React.ReactNode,
    className: string
}

const ASection: FC<ASectionProps> = (props: ASectionProps): JSX.Element => {
    return <motion.section initial={{opacity: 0, scale: 0.9}} animate={{opacity: 1, scale: 1}} exit={{opacity: 0}}
                           transition={{type: "spring", stiffness: 100, damping: 20}}
                           className={props.className}>{props.children}</motion.section>
}

export default ASection;