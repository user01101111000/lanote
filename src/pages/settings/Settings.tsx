import { FC, JSX } from "react";
import SettingsContainer from "../../containers/settings/SettingsContainer.tsx";
import { Helmet } from "react-helmet";

const Settings: FC = (): JSX.Element => {
    return <>
        <Helmet>
            <title>lanote | Settings</title>
            <link rel="canonical" href={window.location.href} />
            <meta name="description" content="Write a letter and send it. But delete it immediately after it is read. Settings page." />
        </Helmet>

        <SettingsContainer />
    </>;
}

export default Settings;

