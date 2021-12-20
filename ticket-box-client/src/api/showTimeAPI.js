import axiosClient from "./axiosClient";

const ShowTimeAPI = {
    getAll: () => {
        const url = 'showtime';
        return axiosClient.get(url)
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

    addShowTime:(token,movieId,roomId,_date,price,vipPrice) => {
        const url = "showtime";
        return axiosClient.post(url, {
            
            'movieId':`${movieId}`,
            'roomId':`${roomId}`,
            'timeStart':`${_date}`,
            'standardPrice':`${price}`,
            'vipPrice':`${vipPrice}`,
        },{headers: {
            "content-type": "application/json",
            "tbtoken": token,
        },})
  }
  
}

export default ShowTimeAPI