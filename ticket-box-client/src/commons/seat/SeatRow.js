import React from "react";
import Seat from "./Seat";
import './SeatRow.css';

const SeatRow = (props) => {
    const {elements} = props;
    return(
        <div className="seatRow">
            {elements.map(element => (<Seat key={element.column} element={element} />))}
        </div>
    )
}

export default SeatRow