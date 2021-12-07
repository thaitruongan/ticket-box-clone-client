import React, { useState } from "react";
import './ImportOtp.css';
import {LeftOutlined} from '@ant-design/icons'

const ImportOtp = () => {
    const [count, setCount] = useState(0);

    const autoTab = e => {
        if (count < 3) {
            if (e.target.value.length === e.target.maxLength) {
                const nextInput = document.getElementById(`${count + 1}`)
                if(nextInput){
                    nextInput.focus();
                    setCount(count + 1);
                }
            }
        }else{
            // check otp
            console.log('OTP');
            setCount(0)
            document.getElementById('0').value = '';
            document.getElementById('1').value = '';
            document.getElementById('2').value = '';
            document.getElementById('3').value = '';
        }
    }

    return (
        <div className="import-otp">
            <div className="back"><LeftOutlined /></div>
            <span className="top">Nhập 4 chữ số được gửi đến:</span>
            <span className="phone-number">+84836450670</span>
            <div className="input-otp">
                <input className="input-0" id="0" pattern="[0-9]" type="number" maxLength="1" onChange={autoTab} />
                <input className="input-1" id="1" pattern="[0-9]" type="number" maxLength="1" onChange={autoTab} />
                <input className="input-2" id="2" pattern="[0-9]" type="number" maxLength="1" onChange={autoTab} />
                <input className="input-3" id="3" pattern="[0-9]" type="number" maxLength="1" onChange={autoTab} />
            </div>
            <span className="space"></span>
            <span className="question">Không nhận được OTP??</span>
            <div className="resend-otp"><span>Gửi lại OTP</span></div>
            <button className="next-button">Tiếp tục</button>
        </div>
    )
}

export default ImportOtp