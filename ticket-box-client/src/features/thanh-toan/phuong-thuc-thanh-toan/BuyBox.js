import React from "react";
import { Radio, Space } from "antd";
import { ReactComponent as ViThanhToan } from "../../../images/vi-thanh-toan.svg";
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
    const { value } = this.state;
    return (
      <div className="buy-box">
        <div className="title-user">
          <ViThanhToan className="img-user" />
          <h2>Phương thức thanh toán</h2>
        </div>
        <Radio.Group onChange={this.onChange} value={value}>
          <Space direction="vertical">
            <Radio value={1} className="radio-thanh-toan">
              Ví Momo
            </Radio>
            <Radio value={2} className="radio-thanh-toan">
              Thẻ tín dụng
            </Radio>
            <Radio value={3} className="radio-thanh-toan">
              ATM
            </Radio>
          </Space>
        </Radio.Group>
      </div>
    );
  }
}

export default BuyBox;
