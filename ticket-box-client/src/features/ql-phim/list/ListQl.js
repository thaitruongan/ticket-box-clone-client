import React from "react";
import { ReactComponent as Search } from "../../../images/search.svg";
import { Input, DatePicker, Button } from "antd";
import { VideoCameraAddOutlined } from "@ant-design/icons";
import moment from "moment";
import "./ListQl.css";

const ListQl = () => {
  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];
  return (
    <>
      <div className="content-ql">
        <h2>Danh Sách Phim</h2>
        <div className="button-add-film">
          <Button
            type="primary"
            shape="round"
            icon={<VideoCameraAddOutlined />}
            size="large"
          >
            Thêm Phim
          </Button>
        </div>
      </div>
      <div className="list-ql">
        <div className="search-list">
          <div className="search-list-child">
            <Search className="search-list-img" />
            <Input type="text" placeholder="Tìm kiếm" className="input-color" />
          </div>
          <div className="ngay-cong-chieu">
            <h4>Ngày công chiếu</h4>
            <div className="date-picker-cong-chieu">
              <DatePicker
                defaultValue={("10/12/2021", moment(dateFormatList[0]))}
                format={dateFormatList}
              />
            </div>
          </div>
        </div>
        <div className="list-film"></div>
      </div>
    </>
  );
};

export default ListQl;
