import axios from "axios";

export const setAxiosConfigs = () => {
    axios.defaults.baseURL = 'http://localhost:3000';
};
