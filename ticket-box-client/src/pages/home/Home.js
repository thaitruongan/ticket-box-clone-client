import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { Layout } from "antd";
import AppHeader from "../../components/header/Header";
import AppNav from "../../components/nav/Nav";
import AppBanner from "../../components/banner/Banner";
import CardMovies from "../../features/card-movies/CardMovies";
import NameCard from "../../features/card-movies/NameCard";

const { Header, Sider, Content } = Layout;

function Home() {
  const navigate = useNavigate();
  const OnClick = () => {
    navigate("/movies");
  };
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
        <Content className="main-home">
          <div className="container-home">
            <div className="content-home">
              <AppBanner />
              <NameCard />
              <CardMovies />
              <div className="bnt-them-home">
                <button onClick={OnClick} className="xem-them large primary">
                  Xem thêm
                </button>
              </div>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default Home;
