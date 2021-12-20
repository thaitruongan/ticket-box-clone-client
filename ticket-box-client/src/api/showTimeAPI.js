import axiosClient from "./axiosClient";

const ShowTimeAPI = {
    getAll: (params) => {
        const url = 'showtime';
        return axiosClient.get(url, { params })
    },

    getByMovie: (id, date) => {
        const url = 'showtime/movie/'+id;
        return axiosClient.post(url, {            
            "date": `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`
         })
    },

    getById: (id) => {
        const url = 'showtime/'+id;
        return axiosClient.get(url)
    },
}

export default ShowTimeAPI