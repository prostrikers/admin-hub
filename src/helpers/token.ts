import Cookies from "js-cookie";

export const getAuthToken = (): string | null => Cookies.get("session") ?? null;
export const getRefreshToken = (): string | null =>
  Cookies.get("admin_refreshToken") ?? null;

export const setAuthToken = (token: string) =>
  Cookies.set("admin_session", token, {
    path: "/",
    domain: window.location.hostname,
    expires: 1 / 24, // 1 hour
  });

export const setRefreshToken = (refreshToken: string) =>
  Cookies.set("admin_refreshToken", refreshToken, {
    path: "/",
    domain: window.location.hostname,
    expires: 1, // 1 day
  });

export const clearAuthToken = () => {
  Cookies.remove("admin_session", {
    path: "/",
    domain: window.location.hostname,
  });
  Cookies.remove("admin_refreshToken", {
    path: "/",
    domain: window.location.hostname,
  });
};
