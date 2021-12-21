import React, { useState } from "react";
import "./AddEvent.css";
//import { PlusCircleOutlined } from "@ant-design/icons";
import { DatePicker, TimePicker, Select } from "antd";
import ShowTimeAPI from "../../api/showTimeAPI";
import { useSelector } from "react-redux";
import { selectToken } from "../../app/userSlice";

const { Option } = Select;
const AddEvent = (props) => {
  const { movie, room, fetchListShowTime } = props;
  const token = useSelector(selectToken);
  const [movieId, setMovieId] = useState(null);
  const [roomId, setRoomId] = useState(null);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [price, setPrice] = useState(0);
  const [vipPrice, setVipPrice] = useState(0);

  function handleChangeMovie(value) {
    setMovieId(value);
  }
  function handleChangeRoom(value) {
    setRoomId(value);
  }

  function onChangeDate(date, dateString) {
    setDate(dateString);
  }

  function onChangeTime(time, timeString) {
    setTime(timeString);
  }

  const handleChangePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleChangeVipPrice = (e) => {
    setVipPrice(e.target.value);
  };

  const handleSubmit = async (e) => {
    let _date = new Date(date);
    _date.setHours(time[0] + time[1] + "");
    _date.setMinutes(time[3] + time[4] + "");
    try {
      const res = await ShowTimeAPI.addShowTime(
        token,
        movieId,
        roomId,
        _date,
        price,
        vipPrice
      );
      if (res.data) {
        fetchListShowTime();        
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="new-event-container">
      <div className="btn-mecm">
        {/* <div>
          <PlusCircleOutlined className="btn-mecm-a" />
          <EditOutlined className="btn-mecm-m" />
          <DeleteOutlined className="btn-mecm-r" />
        </div> */}
        <h2>Xuất chiếu phim</h2>
      </div>

      <div className="content">
        <div className="col-content">
          <div className="select-film">
            <h5>Chọn phim</h5>
            <Select
              className="select-film-sl"
              showSearch
              placeholder="Chọn phim"
              optionFilterProp="children"
              onChange={handleChangeMovie}
            >
              {movie.map((movie) => {
                return <Option key={movie._id} value={movie._id}>{movie.name}</Option>;
              })}
            </Select>
          </div>
          <div className="time-start">
            <div className="dtpfem d">
              <h5>Chọn ngày</h5>
              <DatePicker onChange={onChangeDate} style={{width:'8rem', marginRight:"4.2rem"}}/>
            </div>

            <div className="time">
              <h5>Chọn giờ</h5>
              <TimePicker className="selectt" onChange={onChangeTime} />
            </div>
          </div>
        </div>

        <div className="col-content-2">
          <div className="select-room">
            <h5>Chọn rạp</h5>
            <Select
              className="select-room-sl"
              showSearch
              placeholder="Chọn rạp"
              optionFilterProp="children"
              onChange={handleChangeRoom}
            >
              {room.map((room) => {
                return <Option key={room._id} value={room._id}>{room.name}</Option>;
              })}
            </Select>
          </div>

          <div className="add-price">
            <div className="chuan">
              <h5>Giá chuẩn</h5>
              <input
                className="gia"
                value={price}
                id="price"
                style={{ marginRight: "5rem" }}
                onChange={(e) => handleChangePrice(e)}
              />
            </div>
            <div className="sstfem dtpfem">
              <h5>Giá VIP</h5>
              <input
                className="gia"
                value={vipPrice}
                id="vipPrice"
                onChange={(e) => handleChangeVipPrice(e)}
              />
            </div>
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="submit"
        onClick={(e) => {
          handleSubmit(e);
        }}
      >
        save
      </button>
    </div>
  );
};

export default AddEvent;
