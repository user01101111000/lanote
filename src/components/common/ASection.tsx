import { motion } from "framer-motion";
import { FC, JSX } from "react";
import { ASectionProps } from "../../types/components/components_types.ts";


const ASection: FC<ASectionProps> = (props: ASectionProps): JSX.Element => {
    return <motion.section initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
        className={props.className}>{props.children}</motion.section>
}

export default ASection;