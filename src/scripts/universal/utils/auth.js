import UniversalCookies from "universal-cookie";

export const setAuth = token => {
    const cookies = new UniversalCookies();
    cookies.set("jwtToken", token, { path: "/" });
};

export const removeAuth = () => {
    const cookies = new UniversalCookies();
    cookies.remove("jwtToken", { path: "/" });
};
