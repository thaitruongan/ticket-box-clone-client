import React from "react";
import { useNavigate } from "react-router-dom";
import "./ListMovies.css";

const ListMovies = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/buy");
  };
  return (
    <div className="main-list-movies">
      <div className="list-movies">
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
        </div>
      </div>
    </div>
  );
};

export default ListMovies;
