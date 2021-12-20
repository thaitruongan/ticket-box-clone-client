import React from "react";
import { Layout } from "antd";
import AppHeader from "../../components/header/Header";
import "./Payment.css";
import ThanhToanIndex from "../../features/payment/PaymentIndex";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../app/userSlice";
import { useLocation } from "react-router";
const { Header, Content } = Layout;

const ThanhToan = () => {
  const state = useLocation();
  const total = state.state.total;
  const ticketList = state.state.selectedList;
  const currentUser = useSelector(selectCurrentUser);
  console.log(total);
  console.log(ticketList);
  console.log(currentUser);
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
        <ThanhToanIndex/>
      </Content>
    </Layout>
  );
};

export default ThanhToan;
