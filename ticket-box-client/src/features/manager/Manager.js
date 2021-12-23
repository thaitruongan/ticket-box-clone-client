import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import MovieAPI from "../../api/movieAPI";
import { selectToken } from "../../app/userSlice";
import UserAPI from "../../api/userAPI";
import { Row, Col } from "antd";
import "./Manager.css";

const Manager = () => {
  const [listMovies, setListMovies] = useState([]);
  const token = useSelector(selectToken);
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
                      src={`https://ticket-box-bs.herokuapp.com/image/${item.image}`}
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
