import React, {useContext} from "react";
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import {ThemeContext} from "../context/ThemeContext";

const Square = (props) => {
    const {theme} = useContext(ThemeContext);
    return (
        <button
            css={css `${theme.style}
                    border: 1px solid ${theme.name !== 'white' ? 'white' : 'black'};
                    float: left;
                    font-size: 60px;
                    font-weight: bold;
                    line-height: 34px;
                    height: 100px;
                    margin-right: -1px;
                    margin-top: -1px;
                    padding: 0;
                    text-align: center;
                    width: 100px;
                    &:focus {
                        outline: none;
                        background: black;
                    }`
            }
            onClick={() => props.onClick()}
        >
            {props.value}
        </button>
    );
};

Square.propTypes = {
    onClick: PropTypes.func,
}

export default Square;