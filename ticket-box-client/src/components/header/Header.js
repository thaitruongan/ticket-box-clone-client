import React from "react";
import logo from "../../images/logo.png";
import { ReactComponent as Ve } from "../../images/ve.svg";
import { ReactComponent as Search } from "../../images/search.svg";
import "./Header.css";

const AppHeader = () => {
  return (
    <div className="header">
      <div className="left">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="search-bar">
          <div className="child">
            <Search />
            <input type="text" placeholder="Tìm kiếm" />
          </div>
        </div>
      </div>
      <div className="right">
        <div className="button-bar">
          <button>Tạo sự kiện</button>
        </div>
        <div className="src-img">
          <a href="/">
            <Ve />
          </a>
        </div>
        <div className="login">
          <a href="/">Đăng nhập | Đăng ký</a>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
