import React, {useState} from 'react';
import {ThemeContext, themes} from "../context/ThemeContext";
import {css, Global} from "@emotion/core";
import TicTacToeContainer from "./TicTacToeContainer";

const App = () => {
    const [gameTheme, setGameTheme] = useState(themes.white);
    return (
        <div>
            <Global styles={css`body { background: ${gameTheme.name}; font`}/>
            <ThemeContext.Provider value={{theme: gameTheme, toggleTheme: setGameTheme}}>
                <TicTacToeContainer/>
            </ThemeContext.Provider>
        </div>
    )
};

export default App;