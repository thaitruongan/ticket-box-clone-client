import axiosClient from "./axiosClient";

const MovieAPI = {
  getAll: (params) => {
    const url = "movie";
    return axiosClient.get(url, { params });
  },

  addFilm: (token, film) => {
    const url = "movie";
    const formData = new FormData();
    formData.append('file', film.file);
    formData.append('name', film.name);
    formData.append('trailer', film.trailer);
    formData.append('description', film.description);
    formData.append('label', film.label);
    formData.append('runningTime', film.runningTime);
    formData.append('releaseDate', film.releaseDate);
    return axiosClient.post(url, formData, {
        headers: {
          'content-type': 'multipart/form-data',
          'tbtoken': token,
        },
      },
    );
  },

  updateFilm: (token, film)=>{
    const url="movie";
    const formData=new FormData();
    formData.append('file', film.file);
    formData.append('name', film.name);
    formData.append('trailer', film.trailer);
    formData.append('description', film.description);
    formData.append('label', film.label);
    formData.append('runningTime', film.runningTime);
    formData.append('releaseDate', film.releaseDate);
    return axiosClient.put(url, formData, {
      headers:{
        'content-type': 'multipart/form-data',
        'tbtoken': token,
      }
    })
  }
};

export default MovieAPI;
