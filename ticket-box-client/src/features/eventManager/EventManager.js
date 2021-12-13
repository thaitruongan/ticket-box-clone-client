import React from "react";
import './EventManager.css';
import { Select, DatePicker } from 'antd';
import moment from 'moment';
import AddEvent from "../../commons/addEvent/AddEvent";

const { Option } = Select;
const { RangePicker } = DatePicker;

const EventManager = () => {
    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
    const today = new Date();
    const movieData =[
        {
            id: '1',
            name: 'SHANG-CHI AND THE LEGEND OF THE TEN RINGS',
            time: '2 giờ 12 phút',
            tag: 'C13',
            avatar: 'https://images.tkbcdn.com/2/320/480/poster/d64fc5b6-51a3-11ec-8fb8-0242ac110002@webp',
        },
        {
            id: '2',
            name: 'SHANG-CHI AND THE LEGEND OF THE TEN RINGS',
            time: '2 giờ 12 phút',
            tag: 'C13',
            avatar: 'https://images.tkbcdn.com/2/320/480/poster/d64fc5b6-51a3-11ec-8fb8-0242ac110002@webp',
        },
        {
            id: '3',
            name: 'SHANG-CHI AND THE LEGEND OF THE TEN RINGS',
            time: '2 giờ 12 phút',
            tag: 'C13',
            avatar: 'https://images.tkbcdn.com/2/320/480/poster/d64fc5b6-51a3-11ec-8fb8-0242ac110002@webp',
        },
        {
            id: '4',
            name: 'SHANG-CHI AND THE LEGEND OF THE TEN RINGS',
            time: '2 giờ 12 phút',
            tag: 'C13',
            avatar: 'https://images.tkbcdn.com/2/320/480/poster/d64fc5b6-51a3-11ec-8fb8-0242ac110002@webp',
        },
        {
            id: '5',
            name: 'SHANG-CHI AND THE LEGEND OF THE TEN RINGS',
            time: '2 giờ 12 phút',
            tag: 'C13',
            avatar: 'https://images.tkbcdn.com/2/320/480/poster/d64fc5b6-51a3-11ec-8fb8-0242ac110002@webp',
        },
    ];
    return (
        <div className="event-manager-container">
            <div className="steb-01">
                <Select
                className="select-name-movie"
                    showSearch
                    placeholder="Chọn phim"
                    optionFilterProp="children"
                >
                    {movieData.map((movie) => (
                        <Option className="omsfem" value={movie.name}>{movie.name}</Option>
                    ))}
                </Select>

                <RangePicker
                    className="range-date-picker"
                    defaultValue={[moment(today, dateFormatList[0]), moment(today, dateFormatList[0])]}
                    format={dateFormatList}
                />
            </div>

            <AddEvent/>
        </div>
    )
}

export default EventManager