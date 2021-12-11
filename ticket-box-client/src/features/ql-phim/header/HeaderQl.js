import React from "react";
import logo from "../../../images/logo.png";
import avt from "../../../images/avatar.png";
import "./HeaderQl.css";

const HeaderQl = () => {
  return (
    <div className="header-ql">
      <div className="left">
        <div className="logo-header">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
      </div>
      <div className="right">
        <div className="img-avt">
          <img src={avt} alt="avt" />
        </div>
        <div className="user-name">
          <h6>Long Hồ</h6>
        </div>
      </div>
    </div>
  );
};

export default HeaderQl;
