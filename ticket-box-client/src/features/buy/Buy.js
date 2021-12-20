import React, { useState, useEffect, useNavigate } from "react";
import ShowTimeAPI from "../../api/showTimeAPI";
import { Row, Col, Collapse } from "antd";
import "./Buy.css";
import Calendar from "../../components/calendar/Calendar";

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const Buy = (props) => {
  const navigate = useNavigate();
  const [showTimeList, setShowTimeList] = useState([]);
  const rooms = [];
  const { movieDetail } = props;

  const handleSelectDay = async (date) => {
    if (date) {
      try {
        const response = await ShowTimeAPI.getByMovie(movieDetail._id, date);
        if (response.message === "successfully!") {
          setShowTimeList(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    const fetchShowTime = async () => {
      try {
        const response = await ShowTimeAPI.getByMovie(
          movieDetail._id,
          new Date()
        );
        setShowTimeList(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchShowTime();
  }, [movieDetail._id]);

  for (let i = 0; i < showTimeList.length; i++) {
    if (!rooms.find((element) => element._id === showTimeList[i].roomId)) {
      rooms.push(showTimeList[i].room[0]);
    }
  }

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
            <Calendar onClick={handleSelectDay} />
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
            <h4>TicketBox</h4>
          </div>
        </Col>
        <Col className="info-xuat-chieu">
          {rooms.map((item) => {
            const showTimes = showTimeList.filter(
              (st) => st.roomId === item._id
            );

            return (
              <Collapse
                key={item._id}
                defaultActiveKey={["1"]}
                onChange={callback}
                className="collapse"
              >
                <Panel header={item.name} key="1">
                  <div className="thoi-gian">
                    {showTimes.map((element) => {
                      const timeStart = new Date(element.timeStart);
                      return (
                        <div
                          key={element._id}
                          className="gio"
                          onClick={() =>
                            navigate("/select-seat", { state: element })
                          }
                        >
                          {Math.floor(timeStart.getMinutes() / 10) > 0
                            ? `${timeStart.getHours()}:${timeStart.getMinutes()}`
                            : `${timeStart.getHours()}:0${timeStart.getMinutes()}`}
                        </div>
                      );
                    })}
                  </div>
                </Panel>
              </Collapse>
            );
          })}
        </Col>
      </Row>
    </div>
  );
};

export default Buy;
