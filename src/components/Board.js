import React from 'react';
import Square from "./Square";
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const Board = (props) => {
    const renderSquare = (i) => {
        return (
            <Square
                value={props.squares[i]}
                onClick={() => props.onClick(i)}
            />
        );
    };

    return (
        <div>
            <div css={css`${style}`}>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div css={css`${style}`}>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div css={css`${style}`}>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
};

const style = `&:after {
                    clear: both;
                    content: "";
                    display: table;
                    }`;

Board.propTypes = {
    squares: PropTypes.array,
    onClick: PropTypes.func,
}
export default Board;