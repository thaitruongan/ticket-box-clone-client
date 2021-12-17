import React from "react";
import "./Ticket.css";
import { Checkbox, Button } from "antd";

const Ve = () => {
  const onChange = (e) => {
    console.log(`yes = ${e.target.checked}`);
  };
  return (
    <div className="ve">
      <div className="poster">
        <img
          src="https://images.tkbcdn.com/2/420/600/poster/8106969d-51a6-11ec-8fb8-0242ac110002@webp"
          alt="tenphim"
        />
        <div className="thong-tin-ve-phim">
          <div className="phim-in-ve">
            <h2>MORBIUS</h2>
          </div>
          <div className="gio-in-ve">
            <span>C18</span>
            <span> | </span>
            <span>1 giờ 28 phút</span>
          </div>
        </div>
      </div>
      <div className="gach-ngang"></div>
      <div className="info-rap-ve">
        <div className="rap-ve">
          <h2>BHD Star 3.2</h2>
        </div>
        <div className="phong-ve">
          <p>Phòng chiếu 2</p>
          <p>12:50 - 14:18, 09/12/2021</p>
          <p>D10, D11</p>
        </div>
        <div className="loai-va-gia">
          <div className="loai-ve">
            <p>Aduit VIP 2D (X2)</p>
          </div>
          <div className="gia-ve">
            <p>140.000đ</p>
          </div>
        </div>
      </div>
      <div className="gach-ngang"></div>
      <div className="thanh-tien-ve">
        <div className="thanh-tien-ve-gia">
          <h2>140.000đ</h2>
        </div>
        <div className="check-box-access">
          <Checkbox onChange={onChange}>
            <p>
              Tôi đồng ý với <a href="/">Điều khoản sử dụng và mua vé</a> cho
              người có độ tuổi phù hợp
            </p>
          </Checkbox>
        </div>
        <div>
          <Button type="primary" shape="round" size="large" className="button-thanh-toan">
            Thanh Toán
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Ve;
