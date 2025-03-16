import {FC, JSX, useEffect, useState} from "react";
import Joyride, {Step} from "react-joyride";
import {useTranslation} from "react-i18next";

const Tour: FC = (): JSX.Element => {

    const {t} = useTranslation();

    const [run, setRun] = useState<boolean>(localStorage.getItem("tourCompleted") !== "true");

    const steps: Step[] = [
        {
            target: ".sender_button",
            content: `🕊️${t("tour1")}🕊️`,
            disableBeacon: true,
        },
        {
            target: ".about_us_button",
            content: `📜${t("tour2")}📜`,
            disableBeacon: true,
        },
        {
            target: ".home_button",
            content: `🪶${t("tour3")}🪶`,
            disableBeacon: true,
        },
        {
            target: ".settings_button",
            content: `⚙️${t("tour4")}⚙️`,
            disableBeacon: true,
        }
    ];


    const defaultOptions = {
        arrowColor: '#7e6436',
        backgroundColor: '#7e6436',
        overlayColor: 'rgba(0, 0, 0, 0.5)',
        primaryColor: 'rgba(245,245,245,0.8)',
        spotlightShadow: '0 0 15px rgba(0, 0, 0, 0.8)',
        textColor: 'rgba(245,245,245,0.8)',
        zIndex: 100,
    };


    useEffect((): void => {
        const isTourCompleted: string | null = localStorage.getItem("tourCompleted");
        if (!isTourCompleted) {
            setRun(true);
            localStorage.setItem("tourCompleted", "true");
        }
    }, []);

    return <Joyride steps={steps}
                    run={run}
                    continuous
                    showSkipButton
                    scrollToFirstStep
                    hideCloseButton
                    styles={{
                        options: defaultOptions,
                        tooltipContent: {
                            color: 'rgba(245,245,245,0.8)',
                            fontWeight: '500',
                            fontSize: '1.1rem'
                        },
                        buttonNext: {
                            background: 'rgba(0, 0, 0, 0.5)',
                            fontWeight: '500',
                            color: `rgba(245, 245, 245, 0.8)`
                        },
                        buttonBack: {
                            background: 'rgba(0, 0, 0, 0.5)',
                            fontWeight: '500',
                        },
                        buttonSkip: {
                            background: 'rgba(0, 0, 0, 0.5)',
                            fontWeight: '500',
                        }
                    }}
                    locale={{
                        skip: t("skip"),
                        next: t("next"),
                        back: t("back"),
                        last: t("last"),
                    }}
    />
};

export default Tour;