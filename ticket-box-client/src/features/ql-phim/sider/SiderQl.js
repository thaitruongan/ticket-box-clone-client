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

const { SubMenu } = Menu;

const SiderQl = (props) => {
  const {onHandleChangeSwitchNum} = props;

  const onClickHandle = n => {
    if(onHandleChangeSwitchNum){
      onHandleChangeSwitchNum(n);
    }
  };

  return (
    <>
      <div className="logo-sider">
        <h2>Admin</h2>
      </div>
      <Menu defaultSelectedKeys={["0"]} mode="inline" className="menu-ql-color">
        <Menu.Item key="0" icon={<HomeOutlined />} onClick={() => onClickHandle(0)} >
          Tổng Quan
        </Menu.Item>
        <Menu.Item key="1" icon={<UserOutlined/>} onClick={() => onClickHandle(1)} >
          Người dùng
        </Menu.Item>
        <SubMenu key="showtimes" icon={<ShopOutlined />} title="Rạp">
          <Menu.Item key="2" onClick={() => onClickHandle(2)} >Quản lý rạp</Menu.Item>
        </SubMenu>
        <SubMenu key="movie" icon={<VideoCameraOutlined />} title="Phim">
          <Menu.Item key="3" onClick={() => onClickHandle(3)} >Danh sách</Menu.Item>
          <Menu.Item key="4" onClick={() => onClickHandle(4)} >Tên phim</Menu.Item>
        </SubMenu>
        <SubMenu key="events" icon={<CalendarOutlined />} title="Xuất Chiếu">
          <Menu.Item key="5" onClick={() => onClickHandle(5)} >Quản lý xuất chiếu</Menu.Item>
          <Menu.Item key="6" onClick={() => onClickHandle(6)} >Xuất chiếu</Menu.Item>
        </SubMenu>
      </Menu>
    </>
  );
};

export default SiderQl;
