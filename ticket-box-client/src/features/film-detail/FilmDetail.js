import React, { useState } from "react";
import './FilmDetail.css';

const FilmDetail = () => {
    const [detail, setDetail] = useState({
        id: '1',
        name: 'SHANG-CHI AND THE LEGEND OF THE TEN RINGS',
        time: '2 giờ 12 phút',
        tag: 'C13',
        trailer: 'https://youtu.be/sR6w18AyK6U',
        avatar: 'https://images.tkbcdn.com/2/320/480/poster/d64fc5b6-51a3-11ec-8fb8-0242ac110002@webp',
        infoMovie: 'Shang-Chi và Huyền Thoại Thập Nhẫn là bộ phim thuộc giai đoạn 4 của Vũ trụ điện ảnh Marvel. Nhân vật này được biết đến như một bậc thầy Kung Fu, tinh thông võ thuật.',
    })

    return (
        <div className="film-detail-container">
            <div className="film-detail">
                <div className="avatar-film">
                    <img className="avatar" src={detail.avatar} alt={detail.name} />
                    <button className="button-buy-ticket">Mua vé</button>
                </div>
                <div className="detail">
                    <h1 className="movie-name">{detail.name}</h1>
                </div>
            </div>
        </div>
    )
}

export default FilmDetail