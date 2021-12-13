import React, { useState } from "react";
import './UserManager.css';
import Avatar from "../../assets/avatar.png";
import { DatePicker, Radio, Button } from 'antd';
import moment from 'moment';

const UserManager = () => {
    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
    const [userSelected, setUserSelected] = useState({});
    const [activeId, setActiveId] = useState('');

    const handleSelectUser = (u) => {
        setUserSelected(u)
        setActiveId(u.id)
    }

    const handleSelectStyle = (u) => {
        if (userSelected) {
            if (activeId !== u.id) {
                return {backgroundColor: '#f0f0f0', color: '#000000'}
            } else {
                return {backgroundColor: '#2DC275', color: '#ffffff', fontWeight: 'bold'}
            }
        }
    }

    const handleDisableStyle = () => {
        if (userSelected) {
            return {pointerEvents: "none", opacity: "0.4"}
        } else {
            return {pointerEvents: "", opacity: "1"}
        }
    }

    const userData = [
        {
            id: '1',
            avatar: Avatar,
            name: 'Trinh Thanh Tung',
            phone: '0123456789',
            birth: '10/10/1999',
            mail: 'trinhthanhtung1010@gmail.com',
            isActiveMail: true,
            sex: 'male',
        },
        {
            id: '2',
            avatar: Avatar,
            name: 'Thai truong an',
            phone: '0302856789',
            birth: '31/12/1999',
            mail: 'thaitruongan@gmail.com',
            isActiveMail: true,
            sex: 'male',
        },
        {
            id: '3',
            avatar: Avatar,
            name: 'Truong Nam',
            phone: '0120194789',
            birth: '07/05/1999',
            mail: 'pntn@gmail.com',
            isActiveMail: true,
            sex: 'male',
        },
        {
            id: '4',
            avatar: Avatar,
            name: 'Phan Long Ho',
            phone: '0123947851',
            birth: '01/11/1999',
            mail: 'phalongho@gmail.com',
            isActiveMail: true,
            sex: 'male',
        },
        {
            id: '5',
            avatar: Avatar,
            name: 'Kim Huong',
            phone: '0123463017',
            birth: '10/10/1999',
            mail: 'tranthikimhuong@gmail.com',
            isActiveMail: false,
            sex: 'female',
        },
    ];

    const checkDisabled = (val) => {
        if (val) {
            return
        } else {
            return 'disabled'
        }
    }

    return (
        <div className="user-manager-container">
            <div className="user-info-manager" >
                <div className="uiam" style={handleDisableStyle()}>
                </div>

                <div className="btn-handle-container">
                    <div className="btnhca">Add</div>
                    <div className="btnhcu">Update</div>
                    <div className="btnhcr">Remove</div>
                    <div className="btnhcs">Save</div>
                </div>

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
                                <input name="phone" className="uipnm ipom" value={userSelected.phone}  placeholder="Vd: 0123456789" type="text" maxLength="100" />
                            </div>
                        </div>
                    </div>

                    <div className="usfmfrow2">
                        <div className="uigmm">
                            <span className="umsjw">Email nhận vé: </span>
                            <div className="uigmm-input">
                                <input name="mail" className="uigmm ipom" value={userSelected.mail}  placeholder="Vd: nguyenvana@gmail.com" type="text" maxLength="100" />
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
                                <Radio.Group className="radio-group" value={userSelected.sex} >
                                    <Radio value="male">Nam</Radio>
                                    <Radio value="female">Nữ</Radio>
                                    <Radio value ="other">Khác</Radio>
                                </Radio.Group>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="user-list-manager">
                {userData.map((user) => {
                    return (                                
                        <div className="user-element-manager" key={user.id} style={handleSelectStyle(user)} onClick={() => handleSelectUser(user)} >
                            <img className="usm-dt" src={user.avatar} alt={user.name} />
                            <div className="usm-mdt">{user.name}</div>
                            <div className="usm-pndt">{user.phone}</div>
                            <div className="usm-gmdt">{user.mail}</div>
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