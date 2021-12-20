import React from "react";
import { Form, Input } from "antd";
import { ReactComponent as User } from "../../../images/info-user.svg";
import "./ReceiverInfo.css";

const InfoUser = (props) => {
  const {infor, onChangeEmail, onChangePhoneNumber} = props;

  return (
    <div className="info-user">
      <div className="title-user">
        <User className="img-user"/>
        <h2>Thông tin người nhận</h2>
      </div>
      <div className="title-number">
        <h4>Số điện thoại</h4>
      </div>
      <Form.Item hasFeedback validateStatus="success">
        <Input
          allowClear
          placeholder="0987654321"
          value={infor.phoneNumber}
          onChange={e => {
            if (onChangePhoneNumber) {
              onChangePhoneNumber(e.target.value);
            }
          }}
        />
      </Form.Item>
      <div className="title-word">
        <h4>Email</h4>
      </div>
      <Form.Item hasFeedback validateStatus="success">
        <Input
          allowClear
          placeholder="abc123@gmail.com"
          value={infor.email}
          onChange={e => {
            if (onChangeEmail) {
              onChangeEmail(e.target.value);
            }
          }}
        />
      </Form.Item>
    </div>
  );
};

export default InfoUser;
