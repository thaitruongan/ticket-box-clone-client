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
}

export default UserAPI