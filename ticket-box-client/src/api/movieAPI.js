import axiosClient from "./axiosClient";

const MovieAPI = {
    getAll: (params) => {
        const url = 'movie';
        return axiosClient.get(url, { params })
    },
}

export default MovieAPI