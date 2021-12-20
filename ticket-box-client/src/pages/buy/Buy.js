import React, { useEffect } from "react";
import { Layout } from "antd";
import AppHeader from "../../components/header/Header";
import AppNav from "../../components/nav/Nav";
import Buy from "../../features/buy/Buy";
import "./Buy.css"
import { useLocation, useNavigate } from "react-router";

const { Header, Sider, Content } = Layout;

const BuyPage = () => {
  const navigate = useNavigate();
  const detail = useLocation();

  useEffect(() => {
    if (detail.state === null) {
      navigate("/movies");
    }
  },[detail.state, navigate])

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
          <Buy movieDetail={detail.state} />
        </Content>
      </Layout>
    </Layout>
  );
};

export default BuyPage;
