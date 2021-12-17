import axiosClient from "./axiosClient";

const MovieAPI = {
  getAll: (params) => {
    const url = "movie";
    return axiosClient.get(url, { params });
  },

  addFilm: (image, name, trailer, description, label, runningTime, releaseDate) => {
    const url = "movie";
    return axiosClient.post(url, { 
        'file':`${image}`,
        'name':`${name}`,
        'trailer': `${trailer}`,
        'description': `${description}`,
        'label': `${label}`,
        'runningTime':`${runningTime}`,
        'releaseDate':`${releaseDate}`,
     });
  },
};

export default MovieAPI;
