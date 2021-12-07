import React from "react";
import './ImportOtp.css';
import {LeftOutlined} from '@ant-design/icons'

const ImportOtp = () => {
    return (
        <div className="import-otp">
            <div className="back"><LeftOutlined /></div>
            <span className="top">Nhập 4 chữ số được gửi đến:</span>
            <span className="phone-number">+84836450670</span>
            <div className="input-otp">
                <input name="0" pattern="[0-9]" className="input-0"/>
                <input name="1" pattern="[0-9]" className="input-1"/>
                <input name="2" pattern="[0-9]" className="input-2"/>
                <input name="3" pattern="[0-9]" className="input-3"/>
            </div>
            <span className="bottom">Không nhận được OTP??</span>
            <div className="resend-otp"><span>Gửi lại OTP</span></div>
            <button className="next-button">Tiếp tục</button>
        </div>
    )
}

export default ImportOtp