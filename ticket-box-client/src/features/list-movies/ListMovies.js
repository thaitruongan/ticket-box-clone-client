import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieAPI from "../../api/movieAPI";
import "./ListMovies.css";

const ListMovies = () => {
  const [listMovie, setListMovie] = useState([]);
  const navigate = useNavigate();

  const fetchMovieList = async () => {
    try {
      const response = await MovieAPI.getAll();
      setListMovie(response.data);
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
    fetchMovieList();
  }, []);

  return (
    <div className="main-list-movies">
      <div className="list-movies">
        {listMovie.map((movie) => {
          return (
            <div key={movie._id} className="list-style-card">
              <div className="list-card-movies">
                <div className="lsmec"
                  onClick={(e) => {
                    if (e.target.className === "list-muave") {
                      navigate("/buy", { state: movie });
                    } else {
                      navigate("/detail-movies", { state: movie });
                    }
                  }}
                >
                  <div className="list-card-movies_cover">
                    <picture>
                      <img
                        src={`https://ticket-box-clone.herokuapp.com/image/${movie.image}`}
                        alt={movie.name}
                      />
                    </picture>
                  </div>
                  <div className="list-card-movies_body">
                    <div className="list-title">
                      <h4>{movie.name}</h4>
                    </div>
                    <div className="list-description">
                      <h6>{movie.name}</h6>
                    </div>
                    <div className="list-info">
                      <span>{movie.label}</span>
                      <span>{handleRuningTime(movie.runningTime)}</span>
                    </div>
                  </div>

                  <button
                    className="list-muave"
                    onClick={(e) => {
                      if (e.target.className === "list-muave") {
                        navigate("/buy", { state: movie });
                      } else {
                        navigate("/detail-movies", { state: movie });
                      }
                    }}
                  >
                    Mua vé
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListMovies;
