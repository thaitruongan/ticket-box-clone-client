import React from "react";
import { Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import "../card-movies/CardMovies.css";

const ListMovies = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/buy");
  };
  return (
    <div className="list-movies">
      <Row gutter={70}>
        <Col className="gutter-row" span={6}>
          <div className="style">
            <div className="card-movies">
              <div className="card-movies_cover">
                <img
                  alt="example"
                  src="https://images.tkbcdn.com/2/420/600/poster/8106969d-51a6-11ec-8fb8-0242ac110002@webp"
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
                  <h3>MORBIUS</h3>
                </div>
                <div className="description">
                  <h6>MORBIUS</h6>
                </div>
                <div className="info">
                  <p>P | 1 giờ 40 phút</p>
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
                  src="https://images.tkbcdn.com/2/420/600/poster/e491c1fe-51a5-11ec-8fb8-0242ac110002@webp"
                />
                <div className="bnt-img">
                  <div className="bnt-xem">
                    <button className="xemchitiet">Xem chi tiết</button>
                  </div>
                  <div className="btn-mua">
                    <button className="muave">Mua vé</button>
                  </div>
                </div>
              </div>
              <div className="card-movies_body">
                <div className="title">
                  <h3>THỎ PETTER 2</h3>
                </div>
                <div className="description">
                  <h6>THỎ PETTER 2</h6>
                </div>
                <div className="info">
                  <p>P | 1 gio 40 phut</p>
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
                    <button className="muave">Mua vé</button>
                  </div>
                </div>
              </div>
              <div className="card-movies_body">
                <div className="title">
                  <h3>ENCATO: VÙNG ĐẤT THẦN KỲ</h3>
                </div>
                <div className="description">
                  <h6>ENCATO: VÙNG ĐẤT THẦN KỲ</h6>
                </div>
                <div className="info">
                  <p>P | 1 gio 40 phut</p>
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
                    <button className="muave">Mua vé</button>
                  </div>
                </div>
              </div>
              <div className="card-movies_body">
                <div className="title">
                  <h3>SUICIDE FOREST VILLAGES: THỤ HẢI - RỪNG TỬ KHÍ</h3>
                </div>
                <div className="description">
                  <h6>SUICIDE FOREST VILLAGES: THỤ HẢI - RỪNG TỬ KHÍ</h6>
                </div>
                <div className="info">
                  <p>P | 1 gio 40 phut</p>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ListMovies;
