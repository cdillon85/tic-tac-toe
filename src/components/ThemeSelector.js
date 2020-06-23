import React, {useContext} from "react";
import {themes, ThemeContext} from "../context/ThemeContext";
import { css } from '@emotion/core';

const ThemeSelector = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    return(
        <div css={css`${theme.style}`}>
            <h1>The current theme is {theme.name}</h1>
            <button onClick={() => toggleTheme(themes.blue)}>Make the theme {themes.blue.name} </button>
            <button onClick={() => toggleTheme(themes.green)}>Make the theme {themes.green.name}</button>
            <button onClick={() => toggleTheme(themes.white)}>Make the theme {themes.white.name}</button>
        </div>
    )
};

export default ThemeSelector;