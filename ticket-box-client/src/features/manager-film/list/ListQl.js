import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MovieAPI from "../../../api/movieAPI";
import { selectToken } from "../../../app/userSlice";
import { addCurrentMovie } from "../../../app/movieSlice";
import { ReactComponent as Search } from "../../../images/search.svg";
import { Input, Row, Col, Form, Upload } from "antd";
import {
  VideoCameraAddOutlined,
  VideoCameraOutlined,
  InboxOutlined,
} from "@ant-design/icons";
import "./ListQl.css";

const ListQl = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const [listMovies, setListMovies] = useState([]);
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [trailer, setTrailer] = useState("");
  const [description, setDescription] = useState("");
  const [label, setLabel] = useState("");
  const [runningTime, setRunningTime] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [movieSelected, setMovieSelected] = useState({});
  const [activeId, setActiveId] = useState("");
  const [showAdd, setShowAdd] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [film, setFilm] = useState([]);

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

  const handle = (e) => {
    const newFilm = { ...film };
    newFilm[e.target.id] = e.target.value;
    setFilm(newFilm);
    console.log(newFilm);
  };

  const normFile = (e) => {
    console.log("Upload event:", e);

    if (Array.isArray(e)) {
      return e;
    }

    return e && e.imageList;
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

  useEffect(() => {
    const addMovie = async () => {
      try {
        const response = await MovieAPI.addFilm(
          token,
          image,
          name,
          trailer,
          description,
          label,
          runningTime,
          releaseDate
        );
        if (response.message === "success!") {
          dispatch(addCurrentMovie(response));
          setImage("");
          setName("");
          setTrailer("");
          setDescription("");
          setLabel("");
          setRunningTime("");
          setReleaseDate("");
        }
      } catch (error) {
        console.log(error);
        setImage("");
        setName("");
        setTrailer("");
        setDescription("");
        setLabel("");
        setRunningTime("");
        setReleaseDate("");
      }
    };
    addMovie();
  }, [
    token,
    image,
    name,
    trailer,
    description,
    label,
    runningTime,
    releaseDate,
    dispatch,
  ]);

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
                        <h5>Tên</h5>
                        <input
                          className="name-add"
                          onChange={(e) => handle(e)}
                          id="name"
                          value={film.name}
                        ></input>
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
                        <Form.Item
                          name="dragger"
                          valuePropName="imageList"
                          getValueFromEvent={normFile}
                          noStyle
                          onChange={(e) => handle(e)}
                          id="image"
                          value={film.image}
                        >
                          <Upload.Dragger name="images" action="/upload.do">
                            <p className="ant-upload-drag-icon">
                              <InboxOutlined style={{ color: "#2dc275" }} />
                            </p>
                            <p className="ant-upload-text">
                              Nhấn hoặc thả ảnh của bạn vào đây
                            </p>
                          </Upload.Dragger>
                        </Form.Item>
                      </div>
                    </div>
                  </div>
                  <div className="bnt-save-film">
                    <button
                      className="bnt-save"
                      onClick={async () => {
                        setShowAdd(false);
                        await MovieAPI.addFilm(
                          image,
                          name,
                          trailer,
                          description,
                          label,
                          runningTime,
                          releaseDate
                        );
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
                        <h5>Tên</h5>
                        <input
                          className="name-update"
                          onChange=""
                          id="name"
                          value={movieSelected.name}
                        ></input>
                        <div className="date-time">
                          <div>
                            <h5>Ngày công chiếu</h5>
                            <input
                              className="date-update"
                              type="date"
                              onChange=""
                              id="releaseDate"
                              value={movieSelected.releaseDate}
                            ></input>
                          </div>
                          <div>
                            <h5>Thời lượng</h5>
                            <div className="input">
                              <input
                                className="update-time"
                                type="number"
                                onChange=""
                                id="runningTime"
                                value={movieSelected.runningTime}
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
                          onChange=""
                          id="description"
                          value={movieSelected.description}
                        ></textarea>
                        <h5>Trailer</h5>
                        <input
                          className="trailer-update"
                          onChange=""
                          id="trailer"
                          value={movieSelected.trailer}
                        ></input>
                      </div>
                    </div>
                    <div className="form-update-img">
                      <h2>Hình ảnh bộ phim</h2>
                      <div className="gach-chan-ql-update-r2-c2"></div>
                      <div className="content-form-update-img">
                        <Form.Item
                          name="dragger"
                          valuePropName="imageList"
                          getValueFromEvent={normFile}
                          noStyle
                          onChange=""
                          id="image"
                          value={movieSelected.image}
                        >
                          <Upload.Dragger name="images" action="/upload.do">
                            <p className="ant-upload-drag-icon">
                              <InboxOutlined style={{ color: "#2dc275" }} />
                            </p>
                            <p className="ant-upload-text">
                              Nhấn hoặc thả ảnh của bạn vào đây
                            </p>
                          </Upload.Dragger>
                        </Form.Item>
                      </div>
                    </div>
                  </div>
                  <div className="bnt-save-film">
                    <button
                      className="bnt-save"
                      onClick={() => setShowUpdate(false)}
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
      </div>
    </>
  );
};

export default ListQl;
