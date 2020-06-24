import React, { useState } from 'react';
import WelcomeScreen from "./WelcomeScreen";
import Game from "./Game";
import ThemeSelector from "./ThemeSelector";
import { css } from "@emotion/core";

const TicTacToeContainer = () => {
    const [gameState, setGameState] = useState('WELCOME');

    const getGameState = () => {
      switch(gameState) {
          case "WELCOME":
              return <WelcomeScreen startGame={() => setGameState("START")}/>;
          case "START":
              return <ThemeSelector playGame={() => setGameState("PLAY")}/>;
          case "PLAY":
              return <Game playAgain={() => setGameState("WELCOME")}/>;
          default:
              return <WelcomeScreen startGame={() => setGameState("START")}/>;
      }
    };

    return (
        <div css={css `display: flex; justify-content: center`}>
            {getGameState()}
        </div>
 )
};

export default TicTacToeContainer;