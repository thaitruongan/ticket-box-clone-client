import React, { useState, useEffect } from "react";
import MovieAPI from "../../api/movieAPI";
import { Row, Col } from "antd";
import "./Manager.css";

const Manager = () => {
  const [listMovies, setListMovies] = useState([]);
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

  return (
    <div className="manager">
      <Row>
        <Col>
          <div className="film">
            {listMovies.map((item) => {
              return (
                <>
                  <picture>
                    <img
                      src={`https://ticket-box-clone.herokuapp.com/image/${item.image}`}
                      alt="name"
                    />
                  </picture>
                  <p>{item.name}</p>
                </>
              );
            })}
          </div>
        </Col>
        <Col>
          <div className="room">
            <p>name</p>
          </div>
          <div className="user">
            <p>name</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Manager;
