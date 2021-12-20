import React from "react";
import './Seat.css';

const Seat = (props) => {
  const { element, onClick, selectedList, idSocket } =
    props;

  const isVip = element.isVip;
  const isFree = element.status;
  let className = "";
  let className2 = "";

  const handleClick = (tic) => {
    if (
      (onClick && tic && isFree === "free") ||
      (onClick && tic && isFree === idSocket)
    ) {
      onClick(tic);
    }
  };

  if (selectedList.find((tic) => element._id === tic._id)) {
    className2 = "isUSelected";
  }

  if (isFree === "free") {
    if (isVip) {
      className = "vipTrue";
    } else {
      className = "vipFalse";
    }
  } else if (isFree === idSocket) {
    className = "isUSelected";
  } else {
    className = "freeFalse";
  }

  return (
    <div
      className={`seat ${className} ${className2}`}
      onClick={() => handleClick(element)}
    >
      <span>{element.column}</span>
    </div>
  );
};

export default Seat;
