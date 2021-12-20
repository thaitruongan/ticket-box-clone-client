import React from "react";
import Seat from "./Seat";
import "./SeatRow.css";

const SeatRow = (props) => {
  const {
    elements,
    onClickOnSeat,
    selectedList,
    idSocket,
  } = props;
  const hanldeClickOnSeat = (tic) => {
    if (onClickOnSeat && tic) {
      onClickOnSeat(tic);
    }
  };

  return (
    <div className="seatRow">
      {elements.map((element) => (
        <Seat
          key={element.column}
          element={element}
          idSocket={idSocket}
          onClick={hanldeClickOnSeat}
          selectedList={selectedList}
        />
      ))}
    </div>
  );
};

export default SeatRow;
