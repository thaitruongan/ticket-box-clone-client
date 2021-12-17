import React from "react";
import {
  Row,
  Col,
  Form,
  Input,
  DatePicker,
  TimePicker,
  Upload,
  Button,
} from "antd";
import { InboxOutlined } from "@ant-design/icons";

import "./AddFilm.css";

const AddFilm = () => {
  const [form] = Form.useForm();
  const normFile = (e) => {
    console.log("Upload event:", e);

    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };

  return (
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
        <Col span={13}>
          <div className="form-info-film">
            <Form form={form} layout="vertical" className="form-add-info">
              <h2>Thông tin phim</h2>
              <div className="gach-chan-ql-add-r2-c1"></div>
              <div className="content-form-add-info">
                <Form.Item label="Tên" tooltip="This is a required field">
                  <Input className="name-add" />
                </Form.Item>
                <Form.Item style={{ marginBottom: 0 }}>
                  <Form.Item
                    label="Ngày công chiếu"
                    style={{ display: "inline-block", width: "15rem" }}
                  >
                    <DatePicker className="date-add" />
                  </Form.Item>
                  <Form.Item
                    label="Thời lượng"
                    style={{ display: "inline-block", width: "14rem" }}
                  >
                    <TimePicker className="time-add" />
                  </Form.Item>
                </Form.Item>
                <Form.Item label="Giới thiệu">
                  <Input.TextArea rows={5} className="gioi-thieu" />
                </Form.Item>
                <Form.Item label="Trailer" tooltip="This is a required field">
                  <Input className="trailer-add" />
                </Form.Item>
              </div>
            </Form>
          </div>
        </Col>
        <Col span={11}>
          <Row>
            <div className="form-img-film">
              <Form form={form} layout="vertical" className="form-add-img">
                <h2>Hình ảnh bộ phim</h2>
                <div className="gach-chan-ql-add-r2-c2"></div>
                <div className="content-form-add-img">
                  <Form.Item>
                    <Form.Item
                      name="dragger"
                      valuePropName="fileList"
                      getValueFromEvent={normFile}
                      noStyle
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
                  </Form.Item>
                </div>
              </Form>
            </div>
          </Row>
          <Row>
            <div className="bnt-save-film">
              <Button
                type="primary"
                shape="round"
                size="large"
                className="bnt-save"
              >
                Save
              </Button>
            </div>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default AddFilm;
