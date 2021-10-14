import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
  // baseURL: process.env.REACT_APP_API_BASE_URL,
  baseURL: 'https://fvaly.herokuapp.com/api',
  timeout: 10000,
});

// axios.get("url").then(res=> res.data)
const responseBody = (res: AxiosResponse) => res.data;

const get = (url: string) => {
  // console.log("url check",process.env.REACT_APP_API_BASE_URL)
  return instance.get(url).then(responseBody);
};
const post = (url: string, body: object) => {
  return instance.post(url, body).then(responseBody);
};
const patch = (url: string, body: object) => {
  return instance.patch(url, body).then(responseBody);
};
const _delete = (url: string) => {
  return instance.delete(url).then(responseBody);
};

const requests = {
  get,
  post,
  patch,
  _delete,
};

export default requests;
