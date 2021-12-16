import React from 'react';
import './Profile.css'
import {ReactComponent as CloseOutlined} from "../../assets/svg/x.svg";
import {ReactComponent as Camera} from "../../assets/svg/camera.svg";
import { DatePicker, Radio, Button } from 'antd';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../app/userSlice';
import { useNavigate } from 'react-router';

const Profile = () => {
    const navigate = useNavigate()
    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
    const currentUser = useSelector(selectCurrentUser);
    const [sex, setSex] = React.useState(currentUser.sex);

    const onSelectSexButton = e => {
        console.log(e.target.value);
        setSex(e.target.value);
      };

    return (
        <div className="profile">
            <div className="space"></div>
            <div className="form-profile">
                <CloseOutlined className="close" onClick={() => navigate("/")} />
                <div className="avatar">
                    <img src={`https://ticket-box-clone.herokuapp.com/image/${currentUser.avatar}`} alt="avatar.png"/>
                    <div className="file-upload">
                        <Camera className="camera" />
                        <input className="input-profile" type="file" accept="image/*" ></input>
                    </div>
                </div>

                <div className="user-name-profile">
                    <span>Họ và tên: </span>
                    <div className="name-input">
                        <input name="name" className="input-profile name" value={currentUser.name} placeholder="Họ và tên" type="text" maxLength="100" />
                    </div>
                </div>

                <div className="phonenumber">
                <span>Số điện thoại: </span>
                    <div className="phone-input">
                        <input name="phone-number" className="input-profile phone" value={currentUser.phoneNumber} disabled placeholder="Vd: 0123456789" type="text" maxLength="100" />
                    </div>
                </div>

                <div className="user-email">
                <span>Email nhận vé: </span>
                    <div className="mail-input">
                        <input name="mail" className="input-profile mail" value={currentUser.email} placeholder="Vd: nguyenvana@gmail.com" type="text" maxLength="100" />
                    </div>
                </div>

                <div className="user-birth">
                <span>Ngày tháng năm sinh: </span>
                    <div className="birth-input">
                        <DatePicker className="input-profile birth" defaultValue={moment(currentUser.birth, dateFormatList[0])} format={dateFormatList} />
                    </div>
                </div>

                <div className="user-sex">
                    <span>Giới tính: </span>
                    <div className="wrap-radio">
                        <Radio.Group className="radio-group" onChange={onSelectSexButton} value={sex} >
                            <Radio value="male">Nam</Radio>
                            <Radio value="female">Nữ</Radio>
                            <Radio value ="other">Khác</Radio>
                        </Radio.Group>
                    </div>
                </div>

                <div className="finish-button">
                    <Button type="primary" className="fnbp">Hoàn thành</Button>
                </div>
            </div>
        </div>
    )
}

export default Profile