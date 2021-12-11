import React from "react";
import './Seat.css';

const Seat = (props) => {
    const {element} = props;

    return(
        <div className="seat">
            <span>{element.column}</span>
        </div>
    )
}

export default Seat