import axiosClient from "./axiosClient";

const ShowTimeAPI = {
    getAll: (params) => {
        const url = 'showtime';
        return axiosClient.get(url, { params })
    },
}

export default ShowTimeAPI