import React from "react";
import { ReactComponent as Search } from "../../../images/search.svg";
import { Input, DatePicker, Button, Table } from "antd";
import { VideoCameraAddOutlined } from "@ant-design/icons";
import moment from "moment";
import "./ListQl.css";

const ListQl = () => {
  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      sorter: {},
    },
    {
      title: "PHIM",
      dataIndex: "phim",
    },
    {
      title: "NGÀY CÔNG CHIẾU",
      dataIndex: "date",
      sorter: {},
    },
    {
      title: "THỜI LƯỢNG",
      dataIndex: "time",
      sorter: {},
    },
    {
      title: "TRAILER",
      dataIndex: "link",
      sorter: {},
    },
  ];

  const data = [
    {
      key: "1",
      id: 1,
      phim: "Mắt Biếc",
      date: "18-07-2021",
      time: "90 phút",
      link: "https://www.youtube.com/watch?v=KSFS0OfIK2c",
    },
    {
      key: "2",
      id: 2,
      phim: "Mắt Biếc",
      date: "18-07-2021",
      time: "90 phút",
      link: "https://www.youtube.com/watch?v=KSFS0OfIK2c",
    },
    {
      key: "3",
      id: 3,
      phim: "Mắt Biếc",
      date: "18-07-2021",
      time: "90 phút",
      link: "https://www.youtube.com/watch?v=KSFS0OfIK2c",
    },
  ];
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <>
      <div className="content-ql">
        <h2>Danh Sách Phim</h2>
        <div className="button-add-film">
          <Button
            href="/add-phim"
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
        <div className="list-film">
          <Table columns={columns} dataSource={data} onChange={onChange} />
        </div>
      </div>
    </>
  );
};

export default ListQl;
