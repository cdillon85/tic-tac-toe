import React from "react";

export const themes = {
    blue: {
        style: `background-color: blue; color: white; height: ;`,
        name: `blue`

    },
    green: {
        style: `background-color: green; color: white; height: 100%;`,
        name: `green`,
    },
    white: {
        style: `background-color: white; color: black; height: 100%;`,
        name: `white`
    },
}

export const ThemeContext = React.createContext({
    theme: themes.white,
    toggleTheme: () => {},
},);