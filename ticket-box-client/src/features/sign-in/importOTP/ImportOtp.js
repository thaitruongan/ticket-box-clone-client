import React, { useEffect, useState } from "react";
import './ImportOtp.css';
import {LeftOutlined} from '@ant-design/icons'
import UserAPI from "../../../api/userAPI";
import { useLocation } from "react-router";

const ImportOtp = () => {
    const stateNavigate = useLocation();
    const [check, setCheck] = useState(false)
    const [count, setCount] = useState(0);
    const [otp, setOtp] = useState("");
    const [countdown, setCcountdown] = useState(3);

    const autoTab = e => {
        console.log(e.target.value)
        setOtp(`${otp}${e.target.value}`);
        if (count < 3) {
            if (e.target.value.length === e.target.maxLength) {
                const nextInput = document.getElementById(`${count + 1}`)
                if(nextInput){
                    nextInput.focus();
                    setCount(count + 1);
                }
            }
        }
    }

    useEffect(() => {
        document.getElementById("0").focus();
    },[]);

    useEffect( () => {        
        if (otp.length === 4) {
            const sendOtp = async () => {            
                console.log('OTP');
                setCheck(true);
                try {
                    const response = await UserAPI.ImportOTP(stateNavigate.state, otp);
                    console.log(response);
                } catch (error) {
                    alert("Wrong OTP");
                    console.log(error)
                }
    
                setCount(0)
                setOtp("");
                document.getElementById("0").focus();
                document.getElementById('0').value = '';
                document.getElementById('1').value = '';
                document.getElementById('2').value = '';
                document.getElementById('3').value = '';
            }
            sendOtp();
        }
    }, [otp]);

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