import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import MovieAPI from "../../api/movieAPI";
import { selectToken } from "../../app/userSlice";
import RoomAPI from "../../api/roomAPI";
import UserAPI from "../../api/userAPI";
import { Row, Col } from "antd";
import theater from "../../images/BHDStar_theater.jpg";
import "./Manager.css";

const Manager = () => {
  const [listMovies, setListMovies] = useState([]);
  const token = useSelector(selectToken);
  const [listRoom, setListRoom] = useState([]);
  const [listUSer, setListUser] = useState([]);

  useEffect(() => {
    let controller = new AbortController();
    const fetchListMovies = async () => {
      try {
        const response = await MovieAPI.getAll();
        setListMovies(response.data);
        controller = null;
      } catch (error) {
        console.log(error);
      }
    };
    fetchListMovies();

    return () => controller?.abort();
  }, []);

  useEffect(() => {
    let controller = new AbortController();
    const fetchAllRoom = async () => {
      try {
        const response = await RoomAPI.getAll(token);
        if (response.message === "successfully!") {
          setListRoom(response.data);
          controller = null;
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllRoom();

    return () => controller?.abort();
  }, [token]);

  useEffect(() => {
    let controller = new AbortController();
    const fetchAllUser = async () => {
      try {
        const response = await UserAPI.getAll(token);
        if (response.message === "successfully!") {
          setListUser(response.data);
          controller = null;
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllUser();

    return () => controller?.abort();
  }, [token]);

  return (
    <div className="manager">
      <Row>
        <Col>
          <div className="film">
            {listMovies.map((item) => {
              return (
                <div key={item._id} className="film-item">
                  <picture>
                    <img
                      src={`https://ticket-box-clone.herokuapp.com/image/${item.image}`}
                      alt="name"
                    />
                  </picture>
                  <p>{item.name}</p>
                </div>
              );
            })}
          </div>
        </Col>
        <Col>
          <div className="room">
            {listRoom.map((item) => {
              return (
                <div key={item._id} className="room-item">
                  <picture>
                    <img src={theater} alt="theater" />
                  </picture>
                  <p>{item.name}</p>;
                </div>
              );
            })}
          </div>
          <div className="user">
            {listUSer.map((item) => {
              return (
                <div key={item._id} className="user-item">
                  <p>{item.name}</p>
                </div>
              );
            })}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Manager;
