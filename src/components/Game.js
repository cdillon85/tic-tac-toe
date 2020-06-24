import React, {useContext, useState} from "react";
import Board from "./Board";
import { calculateWinner } from '../utils/game-utils';
import { css } from '@emotion/core';
import {themes, ThemeContext} from "../context/ThemeContext";
import PropTypes from 'prop-types';

const Game = (props) => {
   const {theme, toggleTheme} = useContext(ThemeContext);
   const [history, setHistory] = useState([{
       squares: Array(9).fill(null),
   }]);
   const [stepNumber, setStepNumber] = useState(0);
   const [isXNext, setIsXNext] = useState(true);

   const handleClick = (i) =>  {
        const tempHistory = history.slice(0, stepNumber + 1);
        const current = tempHistory[tempHistory.length -1];
        const squares = current.squares.slice();

        if (calculateWinner(squares) || squares[i]) return;

        squares[i] = isXNext ? 'X' : 'O';
        setHistory(tempHistory.concat([{squares: squares}]));
        setStepNumber(tempHistory.length);
        setIsXNext(!isXNext);
    };

    const jumpTo = (step) => {
        setStepNumber(step);
        setIsXNext((step % 2 === 0));
    };

    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
        const desc = move ?
            'Go to move #' + move :
            'Go to game start';
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{desc}</button>
            </li>
        )
    })

    let status = winner ? 'Winner: ' + winner + '!!!!': 'Next player: ' + (isXNext ? 'X' : 'O');

    const onPlayAgain = () => {
        toggleTheme(themes.white);
        props.playAgain();
    };

    return (
        <div
            css={css`
                    display: flex;
                    flex-direction: row;
                    border: 2px solid; 
                    padding: 20px; 
                    height: 300px;
                    width: 500px; 
                    margin-top: 50px;
                    ${theme.style}
                `}
        >
            <div>
                <Board
                    squares={current.squares}
                    onClick={(i) => handleClick(i)}
                />
            </div>
            <div css={css`margin-left: 25px;`}>
                <div css={css`font-size: 25px;`}>{status}</div>
                <ol>{moves}</ol>
                {(winner || history.length === 10) && <button css={css
                    `height: 50px; 
                    width: 150px; 
                    font-size: 25px;`
                } onClick={() => onPlayAgain()}
                >
                    Play Again
                </button>}
            </div>
        </div>
    );
};

Game.propTypes = {
    playAgain: PropTypes.func,
}

export default Game;