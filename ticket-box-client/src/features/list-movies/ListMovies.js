import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ListMovies.css";

const ListMovies = () => {
  const [listMovie, setlistMovie] = useState([]);
  useEffect(() => {
    getListMovie();
  }, []);
  const getListMovie = async () => {
    const response = await axios.get(
      "https://ticket-box-clone.herokuapp.com/api/movie"
    );
    setlistMovie(response.data.data);
  };
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/buy");
  };
  return (
    <div className="main-list-movies">
      <div className="list-movies">
        {listMovie.map((item) => {
          return (
            <div className="list-style-card">
              <div className="list-card-movies">
                <a href="/buy">
                  <div className="list-card-movies_cover">
                    <img alt={item.name} src={item.image} />
                  </div>
                  <div className="list-card-movies_body">
                    <div className="list-title">
                      <h4>{item.name}</h4>
                    </div>
                    <div className="list-description">
                      <h6>{item.name}</h6>
                    </div>
                    <div className="list-info">
                      <span>{item.label}</span>
                      <span>1 giờ 40 phút</span>
                    </div>
                  </div>

                  <button onClick={onClick} className="list-muave">
                    Mua vé
                  </button>
                </a>
              </div>
            </div>
          );
        })}

        {/* <div className="list-style-card">
          <div className="list-card-movies">
            <a href="/buy">
              <div className="list-card-movies_cover">
                <img
                  alt="example"
                  src="https://images.tkbcdn.com/2/420/600/poster/8106969d-51a6-11ec-8fb8-0242ac110002@webp"
                />
              </div>
              <div className="list-card-movies_body">
                <div className="list-title">
                  <h4>MORBIUS</h4>
                </div>
                <div className="list-description">
                  <h6>MORBIUS</h6>
                </div>
                <div className="list-info">
                  <span>P</span>
                  <span>1 giờ 40 phút</span>
                </div>
              </div>

              <button onClick={onClick} className="list-muave">
                Mua vé
              </button>
            </a>
          </div>
        </div>

        <div className="list-style-card">
          <div className="list-card-movies">
            <a href="/buy">
              <div className="list-card-movies_cover">
                <img
                  alt="example"
                  src="https://images.tkbcdn.com/2/420/600/poster/8106969d-51a6-11ec-8fb8-0242ac110002@webp"
                />
              </div>
              <div className="list-card-movies_body">
                <div className="list-title">
                  <h4>MORBIUS</h4>
                </div>
                <div className="list-description">
                  <h6>MORBIUS</h6>
                </div>
                <div className="list-info">
                  <span>P</span>
                  <span>1 giờ 40 phút</span>
                </div>
              </div>

              <button onClick={onClick} className="list-muave">
                Mua vé
              </button>
            </a>
          </div>
        </div>

        <div className="list-style-card">
          <div className="list-card-movies">
            <a href="/buy">
              <div className="list-card-movies_cover">
                <img
                  alt="example"
                  src="https://images.tkbcdn.com/2/420/600/poster/8106969d-51a6-11ec-8fb8-0242ac110002@webp"
                />
              </div>
              <div className="list-card-movies_body">
                <div className="list-title">
                  <h4>MORBIUS</h4>
                </div>
                <div className="list-description">
                  <h6>MORBIUS</h6>
                </div>
                <div className="list-info">
                  <span>P</span>
                  <span>1 giờ 40 phút</span>
                </div>
              </div>

              <button onClick={onClick} className="list-muave">
                Mua vé
              </button>
            </a>
          </div>
        </div>*/}
      </div>
    </div>
  );
};

export default ListMovies;
