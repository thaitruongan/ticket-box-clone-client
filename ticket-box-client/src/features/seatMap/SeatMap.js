import React, { useEffect, useRef, useState } from "react";
import PaymentButton from "../../commons/paymentButton/PaymentButton";
import SeatRow from "../../commons/seat/SeatRow";
import './SeatMap.css';
import socketIOClient from "socket.io-client";
import AppHeader from "../../components/header/Header";

const host = "http://localhost:8000";

const SeatMap = () => {
    const socketRef = useRef();
    const [countdown, setCountdown] = useState(5);
    const [isCountdown, setIsCountdown] = useState(false);
    const [total, setTotal] = useState(0);
    const [selectedList, setSelectedList] = useState([]);
    const [selectedListServer, setSelectedListServer] = useState([]);
    const [select, setSelect] = useState(false);
    const [idSocket, setIdSocket] = useState();
    const seatRows =[];

    let format = new Intl.NumberFormat("vi-Vn", {
        style: "currency",
        currency: "VND",
    })

    const handleSelected = (tic) => {
        if (selectedList.find(tick => tick._id === tic._id)) {
            setSelectedList([...selectedList.filter(tick => tick._id !== tic._id)])
            socketRef.current.emit("ClientSendDataRemove", tic)
            if (tic.seat.isVip) {
                setTotal(total - 50000);
            } else {
                setTotal(total - 30000);
            }
        } else {
            setSelectedList([...selectedList, tic])
            socketRef.current.emit("ClientSendData", tic)
            if (tic.seat.isVip) {
                setTotal(total + 50000);
            } else {
                setTotal(total + 30000);
            }
        }
    };

    const data =[
        {
        "_id": "61b2dc5efac1c383ed99d772",
        "seatId": "61b2d0135b2065af8e65c4f9",
        "showtimeId": "61b2dc5efac1c383ed99d76f",
        "status": "hold",
        "userId": null,
        "__v": 0,
        "seat": [
            {
                "_id": "61b2d0135b2065af8e65c4f9",
                "row": "A",
                "column": 1,
                "isVip": true,
                "isAvailable": true,
                "roomId": "61b2d0135b2065af8e65c4f7",
                "createBy": "61b1cb0b2555becdff46f0e4",
                "createdAt": "2021-12-10T03:56:21.156Z",
                "updatedAt": null,
                "updateBy": null,
                "version": 0,
                "oldVersion": [],
                "__v": 0
            }
        ]
    },
    {
        "_id": "61b2dc5ffac1c383ed99d774",
        "seatId": "61b2d0135b2065af8e65c4fb",
        "showtimeId": "61b2dc5efac1c383ed99d76f",
        "status": "free",
        "userId": null,
        "__v": 0,
        "seat": [
            {
                "_id": "61b2d0135b2065af8e65c4fb",
                "row": "A",
                "column": 2,
                "isVip": true,
                "isAvailable": true,
                "roomId": "61b2d0135b2065af8e65c4f7",
                "createBy": "61b1cb0b2555becdff46f0e4",
                "createdAt": "2021-12-10T03:56:21.156Z",
                "updatedAt": null,
                "updateBy": null,
                "version": 0,
                "oldVersion": [],
                "__v": 0
            }
        ]
    },
    {
        "_id": "61b2dc5ffac1c383ed99d776",
        "seatId": "61b2d0135b2065af8e65c4fd",
        "showtimeId": "61b2dc5efac1c383ed99d76f",
        "status": "free",
        "userId": null,
        "__v": 0,
        "seat": [
            {
                "_id": "61b2d0135b2065af8e65c4fd",
                "row": "A",
                "column": 3,
                "isVip": true,
                "isAvailable": true,
                "roomId": "61b2d0135b2065af8e65c4f7",
                "createBy": "61b1cb0b2555becdff46f0e4",
                "createdAt": "2021-12-10T03:56:21.156Z",
                "updatedAt": null,
                "updateBy": null,
                "version": 0,
                "oldVersion": [],
                "__v": 0
            }
        ]
    },
    {
        "_id": "61b2dc5ffac1c383ed99d778",
        "seatId": "61b2d0135b2065af8e65c4ff",
        "showtimeId": "61b2dc5efac1c383ed99d76f",
        "status": "free",
        "userId": null,
        "__v": 0,
        "seat": [
            {
                "_id": "61b2d0135b2065af8e65c4ff",
                "row": "A",
                "column": 4,
                "isVip": true,
                "isAvailable": true,
                "roomId": "61b2d0135b2065af8e65c4f7",
                "createBy": "61b1cb0b2555becdff46f0e4",
                "createdAt": "2021-12-10T03:56:21.156Z",
                "updatedAt": null,
                "updateBy": null,
                "version": 0,
                "oldVersion": [],
                "__v": 0
            }
        ]
    },
    {
        "_id": "61b2dc5ffac1c383ed99d77a",
        "seatId": "61b2d0135b2065af8e65c501",
        "showtimeId": "61b2dc5efac1c383ed99d76f",
        "status": "free",
        "userId": null,
        "__v": 0,
        "seat": [
            {
                "_id": "61b2d0135b2065af8e65c501",
                "row": "A",
                "column": 5,
                "isVip": true,
                "isAvailable": true,
                "roomId": "61b2d0135b2065af8e65c4f7",
                "createBy": "61b1cb0b2555becdff46f0e4",
                "createdAt": "2021-12-10T03:56:21.156Z",
                "updatedAt": null,
                "updateBy": null,
                "version": 0,
                "oldVersion": [],
                "__v": 0
            }
        ]
    },
    {
        "_id": "61b2dc5ffac1c383ed99d77c",
        "seatId": "61b2d0135b2065af8e65c503",
        "showtimeId": "61b2dc5efac1c383ed99d76f",
        "status": "free",
        "userId": null,
        "__v": 0,
        "seat": [
            {
                "_id": "61b2d0135b2065af8e65c503",
                "row": "B",
                "column": 1,
                "isVip": false,
                "isAvailable": true,
                "roomId": "61b2d0135b2065af8e65c4f7",
                "createBy": "61b1cb0b2555becdff46f0e4",
                "createdAt": "2021-12-10T03:56:21.156Z",
                "updatedAt": null,
                "updateBy": null,
                "version": 0,
                "oldVersion": [],
                "__v": 0
            }
        ]
    },
    {
        "_id": "61b2dc5ffac1c383ed99d77e",
        "seatId": "61b2d0135b2065af8e65c505",
        "showtimeId": "61b2dc5efac1c383ed99d76f",
        "status": "free",
        "userId": null,
        "__v": 0,
        "seat": [
            {
                "_id": "61b2d0135b2065af8e65c505",
                "row": "B",
                "column": 2,
                "isVip": false,
                "isAvailable": true,
                "roomId": "61b2d0135b2065af8e65c4f7",
                "createBy": "61b1cb0b2555becdff46f0e4",
                "createdAt": "2021-12-10T03:56:21.156Z",
                "updatedAt": null,
                "updateBy": null,
                "version": 0,
                "oldVersion": [],
                "__v": 0
            }
        ]
    },
    {
        "_id": "61b2dc5ffac1c383ed99d780",
        "seatId": "61b2d0145b2065af8e65c507",
        "showtimeId": "61b2dc5efac1c383ed99d76f",
        "status": "free",
        "userId": null,
        "__v": 0,
        "seat": [
            {
                "_id": "61b2d0145b2065af8e65c507",
                "row": "B",
                "column": 3,
                "isVip": false,
                "isAvailable": true,
                "roomId": "61b2d0135b2065af8e65c4f7",
                "createBy": "61b1cb0b2555becdff46f0e4",
                "createdAt": "2021-12-10T03:56:21.156Z",
                "updatedAt": null,
                "updateBy": null,
                "version": 0,
                "oldVersion": [],
                "__v": 0
            }
        ]
    },
    {
        "_id": "61b2dc5ffac1c383ed99d782",
        "seatId": "61b2d0145b2065af8e65c509",
        "showtimeId": "61b2dc5efac1c383ed99d76f",
        "status": "free",
        "userId": null,
        "__v": 0,
        "seat": [
            {
                "_id": "61b2d0145b2065af8e65c509",
                "row": "B",
                "column": 4,
                "isVip": false,
                "isAvailable": true,
                "roomId": "61b2d0135b2065af8e65c4f7",
                "createBy": "61b1cb0b2555becdff46f0e4",
                "createdAt": "2021-12-10T03:56:21.156Z",
                "updatedAt": null,
                "updateBy": null,
                "version": 0,
                "oldVersion": [],
                "__v": 0
            }
        ]
    },
    {
        "_id": "61b2dc5ffac1c383ed99d784",
        "seatId": "61b2d0145b2065af8e65c50b",
        "showtimeId": "61b2dc5efac1c383ed99d76f",
        "status": "free",
        "userId": null,
        "__v": 0,
        "seat": [
            {
                "_id": "61b2d0145b2065af8e65c50b",
                "row": "B",
                "column": 5,
                "isVip": false,
                "isAvailable": true,
                "roomId": "61b2d0135b2065af8e65c4f7",
                "createBy": "61b1cb0b2555becdff46f0e4",
                "createdAt": "2021-12-10T03:56:21.156Z",
                "updatedAt": null,
                "updateBy": null,
                "version": 0,
                "oldVersion": [],
                "__v": 0
            }
        ]
    }];
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

    for (let i = 0; i < data.length; i++) {
        if(!seatRows.find(element => element === data[i].seat[0].row)){
            seatRows.push(data[i].seat[0].row);
        }
    }

    seatRows.sort();

    if (isCountdown) {
        if (countdown > 0) {
          setTimeout(() => setCountdown(countdown - 1), 1000);
        } else {
            const newList = selectedList;
            socketRef.current.emit("Timeout", newList);
            setIsCountdown(false);
            setCountdown(5);
            setSelectedList([]);
            setTotal(0);
          //do some thing with ListServer
        }
    }

    useEffect(() => {
        if (total === 0) {
            setSelect(false);
        } else {
            setSelect(true);
            setIsCountdown(true);
        }

        socketRef.current = socketIOClient.connect(host);

        socketRef.current.on("getId", data => {
            setIdSocket(data)
        })

        socketRef.current.on("serverSendData", function (data) {
            setSelectedListServer([...selectedListServer, data]);
        })

        socketRef.current.on("serverSendDataRemove", function (data) {
            setSelectedListServer([...selectedListServer.filter(tick => tick._id !== data._id)])
        })

        socketRef.current.on("ServerSendDataTimeOut", function (data) {
            const newList = selectedListServer;
            console.log(newList);
            for (let i = data.length - 1; i >= 0; i--) {
                newList.filter(tick => tick._id !== data[i]._id);
            }
            setSelectedListServer(newList);
        })

        return () => {
          socketRef.current.disconnect();
        };
    },[total, selectedListServer]);

    return (
        <div className="sc-17x1kk6-2">
            <AppHeader/>
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
                                                const rowElements = data.filter(tic => tic.seat[0].row === element);                                            

                                                return (
                                                    <SeatRow key={element} elements={rowElements} onClickOnSeat={handleSelected} selectedList={selectedList} selectedListServer={selectedListServer}/>
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

                                    <div className="total-count">{format.format(total)}</div>

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