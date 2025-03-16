import { FC, JSX } from "react";
import AboutUsContainer from "../../containers/about_us/AboutUsContainer.tsx";
import { Helmet } from "react-helmet";

const AboutUs: FC = (): JSX.Element => {
    return <>
    
        <Helmet>
            <title>lanote | About</title>
            <link rel="canonical" href={window.location.href} />
            <meta name="description" content="Write a letter and send it. But delete it immediately after it is read. About page." />
        </Helmet>

        <AboutUsContainer />
    </>
}
export default AboutUs;