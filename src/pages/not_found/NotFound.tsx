import { FC, JSX } from "react";
import NotFoundContainer from "../../containers/not_found/NotFoundContainer.tsx";
import { Helmet } from "react-helmet";

const NotFound: FC = (): JSX.Element => {
    return <>

        <Helmet>
            <title>lanote | Not Found</title>
            <link rel="canonical" href={window.location.href} />
            <meta name="description" content="Write a letter and send it. But delete it immediately after it is read. Not found page." />
        </Helmet>

        <NotFoundContainer />
    </>
}

export default NotFound;