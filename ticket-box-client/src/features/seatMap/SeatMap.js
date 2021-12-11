import React, { useEffect, useState } from "react";
import PaymentButton from "../../commons/paymentButton/PaymentButton";
import SeatRow from "../../commons/seat/SeatRow";
import './SeatMap.css';

const SeatMap = () => {
    const [total, setTotal] = useState(0);
    const [vipSelect, setVipSelect] = useState(0);
    const [stansarSelect, setStandarSelect] = useState(0);
    const [select, setSelect] = useState(false);
    const seatRows =[];

    const data =[
        {
            "_id": "61b42ef5403cc5cad4bc792e",
            "seatId": "61b2d0135b2065af8e65c4f9",
            "showtimeId": "61b42ef5403cc5cad4bc792b",
            "status": "hold",
            "userId": null,
            "row": "A",
            "column": 1,
            "isVip": true
        },
        {
            "_id": "61b2dc5efac1c383ed99d772",
            "seatId": "61b2d0135b2065af8e65c4f9",
            "showtimeId": "61b2dc5efac1c383ed99d76f",
            "status": "free",
            "userId": null,
            "row": "A",
            "column": 1,
            "isVip": true
        },
        {
            "_id": "61b42ef5403cc5cad4bc7930",
            "seatId": "61b2d0135b2065af8e65c4fb",
            "showtimeId": "61b42ef5403cc5cad4bc792b",
            "status": "free",
            "userId": null,
            "row": "A",
            "column": 2,
            "isVip": false
        },
        {
            "_id": "61b2dc5ffac1c383ed99d774",
            "seatId": "61b2d0135b2065af8e65c4fb",
            "showtimeId": "61b2dc5efac1c383ed99d76f",
            "status": "free",
            "userId": null,
            "row": "A",
            "column": 2,
            "isVip": false
        },
        {
            "_id": "61b2dc5ffac1c383ed99d776",
            "seatId": "61b2d0135b2065af8e65c4fd",
            "showtimeId": "61b2dc5efac1c383ed99d76f",
            "status": "free",
            "userId": null,
            "row": "A",
            "column": 3,
            "isVip": false
        },
        {
            "_id": "61b42ef5403cc5cad4bc7932",
            "seatId": "61b2d0135b2065af8e65c4fd",
            "showtimeId": "61b42ef5403cc5cad4bc792b",
            "status": "free",
            "userId": null,
            "row": "A",
            "column": 3,
            "isVip": false
        },
        {
            "_id": "61b2dc5ffac1c383ed99d778",
            "seatId": "61b2d0135b2065af8e65c4ff",
            "showtimeId": "61b2dc5efac1c383ed99d76f",
            "status": "free",
            "userId": null,
            "row": "A",
            "column": 4,
            "isVip": false
        },
        {
            "_id": "61b42ef5403cc5cad4bc7934",
            "seatId": "61b2d0135b2065af8e65c4ff",
            "showtimeId": "61b42ef5403cc5cad4bc792b",
            "status": "free",
            "userId": null,
            "row": "A",
            "column": 4,
            "isVip": false
        },
        {
            "_id": "61b2dc5ffac1c383ed99d77a",
            "seatId": "61b2d0135b2065af8e65c501",
            "showtimeId": "61b2dc5efac1c383ed99d76f",
            "status": "free",
            "userId": null,
            "row": "A",
            "column": 5,
            "isVip": false
        },
        {
            "_id": "61b42ef5403cc5cad4bc7936",
            "seatId": "61b2d0135b2065af8e65c501",
            "showtimeId": "61b42ef5403cc5cad4bc792b",
            "status": "free",
            "userId": null,
            "row": "A",
            "column": 5,
            "isVip": false
        },
        {
            "_id": "61b2dc5ffac1c383ed99d77c",
            "seatId": "61b2d0135b2065af8e65c503",
            "showtimeId": "61b2dc5efac1c383ed99d76f",
            "status": "free",
            "userId": null,
            "row": "B",
            "column": 1,
            "isVip": false
        },
        {
            "_id": "61b42ef5403cc5cad4bc7938",
            "seatId": "61b2d0135b2065af8e65c503",
            "showtimeId": "61b42ef5403cc5cad4bc792b",
            "status": "free",
            "userId": null,
            "row": "B",
            "column": 1,
            "isVip": false
        },
        {
            "_id": "61b2dc5ffac1c383ed99d77e",
            "seatId": "61b2d0135b2065af8e65c505",
            "showtimeId": "61b2dc5efac1c383ed99d76f",
            "status": "free",
            "userId": null,
            "row": "B",
            "column": 2,
            "isVip": false
        },
        {
            "_id": "61b42ef5403cc5cad4bc793a",
            "seatId": "61b2d0135b2065af8e65c505",
            "showtimeId": "61b42ef5403cc5cad4bc792b",
            "status": "free",
            "userId": null,
            "row": "B",
            "column": 2,
            "isVip": false
        },
        {
            "_id": "61b42ef6403cc5cad4bc793c",
            "seatId": "61b2d0145b2065af8e65c507",
            "showtimeId": "61b42ef5403cc5cad4bc792b",
            "status": "free",
            "userId": null,
            "row": "B",
            "column": 3,
            "isVip": false
        },
        {
            "_id": "61b2dc5ffac1c383ed99d780",
            "seatId": "61b2d0145b2065af8e65c507",
            "showtimeId": "61b2dc5efac1c383ed99d76f",
            "status": "free",
            "userId": null,
            "row": "B",
            "column": 3,
            "isVip": false
        },
        {
            "_id": "61b2dc5ffac1c383ed99d782",
            "seatId": "61b2d0145b2065af8e65c509",
            "showtimeId": "61b2dc5efac1c383ed99d76f",
            "status": "free",
            "userId": null,
            "row": "B",
            "column": 4,
            "isVip": false
        },
        {
            "_id": "61b42ef6403cc5cad4bc793e",
            "seatId": "61b2d0145b2065af8e65c509",
            "showtimeId": "61b42ef5403cc5cad4bc792b",
            "status": "free",
            "userId": null,
            "row": "B",
            "column": 4,
            "isVip": false
        },
        {
            "_id": "61b42ef6403cc5cad4bc7940",
            "seatId": "61b2d0145b2065af8e65c50b",
            "showtimeId": "61b42ef5403cc5cad4bc792b",
            "status": "free",
            "userId": null,
            "row": "B",
            "column": 5,
            "isVip": false
        },
        {
            "_id": "61b2dc5ffac1c383ed99d784",
            "seatId": "61b2d0145b2065af8e65c50b",
            "showtimeId": "61b2dc5efac1c383ed99d76f",
            "status": "free",
            "userId": null,
            "row": "B",
            "column": 5,
            "isVip": false
        }
    ];

    for (let i = 0; i < data.length; i++) {
        if(!seatRows.find(element => element === data[i].row)){
            seatRows.push(data[i].row);
        }
    }

    seatRows.sort();

    const propsInforMovie = {
        id: '1',
        name: 'SHANG-CHI AND THE LEGEND OF THE TEN RINGS',
        time: '2 giờ 12 phút',
        tag: 'C13',
        avatar: 'https://images.tkbcdn.com/2/320/480/poster/d64fc5b6-51a3-11ec-8fb8-0242ac110002@webp',
    };

    const propsShowtimes = {
        id: '1',
        name: 'BHD Star 3.2',
        type: '2D',
        timeStart: '10:50',
        timeEnd: '12:27',
        date: '10/12/2021'
    }

    useEffect(() => {
        if (total === 0) {
            setSelect(false);
        } else {
            setSelect(true);
        }
    },[total]);

    return (
        <div className="sc-17x1kk6-2">
            <main className="SeatMap">
                <div className="seat-map-container">
                    <div className="tbox-container">
                        <div className="seat-map-grid">
                            <div className="seat-map-left">
                                <div className="smf-smc">
                                    <div className="smf-smc-seat-map">
                                        <div className="represent-row">
                                            <div className="rprc">
                                                {seatRows.map(element => (<div key={element} className="rprc-child">{element}</div>))}
                                            </div>
                                        </div>

                                        <div className="element-in-row">
                                            <img className="screen-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAtYAAAAoBAMAAAAoOaC1AAAAJFBMVEUsw3UAAAAqxXckxHMpxHYtxnYrwncswHQ00mkrw3covnknwXwjx+xfAAAADHRSTlNMAEEJKBtHNwQvEyHIwBDBAAABI0lEQVRo3u3avVHDQBiE4Z2TBaNwMQweSNA4IeQSYtQB6oASqMGBY6sDl2B36MCa048Vei/ap4Q3228+/MPyqPANy6PAMyyPBpsPWA6B4BGWQ0nwFZZDR3D9B9N7iAT5A9NbkSCfYHo1CfINpteSIHmAqVW8tt7D1LZ963eY2rlvTU9HtcC+taejXJFa+/6k1qXWG09HrRBTa55gSiVTa9+fxOrU2tNRLQ6tfX/SqphaezqKbYfWno5i7aQ1/bqgEzi09nTUKkatPR21mlFrT0epEGet+QvTKDlq7ekoVd+0XsM04ri1p6PSiretdzCFz4XWLzCFdtLa01HokUutv2D3V0xbezoKNYut/fUuEDhr7fuTTDlr7emo0y239te7QOTgAr5cL3C/77KUAAAAAElFTkSuQmCC" alt="Screen"/>

                                            {seatRows.map(element => {
                                                const rowElements = data.filter(seat => seat.row === element);                                            

                                                return (
                                                    <SeatRow key={element} elements={rowElements} />
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="info-right">
                                <div className="ticket-information">
                                    <div className="movie-info-ticket">
                                        <img className="avatar-movie-on-ticket" src={propsInforMovie.avatar} alt={propsInforMovie.name} />
                                        
                                        <div className="other-info-movie-on-ticket-container">
                                            <h4 className="movie-name-on-ticket">{propsInforMovie.name}</h4>

                                            <div className="other-info-movie-on-ticket">
                                                {propsInforMovie.tag}
                                                <span className="dash-vertical">|</span>
                                                {propsShowtimes.type}
                                            </div>
                                        </div>
                                    </div>

                                    <h4 className="showtime-name">{propsShowtimes.name}</h4>

                                    <div className="show-time-infor">
                                        {propsShowtimes.timeStart} - {propsShowtimes.timeEnd} | {propsShowtimes.date}
                                    </div>

                                    <div className="total-count">{total}đ</div>

                                    <PaymentButton isSelected={select}/>
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
                                            <span className="istt-t">Adult Standard - 30.000đ</span>
                                        </div>
                                        
                                        <div className="istt">
                                            <span className="istt-arbn"></span>
                                            <span className="istt-t">Adult VIP - 50.000đ</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default SeatMap