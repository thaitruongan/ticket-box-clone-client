import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";
import { ReactComponent as Ve } from "../../images/ve.svg";
import { ReactComponent as Search } from "../../images/search.svg";
import "./Header.css";

const AppHeader = () => {
  const navigate = useNavigate();
  const homepage = () => {
    navigate("/");
  };
  const loginpage = () => {
    navigate("/login");
  };
  return (
    <div className="header">
      <div className="left">
        <div className="logo">
          <a onClick={homepage}>
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="search-bar">
          <div className="child">
            <Search className="search" />
            <input type="text" placeholder="Tìm kiếm" />
          </div>
        </div>
      </div>
      <div className="right">
        <div className="button-bar">
          <button>Tạo sự kiện</button>
        </div>
        <div className="src-img">
          <a onClick={homepage}>
            <Ve />
          </a>
        </div>
        <div className="login">
          <a onClick={loginpage}>Đăng nhập | Đăng ký</a>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
