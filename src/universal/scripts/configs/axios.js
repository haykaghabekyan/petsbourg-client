import axios from "axios";
import UniversalCookie from "universal-cookie";

export const setAxiosConfigs = () => {
    axios.defaults.baseURL = process && process.ENV.API_ENDPOINT ? process.ENV.API_ENDPOINT : "http://localhost:3003";

    const universalCookie = new UniversalCookie();

    const jwtToken = universalCookie.get("jwtToken");

    if (jwtToken !== "undefined") {
        axios.defaults.headers.common['Authorization'] = `Bearer ${ jwtToken }`;
    }
};
