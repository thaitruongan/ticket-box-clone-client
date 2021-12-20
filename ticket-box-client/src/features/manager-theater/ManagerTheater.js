import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import RoomAPI from "../../api/roomAPI";
import { selectToken } from "../../app/userSlice";
import { ShopOutlined } from "@ant-design/icons";
import "./ManagerTheater.css";

export const ManagerTheater = () => {
  const token = useSelector(selectToken);
  const [showCreate, setShowCreate] = useState(false);
  const [listRoom, setListRoom] = useState([]);
  const [room, setRoom] = useState([]);

  const handle = (e) => {
    const newRoom = { ...room };
    newRoom[e.target.id] = e.target.value;
    setRoom(newRoom);
    console.log(newRoom);
  };

  const fetchAllRoom = async () => {
    try {
      const response = await RoomAPI.getAll(token);
      console.log(response.data);
      setListRoom(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    console.log(room);
    try {
      await RoomAPI.addRoom(token, room.name, room.row, room.col);
      fetchAllRoom();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAllRoom();
  }, [token]);

  return (
    <>
      <div className="manager-room">
        <div className="content-ql">
          <h2>Danh Sách Rạp</h2>
          <div className="button-add-room">
            <button className="bnt-event" onClick={() => setShowCreate(true)}>
              <i>
                <ShopOutlined />
              </i>
              Thêm Rạp
            </button>
          </div>
        </div>
        {showCreate ? (
          <div className="add-room">
            <form>
              <div className="fmr">
                <div>
                  <h5>Tên rạp</h5>
                  <input
                    className="name-room"
                    onChange={(e) => handle(e)}
                    id="name"
                    value={room.name}
                  ></input>
                </div>
                <div>
                  <h5>Số lượng hàng</h5>
                  <input
                    className="row-room"
                    onChange={(e) => handle(e)}
                    id="row"
                    value={room.rowAmount}
                  ></input>
                </div>
                <div>
                  <h5>Số lượng ghế</h5>
                  <input
                    className="col-room"
                    onChange={(e) => handle(e)}
                    id="col"
                    value={room.columnAmount}
                  ></input>
                </div>
              </div>
              <button
                type="submit"
                className="submit"
                onClick={(e) => {
                  handleSubmit(e);
                  setShowCreate(false);
                }}
              >
                save
              </button>
            </form>
          </div>
        ) : null}

        <div className="list-room-ql">
          <div className="nlm">
            <div className="nlm-item">
              <p>STT</p>
            </div>
            <div className="nlm-item">
              <p> TÊN RẠP PHIM</p>
            </div>
            <div className="nlm-item">
              <p>TỔNG SỐ DÃY GHẾ</p>
            </div>
            <div className="nlm-item">
              <p>SỐ GHẾ TRÊN MỘT DÃY</p>
            </div>
          </div>
          {listRoom.map((room) => {
            return (
              <div className="content-lr" key={room._id}>
                <div className="lr-item">
                  <p>{listRoom.indexOf(room) + 1}</p>
                </div>
                <div className="lr-item">
                  <p>{room.name}</p>
                </div>
                <div className="lr-item">
                  <p>{room.rowAmount}</p>
                </div>
                <div className="lr-item">
                  <p>{room.columnAmount}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
