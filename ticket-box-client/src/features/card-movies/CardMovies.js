import React, { useState, useEffect } from "react";
import "./CardMovies.css";
import { Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CardMovies = () => {
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await axios.get(
      "https://ticket-box-clone.herokuapp.com/api/movie"
    );
    setMovies(response.data.data);
  };
  useEffect(() => {
    getMovies();
  }, []);

  const navigate = useNavigate();
  const onClick = () => {
    navigate("/buy");
  };
  return (
    <div className="card">
      <Row gutter={20}>
        {movies.map((item) => {
          return (
            <Col className="gutter-row" span={6}>
              <div className="style-card">
                <div className="card-movies">
                  <div className="card-movies_cover">
                    <img alt={item.name} src={item.image} />
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
                      <h4>{item.name}</h4>
                    </div>
                    <div className="description">
                      <h6>{item.name}</h6>
                    </div>
                    <div className="info">
                      <span>{item.label}</span>
                      <span>1 giờ 40 phút</span>
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
