import React from "react";
import './Input.css';

const Input = (props) => {
    const {placeholder, maxLength} = props;

    return (
        <input placeholder={placeholder} pattern="[0-9]" maxLength={maxLength} ></input>
    )
}

export default Input