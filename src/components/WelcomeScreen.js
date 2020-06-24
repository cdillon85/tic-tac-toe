import React from "react";
import { css } from "@emotion/core";
import PropTypes from 'prop-types';

const WelcomeScreen = (props) => {
    return (
        <div css={css
            `border: 2px solid black; 
            padding: 20px; 
            height: 300px; 
            margin-top: 50px;`
        }>
            <div css={css` font-size: 50px; margin-top: 35px;`}>Hey! Let's Play&nbsp;
                <span css={css`color: blue`}>Tic</span>&nbsp;
                <span css={css`color: green`}>Tac</span>&nbsp;
                <span css={css`color: red`}>Toe</span>!</div>
            <button
                css={css
                `width: 150px; 
                height 100px; 
                margin: 50px 200px 0 200px; 
                font-size: 20px; 
                background-color: black; 
                color: white;
                &:hover {
                    background-color: white; 
                    color: black;
                    border: 3px solid black;
                    cursor: pointer;
                }`
            }
                onClick={props.startGame}
            > Let's Play!</button>
        </div>
    )
}

WelcomeScreen.propTypes = {
    startGame: PropTypes.func,
}

export default WelcomeScreen;