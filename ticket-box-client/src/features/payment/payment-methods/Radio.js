import React from "react";
import './Radio.css';
const renderProps = (value) => {
  switch (value) {
    case "MOMO":
      return {
        description: "Ví Momo",
      };
    case "TTD":
      return {
        description: "Thẻ tín dụng",
      };
    case "ATM":
      return {
        description: "ATM",
      };

    default:
      return;
  }
};
export const Radio = (props) => {
  const { value, name } = props;
  const { description } = renderProps(value);

  return (
    <div className="radio__item">
      <input
        className="radio__item--input"
        type="radio"
        name={name}
        id={value}
        defaultValue={value}
      />
      <label className="radio__item--label label__ATM" htmlFor={value}>
        <p className="pay__text">{description}</p>
      </label>
    </div>
  );
};
