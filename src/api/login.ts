import axiosInstance from "./base";

export const login = (username: string, password: string) => {
  // https://dummyjson.com requires username and password to be sent in the body
  // But from user, we are getting email and password
  // so, converting email to username by removing the domain part
  // For example, if email is "atuny0@sohu.com" then username will be "atuny0"
  const usernameWithoutDomain = username.split("@")[0];
  return axiosInstance.post("/auth/login", {
    username: usernameWithoutDomain,
    password,
  });
}