import {FC, JSX} from "react";
import paper from "../../assets/images/paper.webp";
import ASection from "../../components/common/ASection.tsx";
import {useFormik} from "formik";
import {useTranslation} from "react-i18next";


const HomeContainer: FC = (): JSX.Element => {


    const {t} = useTranslation();

    const {values, handleChange, handleSubmit, resetForm} = useFormik<{ text: string }>({
        initialValues: {
            text: ""
        },
        onSubmit,
    });


    function onSubmit(values: { text: string }): void {
        console.log(values);
        resetForm();

    }


    return <ASection className={"home"}>

        <form onSubmit={handleSubmit}>
            <figure className={"paper"}>

                <img src={paper} alt="paper" loading={"lazy"}/>

                <textarea name="text" id="text" rows={7} placeholder={t("type_here")} value={values.text}
                          onChange={handleChange}></textarea>


            </figure>


        </form>

    </ASection>


}


export default HomeContainer;