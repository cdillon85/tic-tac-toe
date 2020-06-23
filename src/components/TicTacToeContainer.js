import React, { useState } from 'react';
import WelcomeScreen from "./WelcomeScreen";
import Game from "./Game";
import ThemeSelector from "./ThemeSelector";

const TicTacToeContainer = () => {

    const [gameState, setGameState] = useState('WELCOME');

    const getGameState = () => {
      switch(gameState) {
          case "WELCOME":
              return <WelcomeScreen startGame={() => setGameState("START")}/>;
          case "PLAY":
              return <Game/>;
          case "START":
              return <ThemeSelector/>
          default:
              return <WelcomeScreen startGame={() => setGameState("PLAY")}/>;
      }
    };

    return (
        <React.Fragment>
            {getGameState()}
        </React.Fragment>
 )
};

export default TicTacToeContainer;