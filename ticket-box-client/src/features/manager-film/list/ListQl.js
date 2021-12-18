import React, { useState, useEffect } from "react";
import MovieAPI from "../../../api/movieAPI";
import AddFilm from "../add-film/AddFilm";
import UpdateFilm from "../update-film/UpdateFilm";
import { ReactComponent as Search } from "../../../images/search.svg";
import { Input } from "antd";
import { VideoCameraAddOutlined, VideoCameraOutlined } from "@ant-design/icons";
import "./ListQl.css";

const ListQl = () => {
  const [listMovies, setListMovies] = useState([]);
  const [popupAdd, setPopupAdd] = useState(false);
  const [popupUpdate, setPopupUpdate] = useState(false);
  const [movieSelected, setMovieSelected] = useState({});
  const [activeId, setActiveId] = useState("");

  const handleSelectMovie = (u) => {
    setMovieSelected(u);
    setActiveId(u._id);
  };

  const handleSelectStyle = (u) => {
    if (movieSelected) {
      if (activeId !== u._id) {
        return { backgroundColor: "#f0f0f0", color: "#000000" };
      } else {
        return {
          backgroundColor: "#2DC275",
          color: "#ffffff",
        };
      }
    }
  };

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
  const handleReleaseDate = (date) => {
    const d = new Date(date);
    const getD = d.getDate();
    const getM = d.getMonth() + 1;
    const getY = d.getFullYear();

    return `${getD}/${getM}/${getY}`;
  };

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
            <button className="bnt-event" onClick={() => handlePopupAdd()}>
              <i>
                <VideoCameraAddOutlined />
              </i>
              Thêm Phim
            </button>
          </div>
          <div className="button-update-film">
            <button className="bnt-event" onClick={() => handlePopupUpdate()}>
              <i>
                <VideoCameraOutlined />
              </i>
              Sửa Phim
            </button>
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
              <input
                type="date"
                id="daytime"
                name="daytime"
                className="datepicker"
              ></input>
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
                  <tr
                    key={item._id}
                    style={handleSelectStyle(item)}
                    onClick={() => handleSelectMovie(item)}
                  >
                    <td>{index + 1}</td>
                    <td>
                      <div className="movie">
                        {/* <img
                          src="https://images.tkbcdn.com/2/420/600/poster/e491c1fe-51a5-11ec-8fb8-0242ac110002@webp"
                          alt=""
                          className="img-list-manager"
                        /> */}
                        <picture>
                          <img
                            alt={item.name}
                            src={`https://ticket-box-clone.herokuapp.com/image/${item.image}`}
                            className="img-list-manager"
                          />
                        </picture>
                        <p>{item.name}</p>{" "}
                      </div>
                    </td>
                    <td>{handleReleaseDate(item.releaseDate)}</td>
                    <td>{item.runningTime} phút</td>
                    <td className="trailer">{item.trailer}</td>
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
