import React from "react";
import { Row, Col, Form, Upload, Button } from "antd";
import { InboxOutlined } from "@ant-design/icons";

import "./UpdateFilm.css";

const UpdateFilm = (props) => {
  const { trigger, onClickClosePopupUpdate } = props;

  const handleClosePopupUpdate = () => {
    if (onClickClosePopupUpdate) {
      onClickClosePopupUpdate();
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
    <div className="PopupUpdateFilm" onClick={() => handleClosePopupUpdate()}>
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
                      value=""
                    ></input>
                    <div className="date-time">
                      <div>
                        <h5>Ngày công chiếu</h5>
                        <input
                          className="date-update"
                          type="date"
                          onChange=""
                          id="releaseDate"
                          value=""
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
                            value=""
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
                      value=""
                    ></textarea>
                    <h5>Trailer</h5>
                    <input
                      className="trailer-update"
                      onChange=""
                      id="trailer"
                      value=""
                    ></input>
                  </div>
                </div>
                <div className="form-update-img">
                  <h2>Hình ảnh bộ phim</h2>
                  <div className="gach-chan-ql-update-r2-c2"></div>
                  <div className="content-form-update-img">
                    <Form.Item
                      name="dragger"
                      valuePropName="fileList"
                      getValueFromEvent={normFile}
                      noStyle
                      onChange=""
                      id="image"
                      value=""
                    >
                      <Upload.Dragger name="files" action="/upload.do">
                        <p className="ant-upload-drag-icon">
                          <InboxOutlined />
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
                <Button
                  type="primary"
                  shape="round"
                  size="large"
                  className="bnt-save"
                  onClick={() => handleClosePopupUpdate()}
                >
                  Save
                </Button>
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

export default UpdateFilm;
