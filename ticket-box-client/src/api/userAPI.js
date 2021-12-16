import axiosClient from "./axiosClient";

const UserAPI = {
    SignInByPhone: (phone) => {
        const url = 'user';
        return axiosClient.post(url, {
            "phoneNumber": `${phone}`
        })
    },

    ImportOTP: (phone, otp) => {
        console.log(otp);
        console.log(phone);
        const url = 'user/otp';
        return axiosClient.post(url, {
            "phoneNumber": `${phone}`,
            "otp": `${otp}`
          })
    },
}

export default UserAPI