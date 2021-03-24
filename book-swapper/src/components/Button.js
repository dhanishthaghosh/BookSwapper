import React, {useState} from 'react';
import {Link} from 'react-router-dom';
// import './Button.css';


export const Button = ({children, type, onclick, buttonStyle, buttonSize}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

}