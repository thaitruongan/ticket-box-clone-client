import axiosClient from "./axiosClient";

const BillAPI = {
  getAll: (token) => {
    const url = "payment";
    return axiosClient.get(url, {
      headers: {
        "content-type": "application/json",
        tbtoken: token,
      },
    });
  }
};

export default BillAPI;
