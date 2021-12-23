import axiosClient from "./axiosClient";

const UserAPI = {
  SignInByPhone: (phone) => {
    const url = "user";
    return axiosClient.post(url, {
      phoneNumber: `${phone}`,
    });
  },

  SignInByGoogle: (tokenId) => {
    const url = "user/google";
    return axiosClient.post(url, {
      google: tokenId,
    });
  },

  SignInByFacebook: (fbId) => {
    const url = "user/facebook";
    return axiosClient.post(url, {
      "facebook.id": fbId,
    });
  },

  getAll: (token) => {
    const url = "user";
    return axiosClient.get(url, {
      headers: {
        "content-type": "application/json",
        tbtoken: token,
      },
    });
  },

  ImportOTP: (phone, otp, google = null, facebook = null) => {
    const url = "user/otp";
    if (google === null && facebook === null)
      return axiosClient.post(url, {
        phoneNumber: `${phone}`,
        otp: `${otp}`,
      });
    else if (facebook !== null)
      return axiosClient.post(url, {
        phoneNumber: `${phone}`,
        otp: `${otp}`,
        facebook: "y",
        "facebook.id": facebook.id,
        "facebook.name": facebook.name,
      });
    return axiosClient.post(url, {
      phoneNumber: `${phone}`,
      otp: `${otp}`,
      google: google,
    });
  },

  updatePersonalInfo: (token, infor) => {
    const url = "user";
    const formData = new FormData();
    formData.append("file", infor.file);
    formData.append("email", infor.email);
    formData.append("name", infor.name);
    formData.append("birth", infor.birth);
    formData.append("sex", infor.sex);
    return axiosClient.put(url, formData, {
      headers: {
        "content-type": "multipart/form-data",
        tbtoken: token,
      },
    });
  },

  checkToken: (token) => {
    const url = "user/verify";
    return axiosClient.get(url, {
      headers: {
        tbtoken: token,
      },
    });
  },
};

export default UserAPI;
