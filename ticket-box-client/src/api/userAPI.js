import axiosClient from "./axiosClient";

const UserAPI = {
    SignInByPhone: (phone) => {
        console.log(phone)
        const url = 'user';
        return axiosClient.post(url, {
            "phoneNumber": `${phone}`
        })
    },
}

export default UserAPI