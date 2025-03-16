import { Helmet } from "react-helmet";
import MessageContainer from "../../containers/message/MessageContainer.tsx";
import { FC, JSX } from "react";

const Message: FC = (): JSX.Element => {

    return <>
        <Helmet>
            <title>lanote | Message</title>
            <link rel="canonical" href={window.location.href} />
            <meta name="description" content="Write a letter and send it. But delete it immediately after it is read. Message page." />
        </Helmet>

        <MessageContainer />
    </>
}


export default Message;