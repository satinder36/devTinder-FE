export const BASE_URL =
  location.hostname === "localhost" ? "http://localhost:3000" : "/api";
// export const BASE_URL = "/api";

export const ROUTES = {
  HOME: "/",
  PROFILE: "/profile",
  LOGIN: "/login",
  CONNECTIONS: "/connections",
  REQUESTS: "/requests",
};
