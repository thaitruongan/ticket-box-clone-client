import React, { useState, useEffect } from "react";
import MovieAPI from "../../../api/movieAPI";
import AddFilm from "../add-film/AddFilm";
import UpdateFilm from "../update-film/UpdateFilm";
import { ReactComponent as Search } from "../../../images/search.svg";
import { Input, DatePicker, Button } from "antd";
import { VideoCameraAddOutlined, VideoCameraOutlined } from "@ant-design/icons";
import moment from "moment";
import "./ListQl.css";

const ListQl = () => {
  const [listMovies, setListMovies] = useState([]);
  const [popupAdd, setPopupAdd] = useState(false);
  const [popupUpdate, setPopupUpdate] = useState(false);

  const handlePopupAdd = () => {
    setPopupAdd(!popupAdd);
  };

  const handlePopupUpdate = () => {
    setPopupUpdate(!popupUpdate);
  };

  const fetchListMovies = async () => {
    try {
      const response = await MovieAPI.getAll();
      setListMovies(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchListMovies();
  }, []);

  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

  return (
    <>
      <AddFilm trigger={popupAdd} onClickClosePopupAdd={handlePopupAdd} />
      <UpdateFilm
        trigger={popupUpdate}
        onClickClosePopupUpdate={handlePopupUpdate}
      />
      <div className="content-ql">
        <h2>Danh Sách Phim</h2>
        <div className="button">
          <div className="button-add-film">
            <Button
              onClick={() => handlePopupAdd()}
              type="primary"
              shape="round"
              icon={<VideoCameraAddOutlined />}
              size="large"
            >
              Thêm Phim
            </Button>
          </div>
          <div className="button-update-film">
            <Button
              onClick={() => handlePopupUpdate()}
              type="primary"
              shape="round"
              icon={<VideoCameraOutlined />}
              size="large"
            >
              Sửa Phim
            </Button>
          </div>
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
                defaultValue={("12/12/2021", moment(dateFormatList[0]))}
                format={dateFormatList}
              />
            </div>
          </div>
        </div>
        <div className="list-film">
          <table>
            <thead>
              <tr>
                <th>STT</th>
                <th>PHIM</th>
                <th>NGÀY CÔNG CHIẾU</th>
                <th>THỜI LƯỢNG</th>
                <th>TRAILER</th>
              </tr>
            </thead>
            {listMovies.map((item, index) => {
              return (
                <tbody>
                  <tr>
                    <td>{index + 1}</td>
                    <td>
                      <div>
                        <picture>
                          <image
                            src={`https://ticket-box-clone.herokuapp.com/image/${item.image}`}
                          />
                        </picture>
                        <p>{item.name}</p>{" "}
                      </div>
                    </td>
                    <td>{item.releaseDate}</td>
                    <td>{item.runningTime} phút</td>
                    <td>{item.trailer}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
};

export default ListQl;
