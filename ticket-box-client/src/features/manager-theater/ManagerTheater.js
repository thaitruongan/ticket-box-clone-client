import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import RoomAPI from "../../api/roomAPI";
import { selectToken } from "../../app/userSlice";
import { ShopOutlined } from "@ant-design/icons";
import "./ManagerTheater.css";

export const ManagerTheater = () => {
  const token = useSelector(selectToken);
  const [show, setShow] = useState(false);
  const [listRoom, setListRoom] = useState([]);
  const [room, setRoom] = useState({
    name: "",
    row: "",
    col: ""
  })

  const handle = (e) => {
    const newRoom = { ...room };
    newRoom[e.target.id] = e.target.value;
    setRoom(newRoom);
  };

  const handleSubmit = async() =>{
    try{
      const response = await RoomAPI.addRoom(token,room.name,room.row,room.col)
      if (response.data) {
        setListRoom([...listRoom, response.data.saveRoom]) 
      }
    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    const fetchAllRoom = async () => {
      try {
        const response = await RoomAPI.getAll(token);
        if (response.data) {
          setListRoom(response.data)
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllRoom();
  }, [token]);

  return (
    <>
      <div className="manager-room">
        <div className="content-ql">
          <h2>Danh Sách Rạp</h2>

          <div className="button-add-room">
            <button className="bnt-event" onClick={() => setShow(true)}>
              <i>
                <ShopOutlined />
              </i>
              Thêm Rạp
            </button>
          </div>
        </div>
        {show ? (
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
              <button type="submit" className="submit" onClick={(e)=>{                
                handleSubmit(e)
                setShow(false);
                }}>
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
          {
            listRoom.map((room)=>{
                return(
                  <div key={room._id} className="content-lr">
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
                )
            })
          }          
        </div>
      </div>
    </>
  );
};
