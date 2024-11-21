import {FC, JSX} from "react";
import burn from "../../assets/gifs/burn_it.gif";

const NotFoundContainer: FC = (): JSX.Element => {
    return <section className={"not_found"}>

        <figure>
            <img src={burn} alt="not_found"/>
        </figure>

        <h1>that lanote no longer exists...</h1>

    </section>
}

export default NotFoundContainer;