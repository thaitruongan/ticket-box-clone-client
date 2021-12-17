import React from "react";
import { Row, Col } from "antd";
import InfoUser from "./receiver-info/ReceiverInfo";
import BuyBox from "./payment-methods/BuyBox";
import Ve from "./ticket/Ticket";
import TimeWaiting from "./time-waiting/TimeWaiting";

const ThanhToanIndex = () => {
  return (
    <Row>
      <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 5 }}>
        <InfoUser />
        <BuyBox />
      </Col>
      <Col xs={{ span: 11, offset: 1 }} lg={{ span: 7, offset: 2 }}>
        <TimeWaiting/>
        <Ve />
      </Col>
    </Row>
  );
};

export default ThanhToanIndex;
