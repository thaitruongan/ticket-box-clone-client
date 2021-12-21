import React, { memo } from "react";
import Countdown, { zeroPad } from "react-countdown";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./TimeWaiting.css";

const TIME_BOOKING = 300 * 1000;

const TimeWaiting = (props) => {
  const navigate = useNavigate();
  const {handleIsTimeOut} = props;

  const isTimeOut = () => {
    if (handleIsTimeOut) {
      handleIsTimeOut();
    }
  }

  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      return <p id="timewaiting">00:00</p>;
    } else {
      return (
        <p id="timewaiting">
          {zeroPad(minutes)}:{zeroPad(seconds)}
        </p>
      );
    }
  };
  const handleCompleted = () => {
    Swal.fire({
      title: "Thông báo",
      text: "Thời gian thực hiện giao dịch đã hết. Vui lòng thực hiện lại",
      showCancelButton: true,
      showConfirmButton: false,
      // confirmButtonText: "Đã hiểu",
      cancelButtonText: "Đã hiểu",
    }).then((res) => {
      isTimeOut();
      if (res.value) {
        window.location.reload();
      } else {
        navigate("/movies");
      }
    });
  };
  return (
    <div className="top__right">
      <Countdown
        date={Date.now() + TIME_BOOKING}
        renderer={renderer}
        autoStart={true}
        onComplete={handleCompleted}
      />
    </div>
  );
};

export default memo(TimeWaiting);
