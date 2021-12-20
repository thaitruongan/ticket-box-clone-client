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

  addRoom: (token, name, rowAmount, columnAmount)=>{
    const url = "room";
    return axiosClient.post(url, {
      headers: {
        "content-type": "application/json",
        tbtoken: token,
      },
      'name':`${name}`,
      'rowAmount':`${rowAmount}`,
      'columnAmount':`${columnAmount}`,
    })
  }
};

export default RoomAPI;
