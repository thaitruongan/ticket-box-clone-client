import axiosClient from "./axiosClient";

const BannerAPI = {
    getAll: (params) => {
        const url = 'banner';
        return axiosClient.get(url, { params })
    },
}

export default BannerAPI