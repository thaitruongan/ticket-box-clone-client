import React, { useState } from "react";
import HeaderQl from "../../features/ql-phim/header/HeaderQl";
import SiderQl from "../../features/ql-phim/sider/SiderQl";
import AddFilm from "../../features/ql-phim/add-film/AddFilm";

import { Layout } from "antd";
import UserManager from "../../features/userManager/UserManager";
import EventManager from "../../features/eventManager/EventManager";

const { Header, Content, Sider } = Layout;

const QLPhimPage = () => {
  const [switchNum, setSwitchNum] = useState(0); 
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  const handleChangeSwitchNum = n => {
    setSwitchNum(n);
  };

  const switchComponent = n => {
    switch (n) {
      case 0:
        return
      case 1:
        return <UserManager />
      case 2:
        return
      case 3:
        return <AddFilm />
      case 4:
        return
      case 5: <EventManager />
        return
    
      default:
        return
    }
  };

  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsed={collapsed}
          onCollapse={onCollapse}
          className="sider-ql"
        >
          <SiderQl onHandleChangeSwitchNum={handleChangeSwitchNum} />
        </Sider>
        <Layout className="site-layout">
          <Header className="header-ql-page">
            <HeaderQl />
          </Header>
          <Content style={{ margin: "0 16px", display: 'flex', justifyContent: "center" }}>
            {switchComponent(switchNum)}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default QLPhimPage;
