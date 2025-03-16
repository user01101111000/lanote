import { FC, JSX } from "react";
import HomeContainer from "../../containers/home/HomeContainer.tsx";
import { Helmet } from "react-helmet";

const Home: FC = (): JSX.Element => {
    return <>

        <Helmet>
            <title>lanote | Home</title>
            <link rel="canonical" href={window.location.href} />
            <meta name="description" content="Write a letter and send it. But delete it immediately after it is read. Home page." />
        </Helmet>

        <HomeContainer />
    </>
}

export default Home;