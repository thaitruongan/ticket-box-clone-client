import React from "react";
import { Layout } from "antd";
import AppHeader from "../../components/header/Header";
import AppNav from "../../components/nav/Nav";
import Buy from "../../features/buy/Buy";
import "./Buy.css"

const { Header, Sider, Content } = Layout;

const buy = () => {
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
        >
          <AppNav />
        </Sider>
        <Content>
          <Buy />
        </Content>
      </Layout>
    </Layout>
  );
};

export default buy;
