import React from "react";
import { Layout } from "antd";
import AppHeader from "../../components/header/Header";
import "./ThanhToan.css";
import ThanhToanIndex from "../../features/thanh-toan/ThanhToanIndex";
const { Header, Content } = Layout;

const ThanhToan = () => {
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
