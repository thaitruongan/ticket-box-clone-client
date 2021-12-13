import React, { useState } from "react";
import HeaderQl from "../../features/ql-phim/header/HeaderQl";
import SiderQl from "../../features/ql-phim/sider/SiderQl";
import AddFilm from "../../features/ql-phim/add-film/AddFilm";

import { Layout } from "antd";
const { Header, Content, Sider } = Layout;

export const QLAddPhimPage = () => {
    const [collapsed, setCollapsed] = useState(false);
  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsed={collapsed}
          onCollapse={onCollapse}
          className="sider-ql"
        >
          <SiderQl />
        </Sider>
        <Layout className="site-layout">
          <Header className="header-ql-page">
            <HeaderQl />
          </Header>
          <Content style={{ margin: "0 16px" }}>
            <AddFilm />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
