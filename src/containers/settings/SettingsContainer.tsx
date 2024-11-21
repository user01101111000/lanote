import {FC, JSX} from "react";
import ASection from "../../components/common/ASection.tsx";
import paper from "../../assets/images/paper.webp";


const SettingsContainer: FC = (): JSX.Element => {
    return <ASection className={"settings"}>

        <figure className={"paper"}>
            <img src={paper} alt="paper" loading={"lazy"}/>
        </figure>


    </ASection>
}

export default SettingsContainer;