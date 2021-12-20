import React from "react";
import "./AddEvent.css";
//import { PlusCircleOutlined } from "@ant-design/icons";
import { DatePicker, TimePicker, Select } from "antd";

const AddEvent = () => {
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
            >
              {/* {movieData.map((movie) => (
            <Option className="omsfem" value={movie.name}>
              {movie.name}
            </Option>
          ))} */}
            </Select>
          </div>
          <div className="time-start">
            <div className="date">
              <h5>Chọn ngày</h5>
              <DatePicker className="selectd" style={{width:"8rem", marginRight:"4.2rem"}}/>
            </div>

            <div className="time">
              <h5>Chọn giờ</h5>
              <TimePicker className="selectt" />
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
            >
              {/* {movieData.map((movie) => (
            <Option className="omsfem" value={movie.name}>
              {movie.name}
            </Option>
          ))} */}
            </Select>
          </div>

          <div className="add-price">
            <div className="chuan">
              <h5>Giá chuẩn</h5>
              <input className="gia" style={{ marginRight:"5rem"}} />
            </div>
            <div className="sstfem dtpfem">
              <h5>Giá VIP</h5>
              <input className="gia" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;
