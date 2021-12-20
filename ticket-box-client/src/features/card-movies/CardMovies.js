import React, { useState, useEffect } from "react";
import "./CardMovies.css";
import { Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import MovieAPI from "../../api/movieAPI";

const CardMovies = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const fetchMovie = async () => {
    try {
      const response = await MovieAPI.getAll();
      setMovies(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRuningTime = (time) => {
    const H = Math.floor(time / 60);
    const M = time % 60;

    return `${H} giờ ${M} phút`;
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <div className="card">
      <Row gutter={20}>
        {movies.map((movie) => {
          return (
            <Col key={movie._id} className="gutter-row" span={6}>
              <div className="style-card">
                <div className="card-movies">
                  <div className="card-movies_cover">
                    <picture>
                      <img
                        alt={movie.name}
                        src="https://images.tkbcdn.com/2/420/600/poster/e491c1fe-51a5-11ec-8fb8-0242ac110002@webp"//{`https://ticket-box-clone.herokuapp.com/image/${movie.image}`}
                      />
                    </picture>
                    <div className="bnt-img">
                      <div className="bnt-xem">
                        <button onClick={(e) => {
                            if (e.target.className === "muave") {
                              navigate("/buy", { state: movie });
                            } else {
                              navigate("/detail-movies", { state: movie });
                            }
                          }} className="xemchitiet">Xem chi tiết</button>
                      </div>
                      <div className="btn-mua">
                        <button
                          onClick={(e) => {
                            if (e.target.className === "muave") {
                              navigate("/buy", { state: movie });
                            } else {
                              navigate("/detail-movies", { state: movie });
                            }
                          }}
                          className="muave"
                        >
                          Mua vé
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-movies_body">
                    <div className="title">
                      <h4>{movie.name}</h4>
                    </div>
                    <div className="description">
                      <h6>{movie.name}</h6>
                    </div>
                    <div className="info">
                      <span>{movie.label}</span>
                      <span>{handleRuningTime(movie.runningTime)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          );
        })}
        {/* <Col className="gutter-row" span={6}>
          <div className="style">
            <div className="card-movies">
              <div className="card-movies_cover">
                <img
                  alt="example"
                  src="https://images.tkbcdn.com/2/420/600/poster/e491c1fe-51a5-11ec-8fb8-0242ac110002@webp"
                />
                <div className="bnt-img">
                  <div className="bnt-xem">
                    <button className="xemchitiet">Xem chi tiết</button>
                  </div>
                  <div className="btn-mua">
                    <button onClick={onClick} className="muave">
                      Mua vé
                    </button>
                  </div>
                </div>
              </div>
              <div className="card-movies_body">
                <div className="title">
                  <h4>THỎ PETTER 2</h4>
                </div>
                <div className="description">
                  <h6>THỎ PETTER 2</h6>
                </div>
                <div className="info">
                  <span>P</span>
                  <span>1 giờ 40 phút</span>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div className="style">
            <div className="card-movies">
              <div className="card-movies_cover">
                <img
                  alt="example"
                  src="https://images.tkbcdn.com/2/420/600/poster/c0f87bbe-51a5-11ec-8fb8-0242ac110002@webp"
                />
                <div className="bnt-img">
                  <div className="bnt-xem">
                    <button className="xemchitiet">Xem chi tiết</button>
                  </div>
                  <div className="btn-mua">
                    <button onClick={onClick} className="muave">
                      Mua vé
                    </button>
                  </div>
                </div>
              </div>
              <div className="card-movies_body">
                <div className="title">
                  <h4>ENCATO: VÙNG ĐẤT THẦN KỲ</h4>
                </div>
                <div className="description">
                  <h6>ENCATO: VÙNG ĐẤT THẦN KỲ</h6>
                </div>
                <div className="info">
                  <span>P</span>
                  <span>1 giờ 40 phút</span>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div className="style">
            <div className="card-movies">
              <div className="card-movies_cover">
                <img
                  alt="example"
                  src="https://images.tkbcdn.com/2/420/600/poster/6a5f0e44-51a5-11ec-8fb8-0242ac110002@webp"
                />
                <div className="bnt-img">
                  <div className="bnt-xem">
                    <button className="xemchitiet">Xem chi tiết</button>
                  </div>
                  <div className="btn-mua">
                    <button onClick={onClick} className="muave">
                      Mua vé
                    </button>
                  </div>
                </div>
              </div>
              <div className="card-movies_body">
                <div className="title">
                  <h4>SUICIDE FOREST VILLAGES: THỤ HẢI - RỪNG TỬ KHÍ</h4>
                </div>
                <div className="description">
                  <h6>SUICIDE FOREST VILLAGES: THỤ HẢI - RỪNG TỬ KHÍ</h6>
                </div>
                <div className="info">
                  <span>P</span>
                  <span>1 giờ 40 phút</span>
                </div>
              </div>
            </div>
          </div>
        </Col> */}
      </Row>
    </div>
  );
};

export default CardMovies;
