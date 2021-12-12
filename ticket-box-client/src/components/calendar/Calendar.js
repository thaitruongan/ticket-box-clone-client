import React, { useMemo, useRef } from "react";
import moment from "moment";
import "./Calendar.css";

const generateDaysArray = (start, end) => {
  for (
    var arr = [], dt = new Date(start);
    dt <= end;
    dt.setDate(dt.getDate() + 1)
  ) {
    arr.push(new Date(dt));
  }
  return arr;
};
const displayDayOfWeek = (dateString) => {
  let dayOfWweek = dateString.getDay();
  switch (dayOfWweek) {
    case 0:
      return ["CN"];
    case 1:
      return ["T2"];
    case 2:
      return ["T3"];
    case 3:
      return ["T4"];
    case 4:
      return ["T5"];
    case 5:
      return ["T6"];
    case 6:
      return ["T7"];
    default:
      break;
  }
};

const Calendar = (props) => {
  const value = moment();
  const startDay = value.clone().startOf("day");
  const endDay = value.clone().endOf("month").endOf("week");

  const ulRef = useRef(null);
  const dayList = useMemo(
    () => generateDaysArray(new Date(startDay), new Date(endDay)),
    [endDay, startDay]
  );

  const handleSelectDay = (e, dateString) => {
    const day = dateString.toLocaleDateString("it-IT");
    props.selectDay(day);

    Array.from(ulRef.current.childNodes).forEach((li) => {
      li.classList.remove("active");
    });
    e.target.classList.add("active");
  };

  return (
    <ul ref={ulRef} className="detail__listOfDay">
      {dayList.map((day, idx) => (
        <li
          key={day.toLocaleDateString()}
          className={`detail__listOfDay--item ${idx === 0 ? "active" : ""}`}
          onClick={(e) => handleSelectDay(e, day)}
        >
          <p className="dayOfWeek">{displayDayOfWeek(day)[0]}</p>
          <p className="date">{`${day.getDate()}`.padStart(2, "0")}</p>
        </li>
      ))}
    </ul>
  );
};

export default Calendar;
