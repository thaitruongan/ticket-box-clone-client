import React, { useState } from "react";
import HeaderQl from "../../features/ql-phim/header/HeaderQl";
import SiderQl from "../../features/ql-phim/sider/SiderQl";
import ListQl from "../../features/ql-phim/list/ListQl";
import './QLPhimPage.css'
import { Button, Layout } from "antd";
import UserManager from "../../features/userManager/UserManager";
import EventManager from "../../features/eventManager/EventManager";
import AddFilm from "../../features/ql-phim/add-film/AddFilm";
import { useSelector } from "react-redux";
import { selectCurrentUser, selectToken } from "../../app/userSlice";
import { useNavigate } from "react-router";

const { Header, Content, Sider } = Layout;

const QLPhimPage = () => {
  const navigate = useNavigate();
  const token = useSelector(selectToken);
  const currentUser = useSelector(selectCurrentUser);
  const [switchNum, setSwitchNum] = useState(0);
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  const handleChangeSwitchNum = (n) => {
    setSwitchNum(n);
  };

  const switchComponent = (n) => {
    switch (n) {
      case 0:
        return;
      case 1:
        return <UserManager  />;
      case 2:
        return;
      case 3:
        return <ListQl />;
      case 4:
        return <AddFilm />;
      case 5:
        return <EventManager />;
      case 6:
        return;

      default:
        return;
    }
  };

  if (token && currentUser.permission.find(per => per === "61b9da0a1640b2f05aef2bf4")) {
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
    
            <Content
              style={{
                margin: "0 16px",
                justifyContent: "center",
              }}
            >
              {switchComponent(switchNum)}
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  } else {
    return (
      <div className="mngp-nlgi">
        <h2>Bạn cần đăng nhập vào tài khoản của mình</h2>
        <Button className="btn-mngp-nlgi" type="primary" onClick={() => navigate("/login")}>Nhấp vào đây để quay lại</Button>
      </div>
    )    
  }
};

export default QLPhimPage;
