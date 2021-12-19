import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import MovieAPI from "../../api/movieAPI";
import { selectCurrentUser, selectToken } from "../../app/userSlice";
import RoomAPI from "../../api/roomAPI";
import UserAPI from "../../api/userAPI";
import { Row, Col } from "antd";
import "./Manager.css";

const Manager = () => {
  const [listMovies, setListMovies] = useState([]);
  const token = useSelector(selectToken);
  const [listRoom, setListRoom] = useState([]);
  const [listUSer, setListUser] = useState([]);
  console.log(token);

  useEffect(() => {
    const fetchListMovies = async () => {
      try {
        const response = await MovieAPI.getAll();
        setListMovies(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchListMovies();
  }, []);

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

  useEffect(() => {
    const fetchAllUser = async () => {
      try {
        const response = await UserAPI.getAll(token);
        if (response.message === "successfully!") {
          console.log(response.data);
          setListUser(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllUser();
  }, [token]);

  return (
    <div className="manager">
      <Row>
        <Col>
          <div className="film">
            {listMovies.map((item) => {
              return (
                <div className="film-item">
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
              return <p>{item.name}</p>;
            })}
          </div>
          <div className="user">
            {listUSer.map((item) => {
              return <p>{item.name}</p>;
            })}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Manager;
