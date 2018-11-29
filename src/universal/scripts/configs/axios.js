import axios from "axios";
import UniversalCookie from "universal-cookie";

export const setAxiosConfigs = () => {
    axios.defaults.baseURL = API_ENDPOINT;

    const universalCookie = new UniversalCookie();

    const jwtToken = universalCookie.get("jwtToken");

    if (jwtToken !== "undefined") {
        axios.defaults.headers.common['Authorization'] = `Bearer ${ jwtToken }`;
    }
};
