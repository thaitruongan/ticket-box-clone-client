import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieAPI from "../../api/movieAPI";
import Carousel from "react-elastic-carousel";
import PopupTrailer from "../../commons/popupTrailer/PopupTrailer";
import Item from "./ItemMovie";
import "./BannerMovie.css";

const breakPoints = [{ width: 2500, itemsToShow: 1 }];

const AppBannerMovie = () => {
  const [bannerMovie, setBannerMovie] = useState([]);
  const [popup, setPopup] = useState(false);
  const [trailerLink, setTrailerLink] = useState("");
  const navigate = useNavigate();

  const handlePopup = (link) => {
    setPopup(!popup);
    setTrailerLink(link);
  };

  const fetchBannerMovie = async () => {
    try {
      const response = await MovieAPI.getAll();
      setBannerMovie(response.data);
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
    fetchBannerMovie();
  }, []);

  return (
    <div className="banner-movie">
      <Carousel
        enableAutoPlay
        autoPlaySpeed={2500}
        breakPoints={breakPoints}
        className="carousel"
      >
        {bannerMovie.map((movie) => {
          return (
            <div key={movie._id} className="item-banner">
              <Item className="item-banner-movie-img">
                <div className="banner-movies_cover">
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      navigate("/detail-movies", { state: movie });
                    }}
                  >
                    <picture>
                      <img
                        src={`https://ticket-box-bs.herokuapp.com/image/${movie.image}`}
                        alt={movie.name}
                      />
                    </picture>
                  </div>
                </div>
                <div className="banner-movies_info">
                  <div
                    className="banner-title"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      navigate("/detail-movies", { state: movie });
                    }}
                  >
                    <h2>{movie.name}</h2>
                  </div>
                  <div className="banner-time">
                    <span>{movie.label}</span>
                    <span>{handleRuningTime(movie.runningTime)}</span>
                  </div>
                  <div className="banner-description">
                    <h6>{movie.description}</h6>
                    <div
                      className="bnt-bnds"
                      onClick={() => {
                        navigate("/detail-movies", { state: movie });
                      }}
                    >
                      Xem thêm
                    </div>
                  </div>
                  <div className="button-banner">
                    <button
                      className="button-muave-banner"
                      onClick={() => {
                        navigate("/buy", { state: movie });
                      }}
                    >
                      Mua vé
                    </button>
                    <button
                      className="button-play-trailer"
                      onClick={() => handlePopup(movie.trailer)}
                    >
                      Xem trailer
                    </button>
                  </div>
                </div>
              </Item>
              <PopupTrailer
                trigger={popup}
                link={trailerLink}
                movieName={movie.name}
                onClickClosePopup={handlePopup}
              />
            </div>
          );
        })}

        {/* <Item className="item-banner-movie-img">
          <img
            src="https://images.tkbcdn.com/1/780/300/Upload/eventcover/2021/12/11/44B240.jpg"
            alt="banner-movie"
          />
        </Item>
        <Item className="item-banner-movie-img">
          <img
            src="https://images.tkbcdn.com/1/780/300/Upload/eventcover/2021/11/06/12B6A3.jpg"
            alt="banner-movie"
          />
        </Item>
        <Item className="item-banner-movie-img">
          <img
            src="https://images.tkbcdn.com/1/780/300/Upload/eventcover/2021/11/09/0EC6D8.jpg"
            alt="banner-movie"
          />
        </Item>
        <Item className="item-banner-movie-img">
          <img
            src="https://images.tkbcdn.com/1/780/300/Upload/eventcover/2021/12/09/5C3CC2.jpg"
            alt="banner-movie"
          />
        </Item> */}
      </Carousel>
    </div>
  );
};

export default AppBannerMovie;
