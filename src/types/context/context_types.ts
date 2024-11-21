import React from "react";


export enum ETheme {
    LIGHT = 'light',
    DARK = 'dark'
}

export type TThemeContext = {
    theme: ETheme,
    changeTheme: () => void;
}

export type TThemeContextProviderProps = {
    children: React.ReactNode
}