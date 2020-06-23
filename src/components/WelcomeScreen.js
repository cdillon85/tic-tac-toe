import React from "react";

const WelcomeScreen = (props) => {

    return (
        <>
            <h1>Welcome to Tic Tac Toe</h1>
            <button onClick={props.startGame}> Let's Play!</button>
        </>
    )

}



export default WelcomeScreen;