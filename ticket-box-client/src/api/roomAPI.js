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
<<<<<<< HEAD
      headers: {
        "content-type": "application/json",
        tbtoken: token,
      },
      'name':name,
      'rowAmount':rowAmount,
      'columnAmount':columnAmount,
    })
=======
      
      'name':`${name}`,
      'rowAmount':`${rowAmount}`,
      'columnAmount':`${columnAmount}`,
    },{headers: {
      "content-type": "application/json",
      "tbtoken": token,
    },})
>>>>>>> ce2daff29344966fed07e783063269265fadda07
  }
};

export default RoomAPI;
