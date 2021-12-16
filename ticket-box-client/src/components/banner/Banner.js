import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BannerAPI from "../../api/bannerAPI";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./Banner.css";

const breakPoints = [{ width: 2500, itemsToShow: 1 }];

const AppBanner = () => {
  const [banner, setBanner] = useState([]);
  const navigate = useNavigate();

  const fetchBanner = async () => {
    try {
      const response = await BannerAPI.getAll();
      setBanner(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBanner();
  }, []);

  return (
    <div className="banner">
      <Carousel breakPoints={breakPoints}>
        {banner.map((item) => {
          return (
            <Item className="item-banner-img">
              <a
                onClick={() => {
                  navigate("/detail-movies", { state: item });
                }}
              >
                <picture className="image-banner">
                  <img
                    src={`https://ticket-box-clone.herokuapp.com/image/${item.image}`}
                    alt={item.name}
                  />
                </picture>
              </a>
            </Item>
          );
        })}

        {/* <Item className="item-banner-img">
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
        </Item> */}
      </Carousel>
    </div>
  );
};

export default AppBanner;
