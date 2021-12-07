import React, { useState } from "react";
import './informationInput.css';

const InformationInput = (props) => {
    const {placeholder} = props;

    return (
        <input placeholder={placeholder} pattern="[0-9]" ></input>
    )
}

export default InformationInput