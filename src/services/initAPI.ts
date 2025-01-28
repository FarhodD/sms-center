import axios, { CreateAxiosDefaults } from "axios";
import { AUTH_STORAGE } from "../store/authStore";

const options: CreateAxiosDefaults = {
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
  "Content-type": "application/json",
},
  withCredentials: true,
};

const axiosClassic = axios.create(options);
const axiosWithAuth = axios.create(options);

axiosWithAuth.interceptors.request.use((config) => {
  const {state: {accessToken}} = JSON.parse(localStorage.getItem(AUTH_STORAGE) || '');
  console.log('ACCESS TOKEN AXIOS:: ', accessToken);

  if (config?.headers && accessToken)
    config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
});

export {axiosClassic, axiosWithAuth}