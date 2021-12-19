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

  useEffect(() => {
    const fetchAllRoom = async () => {
      try {
        const response = await RoomAPI.getAll(token);
        if (response.message === "successfully!") {
          console.log(response.data);
          setListRoom(response.data);
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
                    onChange=""
                    id="name"
                    value=""
                  ></input>
                </div>
                <div>
                  <h5>Số lượng hàng</h5>
                  <input
                    className="row-room"
                    onChange=""
                    id="row"
                    value=""
                  ></input>
                </div>
                <div>
                  <h5>Số lượng cột</h5>
                  <input
                    className="col-room"
                    onChange=""
                    id="col"
                    value=""
                  ></input>
                </div>
              </div>
              <button className="submit" onClick={() => setShow(false)}>
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
          <div className="content-lr">
            {listRoom.map((item, index) => {
              return (
                <>
                  <div className="lr-item">
                    <p>{index + 1}</p>
                  </div>
                  <div className="lr-item">
                    <p>{item.name}</p>
                  </div>
                  <div className="lr-item">
                    <p>{item.rowAmount}</p>
                  </div>
                  <div className="lr-item">
                    <p>{item.columnAmount}</p>
                  </div>
                </>
              );
            })}
            <div className="lr-item">
              <p>1</p>
            </div>
            <div className="lr-item">
              <p>CineStar Num Bếu</p>
            </div>
            <div className="lr-item">
              <p>5 hàng</p>
            </div>
            <div className="lr-item">
              <p>10 cột</p>
            </div>

            <div className="lr-item">
              <p>2</p>
            </div>
            <div className="lr-item">
              <p>CineStar Num Bếu</p>
            </div>
            <div className="lr-item">
              <p>5 hàng</p>
            </div>
            <div className="lr-item">
              <p>10 cột</p>
            </div>

            <div className="lr-item">
              <p>3</p>
            </div>
            <div className="lr-item">
              <p>CineStar Num Bếu</p>
            </div>
            <div className="lr-item">
              <p>5 hàng</p>
            </div>
            <div className="lr-item">
              <p>10 cột</p>
            </div>

            <div className="lr-item">
              <p>4</p>
            </div>
            <div className="lr-item">
              <p>CineStar Num Bếu</p>
            </div>
            <div className="lr-item">
              <p>5 hàng</p>
            </div>
            <div className="lr-item">
              <p>10 cột</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
