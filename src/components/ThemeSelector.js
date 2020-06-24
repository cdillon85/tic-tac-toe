import React, {useContext} from "react";
import {themes, themeTypes, ThemeContext} from "../context/ThemeContext";
import { css } from '@emotion/core';

const ThemeSelector = (props) => {
    const {toggleTheme} = useContext(ThemeContext);

    const onThemeSelection = (selectedTheme) => {
        toggleTheme(selectedTheme);
        props.playGame();
    };

    return(
        <div css={css
            `border: 2px solid black; 
            padding: 20px; 
            height: 300px; 
            margin-top: 50px;`
        }
        >
            <div css={css` font-size: 50px; margin-top: 35px;`}>Before we begin, please select a theme:</div>
            <div css={css` height 100px; display: flex; justify-content: center; margin-top: 30px;`}>
            {themeTypes.map((type) => {
                return <button
                    key={type}
                    css={css
                    `width: 150px; 
                    height: 100px; 
                    margin: 20px; 
                    font-size: 30px;
                    border-radius: 10px;
                    ${themes[type].style}
                    &:hover{
                        border: 2px black solid;
                        cursor: pointer;
                    }`
                }
                    onClick={() => onThemeSelection(themes[type])}
                >
                    {type}
                </button>
            })}
            </div>
        </div>
    )
};

export default ThemeSelector;