import React, { useState, useEffect } from "react";
import ShowTimeAPI from "../../api/showTimeAPI";
import "./EventManager.css";
import AddEvent from "../../commons/addEvent/AddEvent";

const EventManager = () => {
  const [showCreate, setShowCreate] = useState(false);
  const [listShowTime, setListShowTime] = useState([]);

  const handleDate = (date) => {
    const d = new Date(date);
    const getD = d.getDate();
    const getM = d.getMonth() + 1;
    const getY = d.getFullYear();

    return `${getD}/${getM}/${getY}`;
  };

  const handleTime = (time) => {
    const t = new Date(time);
    const getH = t.getHours();
    const getM = t.getMinutes();
    const getS = t.getSeconds();

    return `${getH}:${getM}:${getS}`;
  };
  const fetchListShowTime = async () => {
    try {
      const response = await ShowTimeAPI.getAll();
      setListShowTime(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchListShowTime();
  }, []);

  return (
    <div className="event-manager-container">
      <div>
        <h2>Danh sách suất chiếu</h2>
      </div>
      <div className="list-event">
        <table>
          <thead>
            <tr>
              <th>STT</th>
              <th>SUẤT CHIẾU</th>
              <th>PHIM</th>
              <th>RẠP</th>
              <th>GIÁ</th>
            </tr>
          </thead>
          {listShowTime.map((item, index) => {
            return (
              <tbody>
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="show-time">
                      <p> Ngày {handleDate(item.timeStart)}</p>
                      <p>{handleTime(item.timeStart)} giờ</p>
                    </div>
                  </td>
                  <td>{item.movieId}</td>
                  <td>{item.roomId}</td>
                  <td>
                    <div className="price">
                      <p>Giá chuẩn {item.standardPrice}</p>
                      <p>Giá VIP {item.vipPrice}</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
      <div className="button">
        <button className="btn-cst" onClick={() => setShowCreate(!showCreate)}>
          Tạo suất chiếu
        </button>
      </div>
      {showCreate ? (
        <div className="create">
          <AddEvent />
        </div>
      ) : null}
    </div>
  );
};

export default EventManager;
