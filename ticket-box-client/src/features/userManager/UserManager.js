import React, { useEffect, useState } from "react";
import './UserManager.css';
import { DatePicker, Radio } from 'antd';
import moment from 'moment';
import { useSelector } from "react-redux";
import { selectToken } from "../../app/userSlice";
import UserAPI from "../../api/userAPI";

const UserManager = () => {
    const token = useSelector(selectToken);
    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
    const [isUpdate, setIsUpdate] = useState(false);
    const [userSelected, setUserSelected] = useState({
        avatar: "",
        name: "",
        phoneNumber: "",
        email: "",
        birth: "",
        sex: ""
    });
    const [activeId, setActiveId] = useState('');
    const [listUSer, setListUser] = useState([]);

    const onSelectSexButton = e => {
        setUserSelected((prevInfor) => ({
            ...prevInfor,
            sex: e.target.value
        }))
    };

    const handleSelectUser = (u) => {
        setUserSelected({
            avatar: u.avatar.search('https:') !== -1 ? u.avatar : `https://ticket-box-clone.herokuapp.com/image/${u.avatar}`,
            name: !u.name ? "" : u.name,
            phoneNumber: !u.phoneNumber ? "" : u.phoneNumber,
            email: !u.email ? "" : u.email,
            birth: !u.birth ? "" : u.birth,
            sex: !u.sex ? "" : u.sex
        })
        setActiveId(u._id)
    }

    const handleSelectStyle = (u) => {
        if (userSelected) {
            if (activeId !== u._id) {
                return {backgroundColor: '#f0f0f0', color: '#000000'}
            } else {
                return {backgroundColor: '#2DC275', color: '#ffffff', fontWeight: 'bold'}
            }
        }
    }

    const handleDisableStyle = () => {
        if (!isUpdate) {
            return {pointerEvents: "none", opacity: "0.4"}
        } else {
            return {pointerEvents: "", opacity: "1"}
        }
    }

    // const handleIsUpdate = () => {
    //     setIsUpdate(!isUpdate);
    // }

    useEffect(() => {
      let controller = new AbortController();
      const fetchAllUser = async () => {
        try {
          const response = await UserAPI.getAll(token);
          if (response.message === "successfully!") {
            setListUser(response.data);
            controller = null;
          }
        } catch (error) {
          console.log(error)
        }
      }
  
      fetchAllUser();

      return () => controller?.abort()
    },[token])
    return (
        <div className="user-manager-container">
            <div className="user-info-manager" >
                <div className="uiam" style={handleDisableStyle()}>
                    <img className="uiam-a" src={userSelected.avatar} alt={userSelected.name} />
                </div>

                {/* <div className="btn-handle-container">
                    <div
                        className="btnhcu"
                        style={{padding: isUpdate ? "6px 0" : "11px 0"}}
                        onClick={() => handleIsUpdate()}
                    >{isUpdate ? "Hủy cập nhật" : "Cập nhật" }</div>
                    <div className="btnhcs">Lưu lại</div>
                </div> */}

                <div className="usfmf" style={handleDisableStyle()}>
                    <div className="usfmfrow">
                        <div className="uinm">
                            <span className="umsjw">Họ và tên: </span>
                            <div className="uinm-input">
                                <input name="name" className="uinm ipom" value={userSelected.name} placeholder="Họ và tên" type="text" maxLength="100" />
                            </div>
                        </div>

                        <div className="uipnm">
                            <span className="umsjw">Số điện thoại: </span>
                            <div className="uipnm-input">
                                <input name="phone" className="uipnm ipom" value={userSelected.phoneNumber}  placeholder="Vd: 0123456789" type="text" maxLength="100" />
                            </div>
                        </div>
                    </div>

                    <div className="usfmfrow2">
                        <div className="uigmm">
                            <span className="umsjw">Email nhận vé: </span>
                            <div className="uigmm-input">
                                <input name="mail" className="uigmm ipom" value={userSelected.email}  placeholder="Vd: nguyenvana@gmail.com" type="text" maxLength="100" />
                            </div>
                        </div>

                        <div className="usbm">
                            <span className="umsjw">Ngày tháng năm sinh: </span>
                            <div className="usbm-input">
                                <DatePicker className="usbm ipom"  defaultValue={moment(userSelected.birth, dateFormatList[0])} format={dateFormatList} />
                            </div>
                        </div>
                    </div>

                    <div className="usfmfrow3">
                        <div className="user-sex">
                            <span>Giới tính: </span>
                            <div className="wrap-radio">
                                <Radio.Group className="radio-group" onChange={onSelectSexButton} value={userSelected.sex} >
                                    <Radio value="male">Nam</Radio>
                                    <Radio value="female">Nữ</Radio>
                                </Radio.Group>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="user-list-manager">
                {listUSer.map((user) => {
                    return (                                
                        <div key={user._id} className="user-element-manager" style={handleSelectStyle(user)} onClick={() => handleSelectUser(user)} >
                            <img className="usm-dt" src={ user.avatar.search('https:') !== -1 ? user.avatar : `https://ticket-box-clone.herokuapp.com/image/${user.avatar}`} alt={user.name} />
                            <div className="usm-mdt">{user.name}</div>
                            <div className="usm-pndt">{user.phoneNumber}</div>
                            <div className="usm-gmdt">{user.email}</div>
                            <div className="usm-bdt">{user.birth}</div>
                            <div className="usm-sdt">{user.sex}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default UserManager