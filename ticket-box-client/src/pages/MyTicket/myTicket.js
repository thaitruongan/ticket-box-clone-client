import React,{useEffect,useState} from "react";
import "./myTicket.css";
import { Layout } from "antd";
import { useSelector } from "react-redux";
import { selectToken } from "../../app/userSlice";
import ticketempty from "../../assets/ticketempty.png";
import AppHeader from "../../components/header/Header";
import AppNav from "../../components/nav/Nav";
import billAPI from "../../api/billAPI";


const { Header, Sider, Content } = Layout;

function MyTicket() {
    const token = useSelector(selectToken);
    const [bills, setBills] = useState([]);
    const handleDate = (date) => {
        const d = new Date(date);
        const getD = d.getDate();
        const getM = d.getMonth() + 1;
        const getY = d.getFullYear();
    
        return `${getD}/${getM}/${getY}`;
      };
    
      const handleTime = (time) => {
        const t = new Date(time);
        const getH = t.getHours();
        const getM = t.getMinutes();
        const getS = t.getSeconds();
    
        return `${getH}:${getM}:${getS}`;
      };
    const fetchAllBill = async() =>{
        try{
            const res = await billAPI.getAll(token)
            console.log(res)
            setBills(res.data)
        }catch(err){
            console.log(err)
        }

    };
    
    useEffect(() => {
        fetchAllBill();
      },[token]);
    
    return (
        <Layout className="mainLayout">
        <Header className="header">
            <AppHeader />
        </Header>
        <Layout className="nav">
            <Sider
            style={{
                top: "76px",
                overflow: "auto",
                height: "89vh",
                position: "fixed",
                left: 0,
            }}
            className="sider"
            >
            <AppNav />
            </Sider>
            <Content className="main-home">
            <div className="container-home">
                <div className="content-home">
                <h2>Vé của bạn</h2>
                {bills.length === 0 ? (<img src={ticketempty} className="ticketEmpty"/>) : (
                    <>
                    <div className="main-list-movies">
                        <div className="list-movies">
                        {bills.map((bill)=>{
                            return(
                                <div className="list-style-card">
                                    <div className="list-card-movies">
                                    <div className="list-card-movies_cover">
                                        <picture>
                                            <img
                                            src={`https://ticket-box-bs.herokuapp.com/image/${bill.movie.image}`}
                                            alt={bill.movie.name}
                                            />
                                        </picture>
                                        </div>
                                        <div className="list-card-movies_body1">
                                            <div className="list-title">
                                            <h4>{bill.movie.name}</h4>
                                            </div>
                                            <div className="list-info">
                                            <span>{bill.movie.label}</span>
                                            </div>
                                            <div className="list-info">
                                            <span>Phòng chiếu: {bill.room.name}</span>
                                            <div className="list-info">
                                            <span>Ghế: {bill._tickets.map(ticket => {
                                                return (<>{ticket.row}{ticket.column+" "}</>)
                                            })}</span>
                                            </div>
                                            </div>
                                            <div className="list-info">
                                            <span>Ngày chiếu: {handleDate(bill.timeStart)+" "}| Giờ chiếu: {handleTime(bill.timeStart)+ " giờ"}</span>
                                            </div>
                                            <div className="list-info">
                                            <span>Tổng giá: {bill.totalPrice} VND</span>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                
                            )
                        })}
                        </div>
                    </div>
                    </>
                )}

                </div>
            </div>
            </Content>
        </Layout>
        </Layout>
    );
}

export default MyTicket;
