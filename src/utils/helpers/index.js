import CryptoJS from "crypto-js";
import axios from "axios";

export const encryptText = (password) => {
  try {
    return CryptoJS.AES.encrypt(
      password,
      process.env.REACT_APP_TS_KEY
    ).toString();
  } catch (error) {
    console.log("Error : ", error);
  }
};

export const decryptText = (password) => {
  try {
    return CryptoJS.AES.decrypt(
      password,
      process.env.REACT_APP_TS_KEY
    ).toString(CryptoJS.enc.Utf8);
  } catch (error) {
    console.log("Error : ", error);
  }
};

export const handleRequest = async (method, data = null) => {
  const url = process.env.REACT_APP_BACKEND_URL + "/user";
  let result;
  try {
    if (method === "POST") {
      result = await axios.post(url, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return result;
    } else {
      let result = await axios.get(url + `/${data}`);
      return result;
    }
  } catch (error) {
    result = error;
    return result;
  }
};
