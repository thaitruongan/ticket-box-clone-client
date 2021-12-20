import axiosClient from "./axiosClient";

const UserAPI = {
    SignInByPhone: (phone) => {
        const url = 'user';
        return axiosClient.post(url, {
            "phoneNumber": `${phone}`
        })
    },

    getAll: (token) => {
        const url = 'user';
        return axiosClient.get(url, {
            headers: {
                'content-type': 'application/json',
                'tbtoken': token
            },
        })
    },

    ImportOTP: (phone, otp) => {
        const url = 'user/otp';
        return axiosClient.post(url, {
            "phoneNumber": `${phone}`,
            "otp": `${otp}`
          })
    },

    updatePersonalInfo: (token, infor) => {
        const url = 'user';
        const formData = new FormData();
        formData.append("file", infor.file);
        formData.append("email", infor.email);
        formData.append("name", infor.name);
        formData.append("birth", infor.birth);
        formData.append("sex", infor.sex);
        return axiosClient.put(url, formData,{
            headers: {
                'content-type': 'multipart/form-data',
                'tbtoken': token,
            }
          })
    },

    checkToken: (token) => {
        const url = 'user/verify';
        return axiosClient.get(url, {
            headers: {
                'tbtoken': token
            },
        }
        )
    },
}

export default UserAPI