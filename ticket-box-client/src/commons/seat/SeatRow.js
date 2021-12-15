import React from "react";
import Seat from "./Seat";
import './SeatRow.css';

const SeatRow = (props) => {
    const {elements, onClickOnSeat, selectedList, selectedListServer} = props;
    const hanldeClickOnSeat = (tic) => {
        if (onClickOnSeat && tic) {
            onClickOnSeat(tic);
        }
    }

    return(
        <div className="seatRow">
            {elements.map(element => (<Seat key={element.seat[0].column} element={element} onClick={hanldeClickOnSeat} selectedList={selectedList} selectedListServer={selectedListServer} />))}
        </div>
    )
}

export default SeatRow