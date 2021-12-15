import React, { useMemo } from "react";

export const ItemBanner = (props) => {
  const { detailMovie } = props;
  const urlHinhAnh = useMemo(() => detailMovie.hinhAnh, [detailMovie.hinhAnh]);

  if (!detailMovie) return null;
  return (
    <div className="carousel__item">
      <a
        href={`play-trailer-${detailMovie.maPhim || "phim"}-${
          detailMovie.biDanh
        }`}
        data-toggle="modal"
        data-target="#movieTrailer"
        className="play__link"
        onClick={() => props.getMovieDetail(detailMovie)}
      >
        <div className="carousel__img">
          <img className="img__bg" src={urlHinhAnh} alt={detailMovie.tenPhim} />
        </div>
      </a>
    </div>
  );
};
