import React, { useEffect, useState } from "react";
import GoogleLogin from "react-google-login";
import { refreshTokenSetup } from "../../utils/refreshToken";
import "./SignIn.css";
import { CheckOutlined } from "@ant-design/icons";
import { ReactComponent as CuteDog } from "../../assets/svg/dog.svg";
import { ReactComponent as FacebookIcon } from "../../assets/svg/facebook.svg";
import { ReactComponent as GmailIcon } from "../../assets/svg/gmail.svg";
import { ReactComponent as CloseOutlined } from "../../assets/svg/x.svg";
import { ReactComponent as LogoWhite } from "../../assets/svg/logo-white.svg";
import UserAPI from "../../api/userAPI";
import { useLocation, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import ReactLoading from "react-loading";
import { addCurrentUser } from "../../app/userSlice";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("token");
  const prevPath = !location.state ? "/" : location.state;
  const [phoneNumber, setPhoneNumber] = useState("");
  const [check, setCheck] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  const hanldeCheckRules = () => {
    setCheck(!check);
  };

  const handlePhoneInput = (val) => {
    setPhoneNumber(val);
  };

  const handleStyleButton = () => {
    if (phoneNumber.length === 10 && check && !isLoading) {
      return { backgroundColor: "#2dc275", pointerEvents: "" };
    } else {
      return { backgroundColor: "#E6EBF5", pointerEvents: "" };
    }
  };

  const handleSignInPhoneNumber = async () => {
    if (phoneNumber.length === 10 && check) {
      try {
        setIsLoading(true);
        const response = await UserAPI.SignInByPhone(phoneNumber);
        console.log(response);
        if (response.message === "success!") {
          setIsLoading(false);
          navigate("import-otp", { state: { phoneNumber, prevPath } });
        }
      } catch (error) {
        setIsLoading(false);
        navigate("import-otp", { state: phoneNumber });
        console.log(error);
      }
    }
  };

  const responseGoogle = async (response) => {
    console.log(response);
    refreshTokenSetup(response);
    try {
      setIsLoading(true);
      const res = await UserAPI.SignInByGoogle(response.tokenId);
      if (res.status === "fail") {
        alert(
          "Oh! Có vẻ như đây là lần đầu bạn đến với Ticket box, vui lòng đăng ký bằng số điện thoại, bạn có thể đăng nhập bằng google vào lần sau!"
        );
        localStorage.setItem("google", JSON.stringify(response));
      } else if (res.status === "success") {
        setIsLoading(false);
        localStorage.setItem("token", res.token);
        dispatch(addCurrentUser({ token: res.token, user: res.data }));
        if (res.version === 0) {
          navigate("/profile", { state: prevPath });
        } else {
          navigate("/");
        }
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const responseFacebook = async (response) => {
    console.log(response);
    refreshTokenSetup(response);
    try {
      setIsLoading(true);
      const res = await UserAPI.SignInByFacebook(response.id);
      if (res.status === "fail") {
        alert(
          "Oh! Có vẻ như đây là lần đầu bạn đến với Ticket box, vui lòng đăng ký bằng số điện thoại, bạn có thể đăng nhập bằng facebook vào lần sau!"
        );
        localStorage.setItem("facebook", JSON.stringify(response));
        setIsLoading(false);
      } else if (res.status === "success") {
        setIsLoading(false);
        localStorage.setItem("token", res.token);
        dispatch(addCurrentUser({ token: res.token, user: res.data }));
        if (res.version === 0) {
          navigate("/profile", { state: prevPath });
        } else {
          navigate("/");
        }
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="sign-in-page">
      <div className="header-login">
        <div className="content-header-login">
          <div className="close-tag" onClick={() => navigate(prevPath)}>
            <CloseOutlined className="close" />
          </div>
          <div className="white-space"></div>
          <div className="bot-header">
            <LogoWhite className="logo-white" />
            <span className="sosip">Xin chào!</span>
            <CuteDog className="cute-dog" />
          </div>
        </div>
      </div>

      <div className="sign-in-form">
        <span className="sosip">Vui lòng nhập số điện thoại: </span>
        <div className="input-phone-number">
          <div>
            <p>+84</p>
          </div>
          <input
            className="Input"
            placeholder="Nhập ở đây"
            pattern="[0-9]"
            maxLength="10"
            type="number"
            onChange={(e) => handlePhoneInput(e.target.value)}
            value={phoneNumber}
          ></input>
        </div>
        <div className="check-rule">
          <div className="check" onClick={() => hanldeCheckRules()}>
            <div
              className="active"
              style={{ display: check ? "flex" : "none" }}
            >
              <CheckOutlined />
            </div>
          </div>
          <p>
            Tôi đồng ý với <a href="/">Điều khoản sử dụng và mua vé</a> cho
            nguời có độ tuổi phù hợp
          </p>
        </div>
        <div className="bottom">
          {isLoading ? (
            <div className="rcld">
              <ReactLoading
                className="rcld-li"
                type="spin"
                color="#2dc275"
                height="40px"
                width="40px"
              />
            </div>
          ) : (
            <button
              className="next-button"
              style={handleStyleButton()}
              onClick={() => handleSignInPhoneNumber()}
            >
              Tiếp tục
            </button>
          )}

          <div className="or">
            <span className="sosip">Hoặc</span>
          </div>
          <div className="login-api">
            <FacebookLogin
              appId="888287228516801"
              callback={responseFacebook}
              render={(renderProps) => (
                <div onClick={renderProps.onClick}>
                  <FacebookIcon className="facebook" />
                </div>
              )}
            />

            <GoogleLogin
              clientId="408075301782-j39rulkr2te17lttl2fp29pigqq1u3qt.apps.googleusercontent.com"
              //buttonText="Login"
              render={(renderProps) => (
                <div
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <GmailIcon className="gmail" />
                </div>
              )}
              onSuccess={responseGoogle}
              onFailure={() => {}}
              cookiePolicy={"single_host_origin"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
