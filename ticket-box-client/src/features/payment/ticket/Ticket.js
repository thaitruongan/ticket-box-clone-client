import React, { useState } from "react";
import "./Ticket.css";
import { Checkbox } from "antd";
import ReactLoading from 'react-loading';

const Ve = (props) => {
  const {showtime, total, ticketList, handlePayment, isLoading} = props;
  const timeStart = new Date(showtime.timeStart);
  const timeEnd = new Date(timeStart);
  const vipPrice = showtime.vipPrice;
  const standarPrice = showtime.standardPrice;
  let vipCount = 0;
  let standarCount = 0;
  timeEnd.setMinutes(timeEnd.getMinutes() + showtime.movie[0].runningTime);

  const [isChecked, setIsChecked] = useState(true);
//handle onclick payment
  const handleOnclickPayment = () => {
    if (handlePayment && isChecked) {
      handlePayment();
    }
  }
//handle is checked
  const onChange = (e) => {
    setIsChecked(e.target.checked);
  };
//handle count type ticket
  for (let i = 0; i < ticketList.length; i++) {
    if (ticketList[i].isVip) {
      vipCount++;
    }else{
      standarCount++;
    }
  }
//handle format total
  let format = new Intl.NumberFormat("vi-Vn", {
    style: "currency",
    currency: "VND",
  });

  const handleRuningTime = (time) => {
    const H = Math.floor(time / 60);
    const M = time % 60;

    return `${H} giờ ${M} phút`
  }

  const handleTimeStartEnd = (h, m) => {
    let mi = m, ho = h;

    if (h < 10) {
      ho = `0${h}`;
    }
    if (m < 10) {
      mi = `0${m}`;
    }
    return `${ho}:${mi}`
  }

  return (
    <div className="ve">
      <div className="poster">
        <img
          src={`https://ticket-box-clone.herokuapp.com/image/${showtime.movie[0].image}`}
          alt="tenphim"
        />
        <div className="thong-tin-ve-phim">
          <div className="phim-in-ve">
            <h2>{showtime.movie[0].name}</h2>
          </div>
          <div className="gio-in-ve">
            <span>{handleRuningTime(showtime.movie[0].runningTime)}</span>
          </div>
        </div>
      </div>
      <div className="gach-ngang"></div>
      <div className="info-rap-ve">
        <div className="rap-ve">
          <h2>TicketBox</h2>
        </div>
        <div className="phong-ve">
          <p>{showtime.room[0].name}</p>
          <p>{handleTimeStartEnd(timeStart.getHours(), timeStart.getMinutes())} - {handleTimeStartEnd(timeEnd.getHours(), timeEnd.getMinutes())}, {timeStart.toLocaleDateString('en-GB')}</p>
          <div className="pv-list">
            {ticketList.map(tick => (<p key={tick._id} className="pv-child">{`${tick.row}${tick.column}`}</p>))}
          </div>
          {/* <p className="pv-child">{ticketList.map(tick => `${tick.row}${tick.column} `)}</p> */}
        </div>
        {(vipCount > 0) ? (<div className="loai-va-gia">
                            <div className="loai-ve">
                              <p>VIP (X{vipCount})</p>
                            </div>
                            <div className="gia-ve">
                              <p>{format.format(vipPrice * vipCount)}</p>
                            </div>
                          </div>) : null}
        {(standarCount > 0) ? (<div className="loai-va-gia">
                                <div className="loai-ve">
                                  <p>Standard (X{standarCount})</p>
                                </div>
                                <div className="gia-ve">
                                  <p>{format.format(standarPrice * standarCount)}</p>
                                </div>
                              </div>) : null}
      </div>
      <div className="gach-ngang"></div>
      <div className="thanh-tien-ve">
        <div className="thanh-tien-ve-gia">
          <h2>{format.format(total)}</h2>
        </div>
        <div className="check-box-access">
          <Checkbox checked={isChecked} onChange={onChange}>
            <p>
              Tôi đồng ý với <a href="/">Điều khoản sử dụng và mua vé</a> cho
              người có độ tuổi phù hợp
            </p>
          </Checkbox>
        </div>
        {
          isLoading ? (
            <div className="rcld">
              <ReactLoading type="spin" color="#2dc275" height="40px" width="40px" />
            </div>
          ) : (<div>
                <button className="button-thanh-toan" onClick={() => handleOnclickPayment()} >Thanh Toán</button>
              </div>
              )
        }
      </div>
    </div>
  );
};

export default Ve;
