import {Context, createContext, FC, JSX, useContext, useState} from "react";
import {SettingContextProps, SettingContextProviderProps} from "../types/components/components_types.ts";
import {SettingProps} from "../types/data/data_types.ts";

const SettingContext: Context<SettingContextProps> = createContext<SettingContextProps>({
    data: {lang: "en", sound: true},
    update_data: (): void => {
    }
})


const SettingContextProvider: FC<SettingContextProviderProps> = (props: SettingContextProviderProps): JSX.Element => {


    const current_data: SettingProps = localStorage.getItem("settings") ? JSON.parse(localStorage.getItem("settings") as string) : {
        lang: "en",
        sound: true
    };


    const [data, setData] = useState<SettingProps>(current_data);

    function update_data(new_data: SettingProps): void {
        localStorage.setItem("settings", JSON.stringify(new_data));
        setData(new_data)
    }

    const values = {
        data,
        update_data
    }


    return <SettingContext.Provider value={values}>{props.children}</SettingContext.Provider>
}

const useSettings: () => SettingContextProps = (): SettingContextProps => useContext(SettingContext);

export {useSettings, SettingContextProvider}