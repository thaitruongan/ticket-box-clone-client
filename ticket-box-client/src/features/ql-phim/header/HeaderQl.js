import React from "react";
import logo from "../../../images/logo.png";
import "./HeaderQl.css";
import { Popover } from 'antd';
import { ReactComponent as Setting } from "../../../assets/svg/setting.svg";
import { ReactComponent as UserLogo } from "../../../assets/svg/user.svg";
import { ReactComponent as Signout } from "../../../assets/svg/signout.svg";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { selectCurrentUser, selectToken } from "../../../app/userSlice";

const HeaderQl = () => {
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
        <div className="user-login-box">
          <Popover className="user-login" content={popContent} >
            <img className="avatar-user-header" src={`https://ticket-box-clone.herokuapp.com/image/${currentUser.avatar}`} alt={currentUser.name} />
            {currentUser.name}            
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default HeaderQl;
