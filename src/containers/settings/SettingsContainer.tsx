import {ChangeEvent, FC, JSX, useEffect} from "react";
import ASection from "../../components/common/ASection.tsx";
import paper from "../../assets/images/paper.webp";
import {useFormik} from "formik";
import {SettingProps} from "../../types/data/data_types.ts";
import {useSettings} from "../../context/SettingsContext.tsx";
import {useTranslation} from "react-i18next";


const SettingsContainer: FC = (): JSX.Element => {

    const {i18n, t} = useTranslation();
    const {data, update_data} = useSettings();

    const {values, handleChange, setFieldValue} = useFormik<SettingProps>({
        initialValues: {
            lang: data.lang,
            sound: data.sound,
        },
        validateOnChange: true,
        onSubmit: (): void => {
        }
    })


    function save_settings(data: SettingProps): void {
        update_data(data);
        i18n.changeLanguage(data.lang)
    }

    useEffect((): void => {
        save_settings(values)
    }, [values])


    return <ASection className={"settings"}>

        <figure className={"paper"}>
        <img src={paper} alt="paper" title="paper" loading={"eager"} height={"auto"} width={"573px"} />

            <div className={"settings_content"}>

                <div className={"setting_1 setting_box"}>
                    <p>{t("language")}</p>

                    <select name="language" id="language" value={values.lang}
                            onChange={(e: ChangeEvent<HTMLSelectElement>): void => {
                                setFieldValue("lang", e.target.value);
                            }}>
                        <option value="en">english</option>
                        <option value="az">azerbaijani</option>
                        <option value="tr">turkish</option>

                    </select>
                </div>

                <div className={"setting_2 setting_box"}>
                    <p>{t("sound_effects")}</p>

                    <input type="checkbox" id={"sound"} name={"sound"} checked={values.sound} onChange={handleChange}/>
                </div>
            </div>

        </figure>


    </ASection>
}

export default SettingsContainer;