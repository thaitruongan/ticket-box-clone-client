import React, { useState, useEffect } from "react";
import ShowTimeAPI from "../../api/showTimeAPI";
import "./EventManager.css";
import AddEvent from "../../commons/addEvent/AddEvent";
import MovieAPI from "../../api/movieAPI";
import RoomAPI from "../../api/roomAPI";
import { useSelector } from "react-redux";
import { selectToken } from "../../app/userSlice";

const EventManager = () => {
  const token = useSelector(selectToken);
  const [showCreate, setShowCreate] = useState(false);
  const [listShowTime, setListShowTime] = useState([]);
  const [listMovie, setListMovie] = useState([])
  const [listRoom,setListRoom] = useState([])
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
  
  const fetchMovie = async()=>{
    try{
      const res = await MovieAPI.getAll();      
      setListMovie(res.data)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    const fetchRoom = async()=>{
      try{
        const res = await RoomAPI.getAll(token);
        console.log(res.data)
        setListRoom(res.data)
      }catch(err){
        console.log(err)
      }
    }
    fetchRoom();
  },[token])

  useEffect(() => {
    fetchListShowTime();
    fetchMovie();
  },[]);

  return (
    <div className="event-manager-container">
      <div>
        <h2>Danh sách suất chiếu</h2>
      </div>
      <div className="list-event">
        <table className="table-event">
          <thead>
            <tr>
              <th className="th-event">STT</th>
              <th className="th-event">SUẤT CHIẾU</th>
              <th className="th-event">PHIM</th>
              <th className="th-event">RẠP</th>
              <th className="th-event">GIÁ</th>
            </tr>
          </thead>
          {listShowTime.map((item, index) => {
            return (
              <tbody>
                <tr key={item._id}>
                  <td className="td-event">{index + 1}</td>
                  <td className="td-event">
                    <div className="show-time">
                      <p> Ngày {handleDate(item.timeStart)}</p>
                      <p>{handleTime(item.timeStart)} giờ</p>
                    </div>
                  </td>
                  <td>{item.movie[0].name}</td>
                  <td>{item.room[0].name}</td>
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
          <AddEvent movie={listMovie} fetchListShowTime={fetchListShowTime} room={listRoom} />
        </div>
      ) : null}
    </div>
  );
};

export default EventManager;
