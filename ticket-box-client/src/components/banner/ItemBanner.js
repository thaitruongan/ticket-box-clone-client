import React from "react";


function CarouselItem(props) {
  const { detailMovie, isHero } = props;
  const urlHinhAnh = "abc";

  if (!detailMovie) return null;
  return (
    <div className="carousel__item">
      <div className="carousel__img">
        <img className="img__bg" src={urlHinhAnh} alt={detailMovie.tenPhim} />
      </div>
      {/* extra content on detail page */}
      {isHero && <div className="blur__overlay" />}
      {/* end extra content on detail page */}
      <div className="playBtn__overlay">
        <a
          href={`play-trailer-${detailMovie.maPhim || "phim"}-${
            detailMovie.biDanh
          }`}
          data-toggle="modal"
          data-target="#movieTrailer"
          className="play__link"
          onClick={() => props.getMovieDetail(detailMovie)}
        >
          <img src="/" alt="play trailer" />
        </a>
      </div>
    </div>
  );
}

export default CarouselItem;
