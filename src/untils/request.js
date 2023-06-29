import axios from "axios";

const request = axios.create({
  baseURL: "https://fakestoreapi.com/",
});

export const get = async (path, option = []) => {
  const reponse = await request.get(path, option);
  return reponse;
};

export default request;
