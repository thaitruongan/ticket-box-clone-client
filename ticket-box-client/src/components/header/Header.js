import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../images/logo.png";
import { ReactComponent as Ve } from "../../images/ve.svg";
import { ReactComponent as Search } from "../../images/search.svg";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { removeCurrentUser, selectCurrentUser, selectToken } from "../../app/userSlice";
import { Popover } from 'antd';
import { ReactComponent as Setting } from "../../assets/svg/setting.svg";
import { ReactComponent as UserLogo } from "../../assets/svg/user.svg";
import { ReactComponent as Signout } from "../../assets/svg/signout.svg";

const AppHeader = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const token = useSelector(selectToken);
  const currentUser = useSelector(selectCurrentUser);

  // const useScroll = () => {
  //   const [y, setY] = useState(0);
  
  //   useEffect(() => {
  //     const handleWindowScroll = () => setY(window.pageYOffset);
  //     window.addEventListener("scroll", handleWindowScroll);
  //     return () => window.removeEventListener("resize", handleWindowScroll);
  //   }, []);
  
  //   return { y };
  // };

  const handleSignOut = () => {
    dispatch(removeCurrentUser());
    localStorage.setItem("token", "")
    navigate("/");
  };

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
      <div
        className="header-option update-profile"
        onClick={() => navigate("/profile", {state: location.pathname})}
      >
        <UserLogo/>
        Chỉnh sửa hồ sơ
      </div>

      <div
        className="header-option manager-header"
        onClick={() => navigate("/admin")}
        style={{display: handlePermission()}}
      >
        <Setting />
        Quản lý
      </div>

      <div
        className="header-option signout-header"
        onClick={() => handleSignOut()}
      >
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
            <img className="avatar-user-header" src={currentUser.avatar.search('https:') !== -1 ? currentUser.avatar : `https://ticket-box-bs.herokuapp.com/image/${currentUser.avatar}`} alt={currentUser.name} />
            {currentUser.name}            
          </Popover>
        </div>
      )
    }else{
      return (
        <div className="login">
          <div className="swblbnua" onClick={() => {navigate("/login", {state: location.pathname})}} >Đăng nhập | Đăng ký</div>
        </div>
      )
    }
  }

  const homepage = () => {
    navigate("/");
  };
  return (
    <div className="header">
      <div className="left">
        <div className="logo">
          <div className="hdlgf" onClick={homepage}>
            <img src={logo} alt="logo" />
          </div>
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
          <div onClick={homepage}>
            <Ve />
          </div>
        </div>
        {handleToken()}
      </div>
    </div>
  );
};

export default AppHeader;
