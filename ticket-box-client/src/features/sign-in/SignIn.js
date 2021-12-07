import React from 'react';
import './SignIn.css';
import cuteBear from '../../assets/cute-bear.png';
import facebookIcon from '../../assets/facebook.png';
import gmailIcon from '../../assets/gmail.png';
import {CloseOutlined, CheckOutlined} from '@ant-design/icons';
import InformationInput from '../../commons/informationInput/informationInput';
import {ReactComponent as CuteDog} from "../../assets/svg/dog.svg";

const SignIn = () => {
    return (
        <div className="sign-in-page">
            <div className="header">
                <CuteDog/>
                <p>Xin chào!</p>
                <button><CloseOutlined /></button>
            </div>

            <div className="sign-in-form">
                <span>Vui lòng nhập số điện thoại: </span>
                <div className="input-phone-number">
                    <div><p>+84</p></div>
                    <InformationInput placeholder="Nhập ở đây" />
                </div>
                <div className="check-rule">
                    <div className="check">v</div>
                    <p>Tôi đồng ý với <a href="/">Điều khoản sử dụng và mua vé</a> cho nguời có độ tuổi phù hợp</p>
                </div>
                <div className="bottom">
                    <button className="next-button">Tiếp tục</button>
                    <div className="or"><span>Hoặc</span></div>
                    <div className="login-api">
                        <div className="facebook"><img src={facebookIcon} alt="facebook.png"/></div>
                        <div className="email"><img src={gmailIcon} alt="gmail.png"/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn