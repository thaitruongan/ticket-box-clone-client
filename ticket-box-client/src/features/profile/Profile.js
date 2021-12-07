import React from 'react';
import './Profile.css'
import {ReactComponent as CloseOutlined} from "../../assets/svg/x.svg";
import {ReactComponent as Camera} from "../../assets/svg/camera.svg";
import Avatar from "../../assets/avatar.png";
import { DatePicker, Radio, Button } from 'antd';
import moment from 'moment';

const Profile = () => {
    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
    const [sex, setSex] = React.useState('');

    const onSelectSexButton = e => {
        console.log(e.target.value);
        setSex(e.target.value);
      };

    return (
        <div className="profile">
            <div className="space"></div>
            <div className="form-profile">
                <CloseOutlined className="close" />
                <div className="avatar">
                    <img src={Avatar} alt="avatar.png"/>
                    <div className="file-upload">
                        <Camera className="camera" />
                        <input type="file" accept="image/*" ></input>
                    </div>
                </div>

                <div className="user-name">
                    <span>Họ và tên: </span>
                    <div className="name-input">
                        <input name="name" className="name" placeholder="Họ và tên" type="text" maxLength="100" />
                    </div>
                </div>

                <div className="phone-number">
                <span>Số điện thoại: </span>
                    <div className="phone-input">
                        <input name="name" className="phone" disabled placeholder="Vd: 0123456789" type="text" maxLength="100" />
                    </div>
                </div>

                <div className="user-email">
                <span>Email nhận vé: </span>
                    <div className="mail-input">
                        <input name="name" className="mail" placeholder="Vd: nguyenvana@gmail.com" type="text" maxLength="100" />
                    </div>
                </div>

                <div className="user-birth">
                <span>Ngày tháng năm sinh: </span>
                    <div className="birth-input">
                        <DatePicker className="birth" defaultValue={moment('01/01/2015', dateFormatList[0])} format={dateFormatList} />
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
                    <Button type="primary" className="finish">Hoàn thành</Button>
                </div>
            </div>
        </div>
    )
}

export default Profile