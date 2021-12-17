import React from "react";
import { Layout } from "antd";
import AppHeader from "../../components/header/Header";
import "./Payment.css";
import PaymentIndex from "../../features/payment/PaymentIndex";
const { Header, Content } = Layout;

const ThanhToan = () => {
  return (
    <Layout className="mainLayout">
      <Header className="header">
        <AppHeader />
      </Header>
      <Content className="content-thanhtoan">
        <PaymentIndex/>
      </Content>
    </Layout>
  );
};

export default ThanhToan;
