import React from "react";
import { Row, Col } from "antd";
import { ReactComponent as Movie } from "../../images/home-leftmovie-desktop.svg";
import { ReactComponent as Dog } from "../../images/home-movie-mobile.svg";
import "./NameCard.css";

const NameCard = () => {
  return (
    <div className="name-card">
      <Row gutter={10} className="name-row">
        <Col className="gutter-row" span={5}>
          <div className="name-left">
            <Movie />
          </div>
        </Col>
        <Col className="gutter-row" span={5}>
          <div className="name-center">
            <h2>Phim chiếu rạp</h2>
          </div>
        </Col>
        <div className="gach-chan"></div>
        <Col className="gutter-row" span={5}>
          <div className="name-right">
            <Dog />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default NameCard;
