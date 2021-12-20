import React, { useEffect, useState } from "react";
import './ImportOtp.css';
import {LeftOutlined} from '@ant-design/icons'
import UserAPI from "../../../api/userAPI";
import { useLocation, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addCurrentUser } from "../../../app/userSlice";

const ImportOtp = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const stateNavigate = useLocation();
    const phoneNumber = stateNavigate.state.phoneNumber;
    const prevPath = stateNavigate.state.prevPath;
    const [check, setCheck] = useState(false)
    const [count, setCount] = useState(0);
    const [otp, setOtp] = useState("");
    const [countDROtp, setCountDROtp] = useState(30);
    const [isCountDROtp, setIsCountDROtp] = useState(false);

    const autoTab = e => {
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

    if (isCountDROtp) {
        if (countDROtp > 0) {
            setTimeout(() => setCountDROtp(countDROtp - 1), 1000);
        }
    }

    if(countDROtp === 0){
        setIsCountDROtp(false);
        setCountDROtp(30);
    }

    const handleCountDROtp = () => {
        if (Math.floor(countDROtp / 10) > 0 ) {
            return `00:${countDROtp}`
        } else {            
            return `00:0${countDROtp}`
        }
    }

    useEffect(() => {
        document.getElementById("0").focus();
    },[]);

    useEffect( () => {
        if (otp.length === 4) {
            const importOTP = async () => {
                setCheck(true);
                try {
                    const response = await UserAPI.ImportOTP(phoneNumber, otp);
                    console.log(response);
                    if (response.token) {
                        localStorage.setItem("token", response.token);
                        dispatch(addCurrentUser(response));
                        setCount(0);
                        setCheck(false);
                        document.getElementById("0").focus();
                        document.getElementById('0').value = '';
                        document.getElementById('1').value = '';
                        document.getElementById('2').value = '';
                        document.getElementById('3').value = '';
                        setOtp("");
                        if (response.version === 0) {
                            navigate("/profile", {state: prevPath})
                        } else {                            
                            navigate(prevPath)
                        }
                    }
                } catch (error) {
                    console.log(error)
                    alert("Nhập sai OTP")
                    setCount(0);
                    setCheck(false);
                    document.getElementById("0").focus();
                    document.getElementById('0').value = '';
                    document.getElementById('1').value = '';
                    document.getElementById('2').value = '';
                    document.getElementById('3').value = '';
                    setOtp("");
                }
            }        
            importOTP();
        }
    }, [phoneNumber, otp, dispatch, navigate, prevPath]);

    return (
        <div className="import-otp">
            <div className="back" onClick={() => navigate("/login")}><LeftOutlined/></div>
            <span className="top">Nhập 4 chữ số được gửi đến:</span>
            <span className="phone-number">{phoneNumber}</span>
            <div className="input-otp">
                <input className="input-0" id="0" pattern="[0-9]" type="number" maxLength="1" onChange={autoTab} />
                <input className="input-1" id="1" pattern="[0-9]" type="number" maxLength="1" onChange={autoTab} />
                <input className="input-2" id="2" pattern="[0-9]" type="number" maxLength="1" onChange={autoTab} />
                <input className="input-3" id="3" pattern="[0-9]" type="number" maxLength="1" onChange={autoTab} />
            </div>
            <span className="space"></span>
            <span className="question">Không nhận được OTP??</span>
            <div className="resend-otp" style={{pointerEvents: isCountDROtp ? "none" : ""}} onClick={() => {
                    setIsCountDROtp(true);
                }} ><span style={{color: isCountDROtp ? "grey" : "#2dc275"}} >{isCountDROtp ? handleCountDROtp() : "Gửi lại OTP"}</span></div>
            <button className="next-button" style={{backgroundColor: check ? "#2dc275" : "#e6ebf5", pointerEvents: check ? "none" : "" }} >Tiếp tục</button>
        </div>
    )
}

export default ImportOtp