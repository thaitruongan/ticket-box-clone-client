import React from "react";
import logo from "../../images/logo.png";
import { ReactComponent as Ve } from "../../images/ve.svg";
import { ReactComponent as Search } from "../../images/search.svg";
import "./Header.css";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { selectCurrentUser, selectToken } from "../../app/userSlice";
import { Popover } from 'antd';
import { ReactComponent as Setting } from "../../assets/svg/setting.svg";
import { ReactComponent as UserLogo } from "../../assets/svg/user.svg";
import { ReactComponent as Signout } from "../../assets/svg/signout.svg";

const AppHeader = () => {
  const navigate = useNavigate();
  const token = useSelector(selectToken);
  const currentUser = useSelector(selectCurrentUser);

  const handlePermission = () => {
    if (token) {
      if(currentUser.permission.find(per => per === "61b9da0a1640b2f05aef2bf4")){
        return "flex"
      }else{
        return "none"
      }
    }
  }

  const popContent = (
    <div className="popover-user-option">
      <div className="header-option update-profile" onClick={() => navigate("/profile")} >
        <UserLogo/>
        Chỉnh sửa hồ sơ
      </div>

      <div className="header-option manager-header" onClick={() => navigate("/admin")} style={{display: handlePermission()}} >
        <Setting />
        Quản lý
      </div>

      <div className="header-option signout-header" onClick={() => navigate("/")} >
        <Signout/>  
        Thoát
      </div>
    </div>
  );

  const handleToken = () => {
    if (token) {
      return (
        <div className="user-login-box">
          <Popover className="user-login" content={popContent} >
            <img className="avatar-user-header" src={`https://ticket-box-clone.herokuapp.com/image/${currentUser.avatar}`} alt={currentUser.name} />
            {currentUser.name}            
          </Popover>
        </div>
      )
    }else{
      return (
        <div className="login">
          <a onClick={() => {navigate("/login")}} >Đăng nhập | Đăng ký</a>
        </div>
      )
    }
  }

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
          <a href="/">
            <Ve />
          </a>
        </div>
        {handleToken()}
      </div>
    </div>
  );
};

export default AppHeader;
