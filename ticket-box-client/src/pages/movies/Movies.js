import React from "react";
import { Layout } from "antd";
import AppHeader from "../../components/header/Header";
import AppNav from "../../components/nav/Nav";
import AppBanner from "../../components/banner/Banner";
import ListMovies from "../../features/list-movies/ListMovies";
import "./Movies.css";

const { Header, Sider, Content } = Layout;

const Movies = () => {
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
        <Content className="main-movies">
          <div className="container-movies">
            <div className="content-movies">
              <AppBanner />
              <ListMovies />
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Movies;
