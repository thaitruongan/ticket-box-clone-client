import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import RoomAPI from "../../api/roomAPI";
import { selectToken } from "../../app/userSlice";
import { ShopOutlined } from "@ant-design/icons";
import "./ManagerTheater.css";

export const ManagerTheater = () => {
  const token = useSelector(selectToken);
  const [showCreate, setShowCreate] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [listRoom, setListRoom] = useState([]);
  const [roomSelected, setRoomSelected] = useState({});
  const [activeId, setActiveId] = useState("");
  const [room, setRoom] = useState({
    name: "",
    row: "",
    col: "",
  });
  console.log(token);
  console.log(roomSelected._id);
  const [roomUpdate, setRoomUpdate] = useState({
    name: !roomSelected.name ? "" : roomSelected.name,
    row: !roomSelected.rowAmount ? "" : roomSelected.rowAmount,
    col: !roomSelected.columnAmount ? "" : roomSelected.columnAmount,
  });

  const handleSelectRoom = (u) => {
    setRoomSelected(u);
    setActiveId(u._id);
  };

  const handleSelectStyle = (u) => {
    if (roomSelected) {
      if (activeId !== u._id) {
        return { backgroundColor: "#f0f0f0", color: "#000000" };
      } else {
        return {
          backgroundColor: "#2DC275",
          color: "#ffffff",
          fontWeight: "bold",
        };
      }
    }
  };

  const handle = (e) => {
    const newRoom = { ...room };
    newRoom[e.target.id] = e.target.value;
    setRoom(newRoom);
  };

  const handleEdit = (e) => {
    const roomEdit = { ...roomUpdate };
    roomEdit[e.target.id] = e.target.value;
    setRoomUpdate(roomEdit);
  };

  const fetchAllRoom = useCallback(async () => {
    try {
      const response = await RoomAPI.getAll(token);
      setListRoom(response.data);
    } catch (error) {
      console.log(error);
    }
  }, [token]);

  const handleSubmit = async () => {
    try {
      await RoomAPI.addRoom(token, room.name, room.row, room.col);
      fetchAllRoom();
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmitEdit = async () => {
    try {
      await RoomAPI.editRoom(
        token,
        roomSelected._id,
        roomUpdate.name,
        roomUpdate.row,
        roomUpdate.col
      );
      fetchAllRoom();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAllRoom();
  }, [fetchAllRoom]);

  return (
    <>
      <div className="manager-room">
        <div className="content-ql">
          <h2>Danh Sách Rạp</h2>
          <div className="bnt-e_r">
            <div className="button-add-room">
              <button className="bnt-event" onClick={() => setShowCreate(true)}>
                <i>
                  <ShopOutlined />
                </i>
                Thêm Rạp
              </button>
            </div>

            <div className="button-update-room">
              <button className="bnt-event" onClick={() => setShowEdit(true)}>
                <i>
                  <ShopOutlined />
                </i>
                Sửa Rạp
              </button>
            </div>
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
                    value={room.row}
                  ></input>
                </div>
                <div>
                  <h5>Số lượng ghế</h5>
                  <input
                    className="col-room"
                    onChange={(e) => handle(e)}
                    id="col"
                    value={room.col}
                  ></input>
                </div>
              </div>
              <button
                type="submit"
                className="submit"
                onClick={(e) => {
                  handleSubmit();
                  setShowCreate(false);
                }}
              >
                save
              </button>
            </form>
          </div>
        ) : null}

        {showEdit ? (
          <div className="add-room">
            <form>
              <div className="fmr">
                <div>
                  <h5>Tên rạp</h5>
                  <input
                    className="name-room"
                    onChange={(e) => handleEdit(e)}
                    id="name"
                    value={roomUpdate.name}
                  ></input>
                </div>
                <div>
                  <h5>Số lượng hàng</h5>
                  <input
                    className="row-room"
                    onChange={(e) => handleEdit(e)}
                    id="row"
                    value={roomUpdate.row}
                  ></input>
                </div>
                <div>
                  <h5>Số lượng ghế</h5>
                  <input
                    className="col-room"
                    onChange={(e) => handleEdit(e)}
                    id="col"
                    value={roomUpdate.col}
                  ></input>
                </div>
              </div>
              <button
                type="submit"
                className="submit"
                onClick={() => {
                  handleSubmitEdit();
                  setShowEdit(false);
                }}
              >
                save
              </button>
            </form>
          </div>
        ) : null}
        <div className="ctn-nlm">
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
        </div>
        <div className="list-room-ql">
          {listRoom.map((room) => {
            return (
              <div
                key={room._id}
                className="content-lr"
                style={handleSelectStyle(room)}
                onClick={() => handleSelectRoom(room)}
              >
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
