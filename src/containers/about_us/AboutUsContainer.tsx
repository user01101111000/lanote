import {FC, JSX} from "react";
import ASection from "../../components/common/ASection.tsx";
import paper from "../../assets/images/paper.webp";

const AboutUsContainer: FC = (): JSX.Element => {
    return <ASection className={"about_us"}>

        <figure className={"paper"}>
            <img src={paper} alt="paper" loading={"lazy"}/>
        </figure>
    </ASection>
}

export default AboutUsContainer;