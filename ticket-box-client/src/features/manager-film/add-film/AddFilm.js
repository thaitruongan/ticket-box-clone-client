import React, { useState } from "react";
import { Row, Col, Form, Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";

import "./AddFilm.css";

const AddFilm = (props) => {
  const { trigger, onClickClosePopupAdd } = props;
  const [film, setFilm] = useState([]);

  const handle = (e) => {
    const newFilm = { ...film };
    newFilm[e.target.id] = e.target.value;
    setFilm(newFilm);
    console.log(newFilm);
  };

  const handleClosePopupAdd = () => {
    if (onClickClosePopupAdd) {
      onClickClosePopupAdd();
    }
  };

  const normFile = (e) => {
    console.log("Upload event:", e);

    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };

  return trigger ? (
    <div className="PopupAddFilm" onClick={() => handleClosePopupAdd()}>
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
                      valuePropName="fileList"
                      getValueFromEvent={normFile}
                      noStyle
                      onChange={(e) => handle(e)}
                      id="image"
                      value={film.image}
                    >
                      <Upload.Dragger name="files" action="/upload.do">
                        <p className="ant-upload-drag-icon">
                          <InboxOutlined style={{color: "#2dc275"}}/>
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
                  onClick={() => handleClosePopupAdd()}
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </Row>
      </div>
    </div>
  ) : (
    ""
  );
};

export default AddFilm;
