import React, { useState } from "react";
import './FilmDetail.css';
import { ReactComponent as Pause} from '../../assets/svg/pause.svg';
import { ReactComponent as TurnBack} from '../../assets/svg/fall-back.svg';
import PopupTrailer from "../../commons/popupTrailer/PopupTrailer";

const FilmDetail = () => {
    const [popup, setPopup] = useState(false);
    const [detail, setDetail] = useState({
        id: '1',
        name: 'SHANG-CHI AND THE LEGEND OF THE TEN RINGS',
        time: '2 giờ 12 phút',
        tag: 'C13',
        trailer: 'https://youtube.com/embed/VlXi1RRCFcA',
        avatar: 'https://images.tkbcdn.com/2/320/480/poster/d64fc5b6-51a3-11ec-8fb8-0242ac110002@webp',
        infoMovie: 'Shang-Chi và Huyền Thoại Thập Nhẫn là bộ phim thuộc giai đoạn 4 của Vũ trụ điện ảnh Marvel. Nhân vật này được biết đến như một bậc thầy Kung Fu, tinh thông võ thuật.',
    });

    const handlePopup = () => {
        setPopup(!popup);
    };

    const useViewport = () => {
        const [width, setWidth] = React.useState(window.innerWidth);
      
        React.useEffect(() => {
          const handleWindowResize = () => setWidth(window.innerWidth);
          window.addEventListener("resize", handleWindowResize);
          return () => window.removeEventListener("resize", handleWindowResize);
        }, []);
      
        return { width };
    };

    const viewPort = useViewport();
    const isMobile = viewPort.width <= 770;
    const fixScreen = viewPort.width <= 560;

    if(isMobile){
        return (
            <div className="FilmDetail-mobile">
                <div className="top-play-trailer">
                    <div className="turn-back-button">
                        <div className="turn-back-container">
                            <TurnBack className="turn-back"/>
                        </div>
                    </div>
                    <div className="space-gradient-top"></div>
                    <div className="button-play-trailer-container-mobile" onClick={() => handlePopup()}>
                        <Pause />
                    </div>
                    <div className="space-gradient-top-bottom"></div>
                </div>
                                {/* <div className="top-play-trailer">
                                    <iframe width="560" height="349" allowFullScreen frameBorder="0" src={detail.trailer} />
                                </div> */}

                <div className="infor-container-mobile">
                    <div className="infor-mobile">
                        <img className="movie-avatar-mobile" src={detail.avatar} alt={detail.name} />
                        <div className="another-infor-mobile">
                            <h2 className="movie-name-mobile">{detail.name}</h2>
                            <div className="another-infor-mobile">
                                <div className="movie-name-smaller-mobile">
                                    {detail.name}
                                </div>
                                <div className="tag-and-time">
                                    {detail.tag}
                                    <span className="dash-vertical-mobile">|</span>
                                    {detail.time}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="movie-information-container-mobile">
                    <div className="dash-horizon-mobile"></div>
                    <section className="movie-information-mobile">
                        <div className="title-mobile">
                            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEuNSAxLjVWMTYuNSIgc3Ryb2tlPSIjMjE5MjU4IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xLjUgOUg0LjUiIHN0cm9rZT0iIzIxOTI1OCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTMuNSA5SDE2LjUiIHN0cm9rZT0iIzIxOTI1OCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMS41IDZINC41IiBzdHJva2U9IiMyMTkyNTgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTEuNSAzSDQuNSIgc3Ryb2tlPSIjMjE5MjU4IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMy41IDZIMTYuNSIgc3Ryb2tlPSIjMjE5MjU4IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMy41IDNIMTYuNSIgc3Ryb2tlPSIjMjE5MjU4IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMy41IDE1SDE2LjUiIHN0cm9rZT0iIzIxOTI1OCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTMuNSAxMkgxNi41IiBzdHJva2U9IiMyMTkyNTgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTEuNSAxNUg0LjUiIHN0cm9rZT0iIzIxOTI1OCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMS41IDEySDQuNSIgc3Ryb2tlPSIjMjE5MjU4IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNi41IDEuNVYxNi41IiBzdHJva2U9IiMyMTkyNTgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTExLjUgMS41SDYuNUM1LjM5NTQzIDEuNSA0LjUgMi4zOTU0MyA0LjUgMy41VjE0LjVDNC41IDE1LjYwNDYgNS4zOTU0MyAxNi41IDYuNSAxNi41SDExLjVDMTIuNjA0NiAxNi41IDEzLjUgMTUuNjA0NiAxMy41IDE0LjVWMy41QzEzLjUgMi4zOTU0MyAxMi42MDQ2IDEuNSAxMS41IDEuNVoiIGZpbGw9IiMyREMyNzUiIHN0cm9rZT0iIzIxOTI1OCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNC41IDlIMTMuNSIgc3Ryb2tlPSIjMjE5MjU4IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=" alt="movie" />
                            <h2>Thông tin phim</h2>
                        </div>
                        <div className="content-mobile">
                            <p>{detail.infoMovie}</p>
                        </div>
                    </section>
                </div>

                <div className="buy-ticket-mobile">
                    <button className="button-buy-ticket-mobile">
                        Mua vé
                    </button>
                </div>
                <PopupTrailer trigger={popup} link={detail.trailer} onClickClosePopup={handlePopup} />
            </div>
        )
    }else{
        return (
            <div className="FilmDetail">
                <div className="film-detail">
                    <div className="avatar-film">
                        <img className="avatar" src={detail.avatar} alt={detail.name} />
                        <button className="button-buy-ticket">Mua vé</button>
                    </div>
                    <div className="detail">
                        <h1 className="movie-name">{detail.name}</h1>
                        <section style={{display: "flex"}}>
                            <div className="button-play-trailer-container">
                                <button className="button-play-trailer" onClick={() => handlePopup()} >
                                    <Pause/>
                                </button>
                            </div>
                            <div className="film-detail-container">
                                <div className="movie-name-smaller">
                                    {detail.name}
                                </div>
                                <div className="another-infor">
                                    {detail.tag}
                                    <span className="dash-horizon">|</span>
                                    {detail.time}
                                </div>
                            </div>
                        </section>
                        <div className="dash-vertical"></div>
                        <section className="movie-information">
                            <div className="title">
                                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEuNSAxLjVWMTYuNSIgc3Ryb2tlPSIjMjE5MjU4IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xLjUgOUg0LjUiIHN0cm9rZT0iIzIxOTI1OCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTMuNSA5SDE2LjUiIHN0cm9rZT0iIzIxOTI1OCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMS41IDZINC41IiBzdHJva2U9IiMyMTkyNTgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTEuNSAzSDQuNSIgc3Ryb2tlPSIjMjE5MjU4IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMy41IDZIMTYuNSIgc3Ryb2tlPSIjMjE5MjU4IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMy41IDNIMTYuNSIgc3Ryb2tlPSIjMjE5MjU4IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMy41IDE1SDE2LjUiIHN0cm9rZT0iIzIxOTI1OCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTMuNSAxMkgxNi41IiBzdHJva2U9IiMyMTkyNTgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTEuNSAxNUg0LjUiIHN0cm9rZT0iIzIxOTI1OCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMS41IDEySDQuNSIgc3Ryb2tlPSIjMjE5MjU4IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNi41IDEuNVYxNi41IiBzdHJva2U9IiMyMTkyNTgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTExLjUgMS41SDYuNUM1LjM5NTQzIDEuNSA0LjUgMi4zOTU0MyA0LjUgMy41VjE0LjVDNC41IDE1LjYwNDYgNS4zOTU0MyAxNi41IDYuNSAxNi41SDExLjVDMTIuNjA0NiAxNi41IDEzLjUgMTUuNjA0NiAxMy41IDE0LjVWMy41QzEzLjUgMi4zOTU0MyAxMi42MDQ2IDEuNSAxMS41IDEuNVoiIGZpbGw9IiMyREMyNzUiIHN0cm9rZT0iIzIxOTI1OCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNC41IDlIMTMuNSIgc3Ryb2tlPSIjMjE5MjU4IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=" alt="movie" />
                                <h2>Thông tin phim</h2>
                            </div>
                            <div className="content">
                                <p>{detail.infoMovie}</p>
                            </div>
                        </section>
                        <div className="dash-vertical"></div>
                        <div className="dash-vertical"></div>
                    </div>
                </div>
                <PopupTrailer trigger={popup} link={detail.trailer} onClickClosePopup={handlePopup} />
            </div>
        )
    }
}

export default FilmDetail