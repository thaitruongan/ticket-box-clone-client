import React, { memo } from "react";
import Countdown, { zeroPad } from "react-countdown";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./TimeWaiting.css";

const TIME_BOOKING = 300 * 1000;

const TimeWaiting = () => {
  const history = useNavigate();

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
      title: "Hết giờ",
      text: "bạn có muốn đặt vé lại!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Đồng ý!",
      cancelButtonText: "Hủy",
    }).then((res) => {
      if (res.value) {
        window.location.reload();
      } else {
        history("/");
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
