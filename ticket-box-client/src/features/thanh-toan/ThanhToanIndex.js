import React from "react";
import { Row, Col } from "antd";
import InfoUser from "./thong-tin-nguoi-nhan/InfoUser";
import BuyBox from "./phuong-thuc-thanh-toan/BuyBox";
import Ve from "./ve/Ve";
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
