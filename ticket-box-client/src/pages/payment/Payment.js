import React from "react";
import { Layout } from "antd";
import AppHeader from "../../components/header/Header";
import "./Payment.css";
import { useLocation } from "react-router";
import PaymentIndex from "../../features/payment/PaymentIndex";
const { Header, Content } = Layout;

const ThanhToan = () => {
  const state = useLocation();
  const total = state.state.total;
  const ticketList = state.state.selectedList;
  const showtime = state.state.showtime;
  window.addEventListener("beforeunload", (ev) => 
  {  
    ev.preventDefault();
    return ev.returnValue = 'Are you sure you want to close?';
  });
  return (
    <Layout className="mainLayout">
      <Header className="header">
        <AppHeader />
      </Header>
      <Content className="content-thanhtoan">
        <PaymentIndex total={total} ticketList={ticketList} showtime={showtime} />
      </Content>
    </Layout>
  );
};

export default ThanhToan;
