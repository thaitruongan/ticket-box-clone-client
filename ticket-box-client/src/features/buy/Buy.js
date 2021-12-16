import React, { useState, useEffect } from "react";
import ShowTimeAPI from "../../api/showTimeAPI";
import { Row, Col, Collapse } from "antd";
import "./Buy.css";
import Calendar from "../../components/calendar/Calendar";

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const Buy = (props) => {
  const [showTime, setShowTime] = useState([]);

  const fetchShowTime = async () => {
    const response = await ShowTimeAPI.getAll();
    setShowTime(response.data);
  };

  useEffect(() => {
    fetchShowTime();
  }, []);

  const { movieDetail } = props;

  const handleRuningTime = (time) => {
    const H = Math.floor(time / 60);
    const M = time % 60;

    return `${H} giờ ${M} phút`;
  };

  return (
    <div className="buy">
      <div className="title-buy">
        <div className="info-title-buy">
          <div className="name-movies">
            <h2>{movieDetail.name}</h2>
          </div>
          <div className="xuat-chieu">
            <span>{movieDetail.label}</span>
            <span> | </span>
            <span>{handleRuningTime(movieDetail.runningTime)}</span>
          </div>
        </div>
        <div className="lich-chieu">
          <div className="site-calendar-demo-card">
            <Calendar />
          </div>
        </div>
      </div>
      <Row>
        <Col className="rap">
          <div className="rap-chieu">
            <img
              src="https://images.tkbcdn.com/2/48/48/poster/f8242538-2799-11ea-90b0-0242ac110003@webp"
              alt="BHD Star"
            />
            <h4>BHD Star</h4>
          </div>
        </Col>
        <Col className="info-xuat-chieu">
          {showTime.map((item) => {
            return (
              <Collapse
                defaultActiveKey={["1"]}
                onChange={callback}
                className="collapse"
              >
                <Panel header={item.room.name} key="1">
                  <div className="thoi-gian">
                    <div className="loai-phim">
                      <h2>2D</h2>
                    </div>
                    <div className="gio">
                      <a href="/thanhtoan">{item.timeStart}</a>
                    </div>
                  </div>
                </Panel>
              </Collapse>
            );
          })}

          <Collapse
            defaultActiveKey={["1"]}
            onChange={callback}
            className="collapse"
          >
            <Panel header="BHD Star 3.2" key="1">
              <div className="thoi-gian">
                <div className="loai-phim">
                  <h2>2D</h2>
                </div>
                <div className="gio">
                  <a href="/thanhtoan">12:50</a>
                </div>
              </div>
            </Panel>
          </Collapse>
        </Col>
      </Row>
    </div>
  );
};

export default Buy;
