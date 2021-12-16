import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./Banner.css";

const breakPoints = [
  { width: 2500, itemsToShow: 1 },
];

const AppBanner = () => {
  return (
    <div className="banner">
      <Carousel breakPoints={breakPoints}>
        <Item className="item-banner-img">
          <img
            src="https://images.tkbcdn.com/1/780/300/Upload/eventcover/2021/12/13/D0A090.jpg"
            alt="banner"
          />
        </Item>
        <Item className="item-banner-img">
          <img
            src="https://images.tkbcdn.com/1/780/300/Upload/eventcover/2021/12/11/44B240.jpg"
            alt="banner"
          />
        </Item>
        <Item className="item-banner-img">
          <img
            src="https://images.tkbcdn.com/1/780/300/Upload/eventcover/2021/11/06/12B6A3.jpg"
            alt="banner"
          />
        </Item>
        <Item className="item-banner-img">
          <img
            src="https://images.tkbcdn.com/1/780/300/Upload/eventcover/2021/11/09/0EC6D8.jpg"
            alt="banner"
          />
        </Item>
        <Item className="item-banner-img">
          <img
            src="https://images.tkbcdn.com/1/780/300/Upload/eventcover/2021/12/09/5C3CC2.jpg"
            alt="banner"
          />
        </Item>
      </Carousel>
    </div>
  );
};

export default AppBanner;
