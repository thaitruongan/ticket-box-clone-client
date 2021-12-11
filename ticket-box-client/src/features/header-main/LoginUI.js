import React from "react";
import "./LoginUI.css";
import avt from "../../images/avatar.png";

const LoginUI = () => {
  return (
    <div className="login-ui">
      <div className="img-avt">
        <img src={avt} alt="avt" />
      </div>
      <div className="user-name">
        <h6>Long Hồ</h6>
      </div>
    </div>
  );
};

export default LoginUI;
