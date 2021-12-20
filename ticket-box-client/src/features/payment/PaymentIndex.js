import React, { useState } from "react";
import { Row, Col } from "antd";
import InfoUser from "./receiver-info/ReceiverInfo";
// import BuyBox from "./payment-methods/BuyBox";
import Ve from "./ticket/Ticket";
import TimeWaiting from "./time-waiting/TimeWaiting";
import { useSelector } from "react-redux";
import { selectCurrentUser, selectToken } from "../../app/userSlice";
import PaymentAPI from "../../api/paymentAPI";
import { useNavigate } from "react-router";

const ThanhToanIndex = (props) => {
  const navigate = useNavigate();
  const token = useSelector(selectToken);
  const currentUser = useSelector(selectCurrentUser);
  const {total, ticketList, showtime} = props;
  const ticketIdList = [];
  const [infor, setInfor] = useState({
    email: currentUser.email,
    phoneNumber: currentUser.phoneNumber
  })
  const [isLoading, setIsLoading] = useState(false);
//get ticket id list
  for (let i = 0; i < ticketList.length; i++) {
    ticketIdList.push(ticketList[i]._id)
  }
//handle is timeout
  const handleIsTimeOut = () => {
    console.log("Time out");
  };
//handle receiver email
  const handleEmailInfor = (val) => {
    setInfor({
      ...infor,
      email: val
    })
  }
//handle receiver phone number
  const handlePhoneNumberInfor = (val) => {
    setInfor({
      ...infor,
      phoneNumber: val
    })
  }
//handle payment
  const handlePayment = async () => {
    if (String(infor.email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) === null) {
      alert("Email nhập sai định dạng!!!")
    }else{
      if (infor.phoneNumber.length !== 10) {
        alert("Số điện thoại nhập sai định dạng!!!")
      }else{
        if (infor.email && infor.phoneNumber) {
          try {
            setIsLoading(true);
            const response = await PaymentAPI.createPayment(token, ticketIdList, total, infor);
            if (response.message === "Success") {
              setIsLoading(false);
              alert("Mua vé thành công!!! hãy kiểm tra email của bạn.");
              navigate("/");
            }
          } catch (error) {
            console.log(error)
          }
        }
      }
    }
  }

  return (
    <Row>
      <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 5 }}>
        <InfoUser
          infor={infor}
          onChangeEmail={handleEmailInfor}
          onChangePhoneNumber={handlePhoneNumberInfor}
        />
        {/* <BuyBox /> */}
      </Col>
      <Col xs={{ span: 11, offset: 1 }} lg={{ span: 7, offset: 2 }}>
        <TimeWaiting handleIsTimeOut={handleIsTimeOut} />
        <Ve
          showtime={showtime}
          total={total}
          ticketList={ticketList}
          handlePayment={handlePayment}
          isLoading={isLoading}
        />
      </Col>
    </Row>
  );
};

export default ThanhToanIndex;
