import axiosClient from "./axiosClient";

const MovieAPI = {
  getAll: (params) => {
    const url = "movie";
    return axiosClient.get(url, { params });
  },

  addFilm: (token, image, name, trailer, description, label, runningTime, releaseDate) => {
    const url = "movie";
    return axiosClient.post(url, { 
        'image':`${image}`,
        'name':`${name}`,
        'trailer': `${trailer}`,
        'description': `${description}`,
        'label': `${label}`,
        'runningTime':`${runningTime}`,
        'releaseDate':`${releaseDate}`,
        headers: {
          'content-type': 'application/json',
          //'content-type': 'multipart/form-data',
          'tbtoken': token
        },
      },
    );
  },
};

export default MovieAPI;
