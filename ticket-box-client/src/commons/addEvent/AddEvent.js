import React from "react";
import './AddEvent.css';
import { PlusCircleOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { DatePicker, TimePicker, Select } from "antd";

const AddEvent = () => {
    return (
        <div className="new-event-container">
            <div className="btn-mecm">
                <div>
                    <PlusCircleOutlined className="btn-mecm-a" />
                    <EditOutlined className="btn-mecm-m" />
                    <DeleteOutlined className="btn-mecm-r" />
                </div>
                <div className="ncp-toem">Xuất chiếu phim</div>
            </div>

            <div className="amife">
                <div className="amife-row">
                    <div className="dtpfem d">
                        <div className="tpfem dem-date">Chọn ngày</div>
                        <DatePicker className="tpfem-date-picker" />
                    </div>

                    <div className="dtpfem t">
                        <div className="tpfem tem-date">Chọn giờ</div>
                        <TimePicker className="tpfem-date-picker" />
                    </div>
                </div>

                <div className="amife-row-2">
                    <div className="sstfem dtpfem">
                        <div className="tpfem dem-date">Chọn rạp</div>                        
                        <Select
                            className="tpfem-select tscinema"
                            showSearch
                            placeholder="Chọn rạp"
                            optionFilterProp="children"
                        >
                        </Select>
                    </div>

                    <div className="sstfem dtpfem">
                        <div className="tpfem dem-date">Chọn phòng</div>                        
                        <Select
                            className="tpfem-select tsroom"
                            showSearch
                            placeholder="Chọn phòng"
                            optionFilterProp="children"
                        >
                        </Select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddEvent