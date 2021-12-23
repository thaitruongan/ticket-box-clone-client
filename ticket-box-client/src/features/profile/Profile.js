import React, { useState } from "react";
import "./Profile.css";
import { ReactComponent as CloseOutlined } from "../../assets/svg/x.svg";
import { ReactComponent as Camera } from "../../assets/svg/camera.svg";
import { DatePicker, Radio, Button } from "antd";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import {
  addCurrentUser,
  selectCurrentUser,
  selectToken,
} from "../../app/userSlice";
import { useLocation, useNavigate } from "react-router";
import UserAPI from "../../api/userAPI";
import ReactLoading from "react-loading";

const Profile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const dateFormatList = ["MM-DD-YYYY", "MM-DD-YY"];
  const currentUser = useSelector(selectCurrentUser);
  const [isLoading, setIsLoading] = useState(false);
  const [inforUser, setInforUser] = useState({
    file: undefined,
    email: !currentUser.email ? "" : currentUser.email,
    name: !currentUser.name ? "" : currentUser.name,
    phoneNumber: !currentUser.phoneNumber ? "" : currentUser.phoneNumber,
    birth: !currentUser.birth ? new Date() : new Date(currentUser.birth),
    sex: !currentUser.sex ? "" : currentUser.sex,
  });

  if (!currentUser) {
    navigate("/");
  }

  // console.log(currentUser.avatar.search('https:'), currentUser.avatar)
  const onSelectSexButton = (e) => {
    setInforUser((prevInfor) => ({
      ...prevInfor,
      sex: e.target.value,
    }));
  };

  const handleCloseButton = () => {
    navigate(location.state);
  };

  const updateUser = async () => {
    if (
      !inforUser.email ||
      !inforUser.name ||
      !inforUser.birth ||
      !inforUser.sex
    ) {
      alert("Hãy điền đầy đủ thông tin trước khi cập nhật!!!");
    } else {
      if (
        String(inforUser.email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ) === null
      ) {
        alert("Email nhập sai định dạng!!!");
      } else {
        try {
          setIsLoading(true);
          const response = await UserAPI.updatePersonalInfo(token, inforUser);
          console.log(response);
          if (response.message === "User update successfully!") {
            dispatch(addCurrentUser({ token: token, user: response.data }));
            navigate(location.state);
          } else {
            alert("cập nhật thất bại");
            setIsLoading(false);
            navigate(location.state);
          }
        } catch (error) {
          console.log(error);
          alert("cập nhật thất bại");
          setIsLoading(false);
          navigate(location.state);
        }
      }
    }
  };
  return (
    <div className="profile">
      <div className="space"></div>
      <div className="form-profile">
        <CloseOutlined className="close" onClick={() => handleCloseButton()} />
        <div className="avatar">
          <img
            src={
              currentUser.avatar.search("https:") !== -1
                ? currentUser.avatar
                : `https://ticket-box-bs.herokuapp.com/image/${currentUser.avatar}`
            }
            alt="avatar.png"
          />
          <div className="file-upload">
            <Camera className="camera" />
            <input
              className="input-profile"
              type="file"
              accept="image/*"
              onChange={(e) => {
                setInforUser(() => ({
                  ...inforUser,
                  file: e.target.files[0],
                }));
              }}
            ></input>
          </div>
        </div>

        <div className="user-name-profile">
          <span>Họ và tên: </span>
          <div className="name-input">
            <input
              name="name"
              className="input-profile name"
              value={inforUser.name}
              placeholder="Họ và tên"
              type="text"
              maxLength="100"
              onChange={(e) => {
                setInforUser(() => ({
                  ...inforUser,
                  name: e.target.value,
                }));
              }}
            />
          </div>
        </div>

        <div className="phonenumber">
          <span>Số điện thoại: </span>
          <div className="phone-input">
            <input
              name="phone-number"
              className="input-profile phone"
              value={inforUser.phoneNumber}
              disabled
              placeholder="Vd: 0123456789"
              type="text"
              maxLength="10"
            />
          </div>
        </div>

        <div className="user-email">
          <span>Email nhận vé: </span>
          <div className="mail-input">
            <input
              name="email"
              className="input-profile mail"
              value={inforUser.email}
              placeholder="Vd: nguyenvana@gmail.com"
              type="email"
              maxLength="100"
              required
              onChange={(e) => {
                setInforUser(() => ({
                  ...inforUser,
                  email: e.target.value,
                }));
              }}
            />
          </div>
        </div>

        <div className="user-birth">
          <span>Ngày tháng năm sinh: </span>
          <div className="birth-input">
            <DatePicker
              className="input-profile birth"
              format={dateFormatList}
              defaultValue={moment(`${inforUser.birth}`, dateFormatList[0])}
              onChange={(dateString) => {
                setInforUser(() => ({
                  ...inforUser,
                  birth: dateString,
                }));
              }}
            />
          </div>
        </div>

        <div className="user-sex">
          <span>Giới tính: </span>
          <div className="wrap-radio">
            <Radio.Group
              className="radio-group"
              onChange={onSelectSexButton}
              value={inforUser.sex}
            >
              <Radio value="male">Nam</Radio>
              <Radio value="female">Nữ</Radio>
            </Radio.Group>
          </div>
        </div>
        {isLoading ? (
          <div className="rcld">
            <ReactLoading
              type="spin"
              color="#2dc275"
              height="40px"
              width="40px"
            />
          </div>
        ) : (
          <div className="finish-button">
            <Button
              type="primary"
              className="fnbp"
              onClick={() => updateUser()}
            >
              Hoàn thành
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
