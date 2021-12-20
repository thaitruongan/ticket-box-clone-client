import React from "react";
import { useLocation, useNavigate } from "react-router";
import "./PopupTrailer.css";

const PopupTrailer = (props) => {
  const navigate = useNavigate();
  const { trigger, link, movieName, onClickClosePopup } = props;
  const state = useLocation();
  const detail = state.state;

  const handleClosePopup = () => {
    if (onClickClosePopup) {
      onClickClosePopup();
    }
  };
  const handlePropsNavigate = () => {
    navigate("/buy", { state: detail });
  };

  return trigger ? (
    <div className="PopupTrailer" onClick={() => handleClosePopup()}>
      <div className="popup-trailer-container">
        <iframe
          className="video trailer"
          title={movieName}
          width="560"
          height="349"
          allowFullScreen
          frameBorder="0"
          src={link}
        />
        <div className="buttons-handle">
          <button
            className="button-close-popup"
            onClick={() => handleClosePopup()}
          >
            Quay lại
          </button>
          <button
            className="button-buy-ticket"
            onClick={() => handlePropsNavigate()}
          >
            Mua vé
          </button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default PopupTrailer;
