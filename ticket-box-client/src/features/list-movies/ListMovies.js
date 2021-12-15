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
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleRuningTime = (time) => {
    const H = Math.floor(time / 60);
    const M = time % 60;

    return `${H} giờ ${M} phút`
  }

  const handleClickListCardMovie = (cln) => {
    
  }

  useEffect(() => {
    fetchMovieList();
  }, [])

  return (
    <div className="main-list-movies">
      <div className="list-movies">

        {listMovie.map(movie => {
          return (
            <div className="list-style-card">
              <div className="list-card-movies">
                <a onClick={e => {
                  if(e.target.className === "list-muave"){
                    navigate("/buy", {state: movie});
                  }else{
                    navigate("/detail-movies", {state: movie})
                  }
                }}
                >
                  <div className="list-card-movies_cover">
                    <picture>
                      <source srcSet={`/image/${movie.image}`} type="image/webp" />
                      <img src={`/image/${movie.image}`} alt={movie.name} />
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

                  <button onClick={e => {
                    if(e.target.className === "list-muave"){
                      navigate("/buy", {state: movie});
                    }else{
                      navigate("/detail-movies", {state: movie})
                    }
                  }}
                    className="list-muave"
                  >
                    Mua vé
                  </button>
                </a>
              </div>
            </div>
          )
        })}
        
      </div>
    </div>
  );
};

export default ListMovies;
