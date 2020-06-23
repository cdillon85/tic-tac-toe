import React, {useState} from "react";
import Board from "./Board";
import { calculateWinner } from '../utils/game-utils';
import {css} from "emotion";

const Game = () => {

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

    let status = winner ? 'Winner: ' + winner : 'Next player: ' + (isXNext ? 'X' : 'O');

    return (
        <div
            css={css`
                    display: flex;
                    flex-direction: row;
                `}
        >
            <div>
                <Board
                    squares={current.squares}
                    onClick={(i) => handleClick(i)}
                />
            </div>
            <div css={css`margin-left: 20px;`}>
                <div>{status}</div>
                <ol>{moves}</ol>
            </div>
        </div>
    );
};

export default Game;