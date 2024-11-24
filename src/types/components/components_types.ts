import React from "react";
import {SettingProps} from "../data/data_types.ts";

export type IProvidersProps = {
    children: React.ReactNode
}

export type SettingContextProps = {
    data: SettingProps,
    update_data: (new_data: SettingProps) => void
}

export type SettingContextProviderProps = {
    children: React.ReactNode
}

export type ASectionProps = {
    children: React.ReactNode,
    className: string
}