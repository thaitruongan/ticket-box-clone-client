import React, { useState } from 'react';
import './SignIn.css';
import {CheckOutlined} from '@ant-design/icons';
import Input from '../../commons/informationInput/Input';
import {ReactComponent as CuteDog} from "../../assets/svg/dog.svg";
import {ReactComponent as FacebookIcon} from "../../assets/svg/facebook.svg";
import {ReactComponent as GmailIcon} from "../../assets/svg/gmail.svg";
import {ReactComponent as CloseOutlined} from "../../assets/svg/x.svg";
import {ReactComponent as LogoWhite} from "../../assets/svg/logo-white.svg";

const SignIn = () => {
    const [check, setCheck] = useState(false);

    const hanldeCheckRules = () => {
        setCheck(!check);
    }
    
    return (
        <div className="sign-in-page">
            <div className="header">
                <div className="content">
                    <div className="close-tag">
                        <CloseOutlined className="close" />
                    </div>
                    <div className="white-space"></div>
                    <div className="bot-header">
                        <LogoWhite className="logo-white" />
                        <span>Xin chào!</span>
                        <CuteDog className="cute-dog" />
                    </div>
                </div>
            </div>

            <div className="sign-in-form">
                <span>Vui lòng nhập số điện thoại: </span>
                <div className="input-phone-number">
                    <div><p>+84</p></div>
                    <Input placeholder="Nhập ở đây" maxLength="10" />
                </div>
                <div className="check-rule">
                    <div className="check" onClick={() => hanldeCheckRules()} >
                        <div className="active" style = {{display: check ? 'flex' : 'none'}}>
                            <CheckOutlined />
                        </div>
                    </div>
                    <p>Tôi đồng ý với <a href="/">Điều khoản sử dụng và mua vé</a> cho nguời có độ tuổi phù hợp</p>
                </div>
                <div className="bottom">
                    <button className="next-button">Tiếp tục</button>
                    <div className="or"><span>Hoặc</span></div>
                    <div className="login-api">
                        <div><FacebookIcon className="facebook"/></div>
                        <div><GmailIcon className="gmail"/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn