import "./Home.css";
import "antd/dist/antd.css";
import { Layout } from "antd";
import AppHeader from "../components/header/Header";
import AppNav from "../components/nav/Nav";
import AppBanner from "../components/banner/Banner";

const { Header, Sider, Content } = Layout;

function Home() {
  return (
    <Layout className="mainLayout">
      <Header className="header">
        <AppHeader />
      </Header>
      <Layout>
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
      </Layout>
      <Layout>
        <AppBanner />
        <Content>Content</Content>
      </Layout>
    </Layout>
  );
}

export default Home;
