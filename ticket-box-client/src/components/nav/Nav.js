import React from "react";
import { Menu } from "antd";
import blog from "../../images/blog.png";
import cauhoi from "../../images/cauhoi.png";
import dulich from "../../images/dulich.png";
import hoithao from "../../images/hoithao.png";
import home from "../../images/home.png";
import khoahoc from "../../images/khoahoc.png";
import lienhe from "../../images/lienhe.png";
import nhac from "../../images/nhac.png";
import night from "../../images/night.png";
import phim from "../../images/phim.png";
import sankhau from "../../images/sankhau.png";
import skhcm from "../../images/skhcm.png";
import skhn from "../../images/skhn.png";
import thethao from "../../images/thethao.png";
import tochuc from "../../images/tochuc.png";
import dieukhoan from "../../images/dieukhoan.png";
import about from "../../images/about.png";
import "./Nav.css";

const AppNav = () => {
  return (
    <div className="container">
      <div className="nav">
        <Menu className="nav-color" defaultSelectedKeys={["1"]}>
          <a href="/">
            <Menu.Item key="1" icon={<img src={home} alt="home" />}>
              Trang chủ
            </Menu.Item>
          </a>
          <a href="/movies">
            <Menu.Item key="2" icon={<img src={phim} alt="phim" />}>
              Phim ảnh
            </Menu.Item>
          </a>
          <a href="/">
            <Menu.Item key="3" icon={<img src={nhac} alt="nhac" />}>
              Nhạc sống
            </Menu.Item>
          </a>
          <a href="/admin">
            <Menu.Item key="4" icon={<img src={sankhau} alt="sankhau" />}>
              Sân khấu - Nghệ thuật
            </Menu.Item>
          </a>
          <a href="/">
            <Menu.Item key="5" icon={<img src={night} alt="night" />}>
              Nightlife
            </Menu.Item>
          </a>
          <a href="/">
            <Menu.Item key="6" icon={<img src={hoithao} alt="hoithao" />}>
              Hội thảo - Cộng đồng
            </Menu.Item>
          </a>
          <a href="/">
            <Menu.Item key="7" icon={<img src={khoahoc} alt="khoahoc" />}>
              Khoá học
            </Menu.Item>
          </a>
          <a href="/">
            <Menu.Item key="8" icon={<img src={dulich} alt="dulich" />}>
              Tham quan - Du lịch
            </Menu.Item>
          </a>
          <a href="/">
            <Menu.Item key="9" icon={<img src={thethao} alt="thethao" />}>
              Thể thao
            </Menu.Item>
          </a>
          <a href="/">
            <Menu.Item key="10" icon={<img src={skhcm} alt="skhcm" />}>
              Sự kiện tại TP. Hồ Chí Minh
            </Menu.Item>
          </a>
          <a href="/">
            <Menu.Item key="11" icon={<img src={skhn} alt="skhn" />}>
              Sự kiện tại Hà Nội
            </Menu.Item>
          </a>
          <a href="/">
            <Menu.Item key="12" icon={<img src={blog} alt="blog" />}>
              Blog
            </Menu.Item>
          </a>
          <a href="/">
            <Menu.Item key="13" icon={<img src={tochuc} alt="tochuc" />}>
              Dành cho nhà tổ chức
            </Menu.Item>
          </a>
          <a href="/">
            <Menu.Item key="14" icon={<img src={lienhe} alt="lienhe" />}>
              Liên hệ
            </Menu.Item>
          </a>
          <a href="/">
            <Menu.Item key="15" icon={<img src={cauhoi} alt="cauhoi" />}>
              Câu hỏi thường gặp
            </Menu.Item>
          </a>
          <a href="/">
            <Menu.Item key="16" icon={<img src={dieukhoan} alt="dieukhoan" />}>
              Điều khoản sử dụng
            </Menu.Item>
          </a>
          <a href="/">
            <Menu.Item key="16" icon={<img src={about} alt="about" />}>
              Về chúng tôi
            </Menu.Item>
          </a>
        </Menu>
      </div>
    </div>
  );
};

export default AppNav;
