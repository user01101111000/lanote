import {FC, JSX} from "react";
import ASection from "../../components/common/ASection.tsx";
import paper from "../../assets/images/paper.webp";
import {FaGithub} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";


const AboutUsContainer: FC = (): JSX.Element => {
    return <ASection className={"about_us"}>
        <figure className={"paper"}>
            <img src={paper} alt="paper" loading={"lazy"}/>


            <div className={"about_us_content"}>
                <h1>lanote</h1>

                <p>You have so many things to say to someone... but why does anyone need to know... so write it, send it
                    and burn it... forever...</p>


                <div className={"about_us_footer"}>
                    <div className={"about_us_links"}>
                        <a href="https://github.com/user01101111000/lanote" target={"_blank"}><FaGithub/></a>
                        <a href="https://www.linkedin.com/in/elnurguliyev/" target={"_blank"}><FaLinkedin/></a>
                    </div>

                    <p>Copyright © 2024 lanote</p>
                </div>


            </div>

        </figure>
    </ASection>
}

export default AboutUsContainer;