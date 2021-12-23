import React from "react";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const homepage = () => {
    navigate("/");
  };
  const moviespage = () => {
    navigate("/movies");
  };

  return (
    <div className="container">
      <div className="nav">
        <Menu className="nav-color" defaultSelectedKeys={["1"]} >
          <Menu.Item
            key="1"
            onClick={homepage}
            icon={<img src={home} alt="home" />}
            style={{ height: "2rem", lineHeight: "1.7rem", fontSize: "13px", marginBottom: "-1.5px" }}
            className="menu-item"
          >
            Trang chủ
          </Menu.Item>

          <Menu.Item
            key="2"
            onClick={moviespage}
            icon={<img src={phim} alt="phim" />}
            style={{ height: "2rem", lineHeight: "1.7rem", fontSize: "13px", marginBottom: "-1.5px" }}
            className="menu-item"
          >
            Phim ảnh
          </Menu.Item>

          <Menu.Item
            key="3"
            onClick={homepage}
            icon={<img src={nhac} alt="nhac" />}
            style={{ height: "2rem", lineHeight: "1.7rem", fontSize: "13px", marginBottom: "-1.5px" }}
            className="menu-item"
          >
            Nhạc sống
          </Menu.Item>

          <Menu.Item
            key="4"
            onClick={homepage}
            icon={<img src={sankhau} alt="sankhau" />}
            style={{ height: "2rem", lineHeight: "1.7rem", fontSize: "13px", marginBottom: "-1.5px" }}
            className="menu-item"
          >
            Sân khấu - Nghệ thuật
          </Menu.Item>

          <Menu.Item
            key="5"
            onClick={homepage}
            icon={<img src={night} alt="night" />}
            style={{ height: "2rem", lineHeight: "1.7rem", fontSize: "13px", marginBottom: "-1.5px" }}
            className="menu-item"
          >
            Nightlife
          </Menu.Item>

          <Menu.Item
            key="6"
            onClick={homepage}
            icon={<img src={hoithao} alt="hoithao" />}
            style={{ height: "2rem", lineHeight: "1.7rem", fontSize: "13px", marginBottom: "-1.5px" }}
            className="menu-item"
          >
            Hội thảo - Cộng đồng
          </Menu.Item>

          <Menu.Item
            key="7"
            onClick={homepage}
            icon={<img src={khoahoc} alt="khoahoc" />}
            style={{ height: "2rem", lineHeight: "1.7rem", fontSize: "13px", marginBottom: "-1.5px" }}
            className="menu-item"
          >
            Khoá học
          </Menu.Item>

          <Menu.Item
            key="8"
            onClick={homepage}
            icon={<img src={dulich} alt="dulich" />}
            style={{ height: "2rem", lineHeight: "1.7rem", fontSize: "13px", marginBottom: "-1.5px" }}
            className="menu-item"
          >
            Tham quan - Du lịch
          </Menu.Item>

          <Menu.Item
            key="9"
            onClick={homepage}
            icon={<img src={thethao} alt="thethao" />}
            style={{ height: "2rem", lineHeight: "1.7rem", fontSize: "13px", marginBottom: "-1.5px" }}
            className="menu-item"
          >
            Thể thao
          </Menu.Item>

          <Menu.Item
            key="10"
            onClick={homepage}
            icon={<img src={skhcm} alt="skhcm" />}
            style={{ height: "2rem", lineHeight: "1.7rem", fontSize: "13px", marginBottom: "-1.5px" }}
            className="menu-item"
          >
            Sự kiện tại TP. Hồ Chí Minh
          </Menu.Item>

          <Menu.Item
            key="11"
            onClick={homepage}
            icon={<img src={skhn} alt="skhn" />}
            style={{ height: "2rem", lineHeight: "1.7rem", fontSize: "13px", marginBottom: "-1.5px" }}
            className="menu-item"
          >
            Sự kiện tại Hà Nội
          </Menu.Item>

          <Menu.Item
            key="12"
            onClick={homepage}
            icon={<img src={blog} alt="blog" />}
            style={{ height: "2rem", lineHeight: "1.7rem", fontSize: "13px", marginBottom: "-1.5px" }}
            className="menu-item"
          >
            Blog
          </Menu.Item>

          <Menu.Item
            key="13"
            onClick={homepage}
            icon={<img src={tochuc} alt="tochuc" />}
            style={{ height: "2rem", lineHeight: "1.7rem", fontSize: "13px", marginBottom: "-1.5px" }}
            className="menu-item"
          >
            Dành cho nhà tổ chức
          </Menu.Item>

          <Menu.Item
            key="14"
            onClick={homepage}
            icon={<img src={lienhe} alt="lienhe" />}
            style={{ height: "2rem", lineHeight: "1.7rem", fontSize: "13px", marginBottom: "-1.5px" }}
            className="menu-item"
          >
            Liên hệ
          </Menu.Item>

          <Menu.Item
            key="15"
            onClick={homepage}
            icon={<img src={cauhoi} alt="cauhoi" />}
            style={{ height: "2rem", lineHeight: "1.7rem", fontSize: "13px", marginBottom: "-1.5px" }}
            className="menu-item"
          >
            Câu hỏi thường gặp
          </Menu.Item>

          <Menu.Item
            key="16"
            onClick={homepage}
            icon={<img src={dieukhoan} alt="dieukhoan" />}
            style={{ height: "2rem", lineHeight: "1.7rem", fontSize: "13px", marginBottom: "-1.5px" }}
            className="menu-item"
          >
            Điều khoản sử dụng
          </Menu.Item>

          <Menu.Item
            key="17"
            onClick={homepage}
            icon={<img src={about} alt="about" />}
            style={{ height: "2rem", lineHeight: "1.7rem", fontSize: "13px", marginBottom: "-1.5px" }}
            className="menu-item"
          >
            Về chúng tôi
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
};

export default AppNav;
