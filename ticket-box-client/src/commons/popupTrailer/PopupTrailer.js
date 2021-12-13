import React from "react";
import './PopupTrailer.css';

const PopupTrailer = (props) => {
    const {trigger, link, movieName, onClickClosePopup} = props

    const handleClosePopup = () => {
        if (onClickClosePopup) {
            onClickClosePopup();
        }
    }

    return (trigger) ? (
        <div className="PopupTrailer" onClick={() => handleClosePopup()}>
            <div className="popup-trailer-container" >
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
                    <button className="button-close-popup" onClick={() => handleClosePopup()}>Quay lại</button>
                    <button className="button-buy-ticket">Mua vé</button>
                </div>
            </div>
        </div>
    ) : "";
}

export default PopupTrailer