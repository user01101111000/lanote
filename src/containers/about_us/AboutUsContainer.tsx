import {FC, JSX} from "react";
import ASection from "../../components/common/ASection.tsx";
import paper from "../../assets/images/paper.webp";
import {FaGithub} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {useTranslation} from "react-i18next";
import {Tooltip} from "react-tooltip";


const AboutUsContainer: FC = (): JSX.Element => {

    const {t} = useTranslation();

    return <ASection className={"about_us"}>
        <figure className={"paper"}>
            <img src={paper} alt="paper" loading={"lazy"}/>


            <div className={"about_us_content"}>
                <h1>lanote</h1>

                <p>{t("about_us_text")}</p>


                <div className={"about_us_footer"}>
                    <div className={"about_us_links"}>
                        <a href="https://github.com/user01101111000/lanote" target={"_blank"} data-tooltip-id="github"
                           data-tooltip-content="github"><FaGithub/></a>
                        <a href="https://www.linkedin.com/in/elnurguliyev/" target={"_blank"} data-tooltip-id="linkedin"
                           data-tooltip-content="linkedin"><FaLinkedin/></a>

                        <Tooltip id={"github"}/>
                        <Tooltip id={"linkedin"}/>
                    </div>

                    <p>{t("about_us_copyright")}</p>
                </div>


            </div>

        </figure>
    </ASection>
}

export default AboutUsContainer;