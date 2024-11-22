import {FC, JSX} from "react";
import paper from "../../assets/images/paper.webp";


const MessageContainer: FC = (): JSX.Element => {
    return <section className={"message"}>

        <figure className={"paper"}>

            <img src={paper} alt="paper" loading={"lazy"}/>

            <div className={"message_content"}>
                <p>lorem ipsum</p>
            </div>

        </figure>


    </section>
}

export default MessageContainer;