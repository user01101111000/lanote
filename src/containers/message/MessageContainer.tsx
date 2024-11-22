import {FC, JSX} from "react";
import paper from "../../assets/images/paper.webp";
import fire from "../../assets/icons/fire.png";
import {useParams} from "react-router-dom";
import useGetMessage from "../../hooks/service/useGetMessage.tsx";
import {Tooltip} from "react-tooltip";


const MessageContainer: FC = (): JSX.Element => {

    const {id} = useParams();


    const {data, isLoading, isError, error} = useGetMessage(id as string);


    function burn_message(): void {


        //    window.location.reload();
    }


    return <section className={"message"}>

        <figure className={"paper"}>

            <img src={paper} alt="paper" loading={"lazy"}/>

            <div className={"message_content"}>
                {isLoading && <p>Loading...</p>}
                {isError && <p>{error.message}</p>}
                {data && data?.fields.message.stringValue}
            </div>

        </figure>


        <figure data-tooltip-content="burn the message" data-tooltip-id="delete_message" className={"delete_message"}
                onClick={burn_message}>
            <img src={fire} alt="fire"/>
        </figure>

        <Tooltip id="delete_message"/>
    </section>
}

export default MessageContainer;