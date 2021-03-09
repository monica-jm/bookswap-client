
import axios from "axios";

//Enviroment variables
const baseURL =
  process.env.NODE_ENV === "production"
    ? "/auth" /* TODO: Production route */
    : "http://localhost:3001/api";

export const _axios = axios.create({
  baseURL,
  // Send this configuration if the endpoint we are accessing uses the server session, i.e. if we are going to use the req.user of the backend.
  withCredentials: true,
});

export const signupFn = (newUser) => _axios.post("/auth/signup", newUser);
export const loginFn = (user) => _axios.post("/auth/login", user);
export const logoutFn = (_) => _axios.get("/auth/logout");
export const getCurrentUser = (_) => _axios.get("/auth/session");
export const confirmUser = (confirmationCode) => _axios.post(`/auth/confirmed/${confirmationCode}`)

// export const updateAvatar = (avatar) =>
//   _axios.post("/avatar/change", { avatar });