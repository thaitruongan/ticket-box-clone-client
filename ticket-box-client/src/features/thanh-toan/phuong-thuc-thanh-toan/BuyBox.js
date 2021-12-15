import React from "react";
import { ReactComponent as ViThanhToan } from "../../../images/vi-thanh-toan.svg";
import { Radio } from "./Radio";
import "./BuyBox.css";

class BuyBox extends React.Component {
  state = {
    value: 0,
  };

  onChange = (e) => {
    console.log("radio checked", e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    return (
      <div className="buy-box">
        <div className="title-user">
          <ViThanhToan className="img-user" />
          <h2>Phương thức thanh toán</h2>
        </div>

        <div className="radio-selection">
          <Radio name="howtopay" value="MOMO" />
          <Radio name="howtopay" value="TTD" />
          <Radio name="howtopay" value="ATM" />
        </div>
      </div>
    );
  }
}

export default BuyBox;
