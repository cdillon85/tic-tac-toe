import React from "react";

export const themes = {
    blue: {
        style: `background-color: blue; color: white;`,
        name: `blue`
    },
    green: {
        style: `background-color: green; color: white;`,
        name: `green`,
    },
    white: {
        style: `background-color: white; color: black;`,
        name: `white`
    },
    red: {
        style: `background-color: red; color: white;`,
        name: `red`,
    }
}

export const themeTypes = ['blue', 'green', 'red', 'white'];

export const ThemeContext = React.createContext({
    theme: themes.white,
    toggleTheme: () => {},
},);