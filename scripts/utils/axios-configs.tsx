import axios from "axios";

export const setAxoisConfigs = (): void => {
    axios.defaults.baseURL = 'http://localhost:3000';
};

export const setAuth = (token?: String): void => {
    if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${ token }`;
    } else {
        axios.defaults.headers.common["Authorization"] = null;
    }
};
