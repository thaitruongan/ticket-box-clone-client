import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./ItemMovie";
import "./BannerMovie.css";

const breakPoints = [{ width: 2500, itemsToShow: 1 }];

const AppBannerMovie = () => {
  return (
    <div className="banner-movie">
      <Carousel breakPoints={breakPoints} className="carousel">
        <Item className="item-banner-movie-img">
          <img
            src="https://images.tkbcdn.com/1/780/300/Upload/eventcover/2021/12/13/D0A090.jpg"
            alt="banner-movie"
          />
        </Item>
        <Item className="item-banner-movie-img">
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
        </Item>
      </Carousel>
    </div>
  );
};

export default AppBannerMovie;
