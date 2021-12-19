import React from "react";
import "./SiderQl.css";
import { Menu } from "antd";
import {
  HomeOutlined,
  ShopOutlined,
  VideoCameraOutlined,
  CalendarOutlined,
  UserOutlined,
} from "@ant-design/icons";

const SiderQl = (props) => {
  const { onHandleChangeSwitchNum } = props;

  const onClickHandle = (n) => {
    if (onHandleChangeSwitchNum) {
      onHandleChangeSwitchNum(n);
    }
  };

  return (
    <>
      <div className="logo-sider">
        <h2>Admin</h2>
      </div>
      <Menu defaultSelectedKeys={["0"]} mode="inline" className="menu-ql-color">
        <Menu.Item
          key="0"
          icon={<HomeOutlined />}
          onClick={() => onClickHandle(0)}
        >
          Tổng Quan
        </Menu.Item>
        <Menu.Item
          key="1"
          icon={<UserOutlined />}
          onClick={() => onClickHandle(1)}
        >
          Người dùng
        </Menu.Item>
        <Menu.Item
          key="2"
          icon={<ShopOutlined />}
          onClick={() => onClickHandle(2)}
        >
          Quản lý rạp
        </Menu.Item>

        <Menu.Item
          key="3"
          icon={<VideoCameraOutlined />}
          onClick={() => onClickHandle(3)}
        >
          Quản lý phim
        </Menu.Item>

        <Menu.Item
          key="4"
          icon={<CalendarOutlined />}
          onClick={() => onClickHandle(4)}
        >
          Quản lý xuất chiếu
        </Menu.Item>
      </Menu>
    </>
  );
};

export default SiderQl;
