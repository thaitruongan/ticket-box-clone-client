import React, { useEffect, useState } from "react";
import PaymentButton from "../../commons/paymentButton/PaymentButton";
import SeatRow from "../../commons/seat/SeatRow";
import "./SeatMap.css";
import AppHeader from "../../components/header/Header";
import { io } from "socket.io-client";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../app/userSlice";
import { useLocation, useNavigate } from "react-router";
// import ShowTimeAPI from "../../api/showTimeAPI";

// const host = "http://localhost:8000";

const SeatMap = () => {
  // const socketRef = useRef();
  const navigate = useNavigate();
  const currentUser = useSelector(selectCurrentUser);
  const showtimeState = useLocation();
  const [countdown, setCountdown] = useState(300);
  const [isCountdown, setIsCountdown] = useState(false);
  const [total, setTotal] = useState(0);
  const [selectedList, setSelectedList] = useState([]);
  const [idSocket, setIdSocket] = useState();
  const [socket, setSocket] = useState(null);
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(1);
  // const [showtime, setShowtime] = useState();

  const seatRows = [];
  const showtimeId = showtimeState.state._id;
  const userId = currentUser._id;
  const vipPrice = showtimeState.state.vipPrice;
  const standarPrice = showtimeState.state.standardPrice;
  const timeStart = new Date(showtimeState.state.timeStart);
  const timeEnd = new Date(timeStart);
  timeEnd.setMinutes(
    timeEnd.getMinutes() + showtimeState.state.movie[0].runningTime
  );
  let format = new Intl.NumberFormat("vi-Vn", {
    style: "currency",
    currency: "VND",
  });
  //handle payment button
  const handlePaymentButton = () => {
    socket.disconnect();
    setSocket(null);
    setIsCountdown(false);
    setCountdown(0);
    if (currentUser._id) {
      navigate("/payment", {
        state: { selectedList, total, showtime: showtimeState.state },
      });
    } else {
      navigate("/login", { state: showtimeState.pathname });
    }
  };
  //handle time start - end
  const handleTimeStartEnd = (h, m) => {
    let mi = m,
      ho = h;

    if (h < 10) {
      ho = `0${h}`;
    }
    if (m < 10) {
      mi = `0${m}`;
    }
    return `${ho}:${mi}`;
  };
  //handle select seat
  const handleSelected = (tic) => {
    if (selectedList.find((tick) => tick._id === tic._id)) {
      setSelectedList([...selectedList.filter((tick) => tick._id !== tic._id)]);
      socket.emit("cancel-ticket", {
        ticketId: tic._id,
        showtimeId: showtimeId,
      });
      if (tic.isVip) {
        setTotal(total - vipPrice);
      } else {
        setTotal(total - standarPrice);
      }
    } else {
      setCountdown(0);
      setIsCountdown(true);
      setCountdown(300);
      setSelectedList([...selectedList, tic]);
      socket.emit("pick-new-ticket", {
        ticketId: tic._id,
        userId: userId,
        showtimeId: showtimeId,
      });
      if (tic.isVip) {
        setTotal(total + vipPrice);
      } else {
        setTotal(total + standarPrice);
      }
    }
  };
  //count donw selected

  useEffect(() => {
    if (isCountdown) {
      if (countdown > 0) {
        var timeout = setTimeout(() => setCountdown(countdown - 1), 1000);
      } else {
        socket.emit("Timeout", { showtimeId: showtimeId });
        setIsCountdown(false);
        setSelectedList([]);
        setTotal(0);
      }
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [isCountdown, countdown, socket, showtimeId]);
  //connect socket
  useEffect(() => {
    // setSocket(io("ws://localhost:5000"));
    setSocket(io("https://ticket-box-bs.herokuapp.com/"));
  }, []);
  //fetch showtime by id
  // useEffect(() => {
  //   const fetchShowTimeById = async() => {
  //     try {
  //       const response = await ShowTimeAPI.getById(showtimeId);
  //       if(response.message === "successfully!"){
  //         setShowtime(response.data);
  //       }
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }

  //   fetchShowTimeById();
  // },[showtimeId]);
  // set seat row
  for (let i = 0; i < data.length; i++) {
    if (!seatRows.find((element) => element === data[i].row)) {
      seatRows.push(data[i].row);
    }
  }

  seatRows.sort();
  //event socket
  useEffect(() => {
    if (socket !== null) {
      socket.on("welcome", (message) => {
        setIdSocket(message);
      });

      socket.on("get-data", (data) => {
        setData(data);
      });

      socket.emit("get-data", { id: showtimeId });
    }
  }, [socket, showtimeId]);

  if (socket !== null && flag === 1) {
    setFlag(0);
  }

  return (
    <div className="sc-17x1kk6-2">
      <AppHeader />
      <main className="SeatMap">
        <div className="seat-map-container">
          <div className="tbox-container">
            <div className="seat-map-grid">
              <div className="seat-map-left">
                <div className="smf-smc">
                  <div className="smf-smc-seat-map">
                    <div className="represent-row">
                      <div className="rprc">
                        {seatRows.map((element) => (
                          <div key={element} className="rprc-child">
                            {element}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="element-in-row">
                      <img
                        className="screen-img"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAtYAAAAoBAMAAAAoOaC1AAAAJFBMVEUsw3UAAAAqxXckxHMpxHYtxnYrwncswHQ00mkrw3covnknwXwjx+xfAAAADHRSTlNMAEEJKBtHNwQvEyHIwBDBAAABI0lEQVRo3u3avVHDQBiE4Z2TBaNwMQweSNA4IeQSYtQB6oASqMGBY6sDl2B36MCa048Vei/ap4Q3228+/MPyqPANy6PAMyyPBpsPWA6B4BGWQ0nwFZZDR3D9B9N7iAT5A9NbkSCfYHo1CfINpteSIHmAqVW8tt7D1LZ963eY2rlvTU9HtcC+taejXJFa+/6k1qXWG09HrRBTa55gSiVTa9+fxOrU2tNRLQ6tfX/SqphaezqKbYfWno5i7aQ1/bqgEzi09nTUKkatPR21mlFrT0epEGet+QvTKDlq7ekoVd+0XsM04ri1p6PSiretdzCFz4XWLzCFdtLa01HokUutv2D3V0xbezoKNYut/fUuEDhr7fuTTDlr7emo0y239te7QOTgAr5cL3C/77KUAAAAAElFTkSuQmCC"
                        alt="Screen"
                      />

                      {seatRows.map((element) => {
                        const rowElements = data.filter(
                          (tic) => tic.row === element
                        );

                        return (
                          <SeatRow
                            key={element}
                            idSocket={idSocket}
                            elements={rowElements}
                            onClickOnSeat={handleSelected}
                            selectedList={selectedList}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <div className="info-right">
                <div className="ticket-information">
                  <div className="movie-info-ticket">
                    <img
                      className="avatar-movie-on-ticket"
                      src={`https://ticket-box-bs.herokuapp.com/image/${showtimeState.state.movie[0].image}`}
                      alt={`${showtimeState.state.movie[0].name}`}
                    />

                    <div className="other-info-movie-on-ticket-container">
                      <h4 className="movie-name-on-ticket">
                        {showtimeState.state.movie[0].name}
                      </h4>

                      <div className="other-info-movie-on-ticket">
                        {showtimeState.state.movie[0].label}
                        <span className="dash-vertical">|</span>
                        2D
                      </div>
                    </div>
                  </div>

                  <h4 className="showtime-name">
                    {showtimeState.state.room[0].name}
                  </h4>

                  <div className="show-time-infor">
                    {handleTimeStartEnd(
                      timeStart.getHours(),
                      timeStart.getMinutes()
                    )}{" "}
                    -{" "}
                    {handleTimeStartEnd(
                      timeEnd.getHours(),
                      timeEnd.getMinutes()
                    )}{" "}
                    | {timeStart.toLocaleDateString("en-GB")}
                  </div>

                  <div className="total-count">{format.format(total)}</div>

                  <PaymentButton
                    isSelected={selectedList.length > 0 ? true : false}
                    onClick={handlePaymentButton}
                  />
                </div>

                <div className="seat-information-container">
                  <div className="seat-information">
                    <div className="ifst">
                      <span className="ifst-inf"></span>
                      <span className="ifst-t">Đã chọn</span>
                    </div>

                    <div className="ifst">
                      <span className="ifst-ifns">1</span>
                      <span className="ifst-t">Đang chọn</span>
                    </div>

                    <div className="istt">
                      <span className="istt-asdn"></span>
                      <span className="istt-t">
                        Standard - {format.format(standarPrice)}
                      </span>
                    </div>

                    <div className="istt">
                      <span className="istt-arbn"></span>
                      <span className="istt-t">
                        VIP - {format.format(vipPrice)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SeatMap;
