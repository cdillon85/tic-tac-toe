import React, {useContext, useState} from 'react';
import ReactDOM from 'react-dom';
import TicTacToeContainer from "./components/TicTacToeContainer";
import { Global, css} from "@emotion/core";
import {ThemeContext, themes} from "./context/ThemeContext";

const App = () => {
    const [gameTheme, setGameTheme] = useState(themes.white);

    return (
        <div>
        <Global styles={css`body { background: ${gameTheme.name};`}/>
            <ThemeContext.Provider value={{theme: gameTheme, toggleTheme: setGameTheme}}>
                <TicTacToeContainer/>
            </ThemeContext.Provider>
        </div>
    )
};


ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

