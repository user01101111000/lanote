import {FC, JSX} from "react";
import ASection from "../../components/common/ASection.tsx";

const NotFoundContainer: FC = (): JSX.Element => {
    return <ASection className={"not_found"}>
        <h1>Not Found</h1>
    </ASection>
}

export default NotFoundContainer;