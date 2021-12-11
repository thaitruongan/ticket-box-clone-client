import React from "react";
import "./SiderQl.css";
import { Menu } from "antd";
import {
  HomeOutlined,
  ShopOutlined,
  VideoCameraOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

const SiderQl = () => {
  return (
    <>
      <div className="logo-sider">
        <h2>Admin</h2>
      </div>
      <Menu defaultSelectedKeys={["1"]} mode="inline" className="menu-ql-color">
        <Menu.Item key="1" icon={<HomeOutlined />}>
          Tổng Quan
        </Menu.Item>
        <SubMenu key="sub1" icon={<ShopOutlined />} title="Rạp">
          <Menu.Item key="2">Quản lý rạp</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<VideoCameraOutlined />} title="Phim">
          <Menu.Item key="3">Danh sách</Menu.Item>
          <Menu.Item key="4">Tên phim</Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" icon={<CalendarOutlined />} title="Xuất Chiếu">
          <Menu.Item key="5">Quản lý xuất chiếu</Menu.Item>
        </SubMenu>
      </Menu>
    </>
  );
};

export default SiderQl;
