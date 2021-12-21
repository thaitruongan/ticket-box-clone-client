import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MovieAPI from "../../../api/movieAPI";
import { selectToken } from "../../../app/userSlice";
import { addCurrentMovie } from "../../../app/movieSlice";
import { ReactComponent as Search } from "../../../images/search.svg";
import { Input, Row, Col } from "antd";
import {
  VideoCameraAddOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import "./ListQl.css";

const ListQl = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const [listMovies, setListMovies] = useState([]);
  const [movieSelected, setMovieSelected] = useState({});
  const [activeId, setActiveId] = useState("");
  const [showAdd, setShowAdd] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [film, setFilm] = useState([]);
  console.log(movieSelected);
  const [fimUpdate, setFimUpdate] = useState({
    file: undefined,
    name: !movieSelected.name ? "" : movieSelected.name,
    trailer: !movieSelected.trailer ? "" : movieSelected.trailer,
    description: !movieSelected.description ? "" : movieSelected.description,
    label: !movieSelected.label ? new Date() : new Date(movieSelected.label),
    runningTime: !movieSelected.runningTime ? "" : movieSelected.runningTime,
    releaseDate: !movieSelected.releaseDate ? "" : movieSelected.releaseDate,
  });

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

  const handleReleaseDate = (date) => {
    const d = new Date(date);
    const getD = d.getDate();
    const getM = d.getMonth() + 1;
    const getY = d.getFullYear();

    return `${getD}/${getM}/${getY}`;
  };

  const handleImage = (e) => {
    console.log("target",e.target)
    setFilm((film) => ({
      ...film,
      file: e.target.files[0]
    }))
  };

  const handle = (e) => {
    const _film = { ...film };
    _film[e.target.id] = e.target.value;
    setFilm(_film);
    console.log(_film);
  }

  const handleUpdate = (e) => {
    const filmUpdate = { ...fimUpdate };
    filmUpdate[e.target.id] = e.target.value;
    setFimUpdate(filmUpdate);
    console.log(filmUpdate);
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

  const addMovie = async () => {
    try {
      const response = await MovieAPI.addFilm(token, film);
      if (response.message === "success!") {
        dispatch(addCurrentMovie({ token: token, movie: response.data }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateFilm = async () => {
    try {
      const response = await MovieAPI.updateFilm(token, movieSelected._id,  fimUpdate);
      console.log(response);
      if (response.message === "successfully!") {
        dispatch(addCurrentMovie({ token: token, movie: response.data }));
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <>
      {showAdd ? (
        <div className="add-film">
          <div className="page-add-film">
            <Row>
              <Col span={24}>
                <div className="title-page">
                  <h2>Thêm Phim</h2>
                </div>
                <div className="gach-chan-ql-add-r1"></div>
              </Col>
            </Row>
            <Row>
              <div className="form-add">
                <form>
                  <div className="form-add_container">
                    <div className="form-add-info">
                      <h2>Thông tin phim</h2>
                      <div className="gach-chan-ql-add-r2-c1"></div>
                      <div className="content-form-add-info">
                        <div className="nlb">
                          <div>
                            <h5>Tên</h5>
                            <input
                              className="name-add"
                              onChange={(e) => handle(e)}
                              id="name"
                              value={film.name}
                            ></input>
                          </div>
                          <div>
                            <h5>Label</h5>
                            <input
                              className="label-add"
                              onChange={(e) => handle(e)}
                              id="label"
                              value={film.label}
                            ></input>
                          </div>
                        </div>

                        <div className="date-time">
                          <div>
                            <h5>Ngày công chiếu</h5>
                            <input
                              className="date-add"
                              type="date"
                              onChange={(e) => handle(e)}
                              id="releaseDate"
                              value={film.releaseDate}
                            ></input>
                          </div>
                          <div>
                            <h5>Thời lượng</h5>
                            <div className="input">
                              <input
                                className="add-time"
                                type="number"
                                onChange={(e) => handle(e)}
                                id="runningTime"
                                value={film.runningTime}
                                style={{
                                  width: "5rem",
                                  height: "1.6rem",
                                  border: "gray 1px solid",
                                }}
                              ></input>
                              <p>Phút</p>
                            </div>
                          </div>
                        </div>
                        <h5>Giới thiệu</h5>
                        <textarea
                          className="gioi-thieu"
                          onChange={(e) => handle(e)}
                          id="description"
                          value={film.description}
                        ></textarea>
                        <h5>Trailer</h5>
                        <input
                          className="trailer-add"
                          onChange={(e) => handle(e)}
                          id="trailer"
                          value={film.trailer}
                        ></input>
                      </div>
                    </div>
                    <div className="form-add-img">
                      <h2>Hình ảnh bộ phim</h2>
                      <div className="gach-chan-ql-add-r2-c2"></div>
                      <div className="content-form-add-img">
                        <input type="file" onChange={(e)=> {handleImage(e)}}/>
                      </div>
                    </div>
                  </div>
                  <div className="bnt-save-film">
                    <button
                      className="bnt-save"
                      onClick={async () => {
                        setShowAdd(false);
                        addMovie();
                      }}
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </Row>
          </div>
        </div>
      ) : null}
      {showUpdate ? (
        <div className="update-film">
          <div className="page-update-film">
            <Row>
              <Col span={24}>
                <div className="title-page">
                  <h2>Sửa Phim</h2>
                </div>
                <div className="gach-chan-ql-update-r1"></div>
              </Col>
            </Row>
            <Row>
              <div className="form-update">
                <form>
                  <div className="form-update_container">
                    <div className="form-update-info">
                      <h2>Thông tin phim</h2>
                      <div className="gach-chan-ql-update-r2-c1"></div>
                      <div className="content-form-update-info">
                        <div className="nlb">
                          <div>
                            <h5>Tên</h5>
                            <input
                              className="name-update"
                              onChange={(e) => handleUpdate(e)}
                              id="name"
                              value={fimUpdate.name}
                            ></input>
                          </div>
                          <div>
                            <h5>Label</h5>
                            <input
                              className="label-update"
                              onChange={(e) => handleUpdate(e)}
                              id="label"
                              value={fimUpdate.label}
                            ></input>
                          </div>
                        </div>

                        <div className="date-time">
                          <div>
                            <h5>Ngày công chiếu</h5>
                            <input
                              className="date-update"
                              type="date"
                              onChange={(e) => handleUpdate(e)}
                              id="releaseDate"
                              value={fimUpdate.releaseDate}
                            ></input>
                          </div>
                          <div>
                            <h5>Thời lượng</h5>
                            <div className="input">
                              <input
                                className="update-time"
                                type="number"
                                onChange={(e) => handleUpdate(e)}
                                id="runningTime"
                                value={fimUpdate.runningTime}
                                style={{
                                  width: "5rem",
                                  height: "1.6rem",
                                  border: "gray 1px solid",
                                }}
                              ></input>
                              <p>Phút</p>
                            </div>
                          </div>
                        </div>
                        <h5>Giới thiệu</h5>
                        <textarea
                          className="gioi-thieu"
                          onChange={(e) => handleUpdate(e)}
                          id="description"
                          value={fimUpdate.description}
                        ></textarea>
                        <h5>Trailer</h5>
                        <input
                          className="trailer-update"
                          onChange={(e) => handleUpdate(e)}
                          id="trailer"
                          value={fimUpdate.trailer}
                        ></input>
                      </div>
                    </div>
                    <div className="form-update-img">
                      <h2>Hình ảnh bộ phim</h2>
                      <div className="gach-chan-ql-update-r2-c2"></div>
                      <div className="content-form-update-img">
                      <input type="file" onChange={(e)=> {handleImage(e)}}/>
                      </div>
                    </div>
                  </div>
                  <div className="bnt-save-film">
                    <button
                      className="bnt-save"
                      onClick={() => {
                        setShowUpdate(false);
                        updateFilm();
                      }}
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </Row>
          </div>
        </div>
      ) : null}
      <div className="manager-film">
        <div className="content-ql">
          <h2>Danh Sách Phim</h2>
          <div className="button">
            <div className="button-add-film">
              <button className="bnt-event" onClick={() => setShowAdd(true)}>
                <i>
                  <VideoCameraAddOutlined />
                </i>
                Thêm Phim
              </button>
            </div>
            <div className="button-update-film">
              <button className="bnt-event" onClick={() => setShowUpdate(true)}>
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
              <Input
                type="text"
                placeholder="Tìm kiếm"
                className="input-color"
              />
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
            <table className="table-film">
              <thead>
                <tr>
                  <th className="th_film">STT</th>
                  <th className="th_film">PHIM</th>
                  <th className="th_film">NGÀY CÔNG CHIẾU</th>
                  <th className="th_film">THỜI LƯỢNG</th>
                  <th className="th_film">TRAILER</th>
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
                      <td className="td_film">{index + 1}</td>
                      <td className="td_film">
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
                      <td className="td_film">
                        {handleReleaseDate(item.releaseDate)}
                      </td>
                      <td className="td_film">{item.runningTime} phút</td>
                      <td className="trailer">{item.trailer}</td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListQl;
