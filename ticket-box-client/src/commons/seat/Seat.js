import React from "react";
import './Seat.css';

const Seat = (props) => {
    const {element} = props;
    const isVip = element.isVip;
    const isFree = element.status;
    let className = "";

    if (isFree === "free") {
        if (isVip) {
            className ="seat vipTrue";
        }else{
            className ="seat vipFalse";            
        }
    } else {
        className ="seat freeFalse";
    }

    return(
        <div className={className}>
            <span>{element.column}</span>
        </div>
    )
}

export default Seat