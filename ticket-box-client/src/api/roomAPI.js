import axiosClient from "./axiosClient";

const RoomAPI = {
  getAll: (token) => {
    const url = "room";
    return axiosClient.get(url, {
      headers: {
        "content-type": "application/json",
        tbtoken: token,
      },
    });
  },
};

export default RoomAPI;
