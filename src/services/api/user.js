import api from "./index";

export const signIn = async (user) => {
  return await api.post("/auth/sign-in", user);
};
export const signUp = async (user) => {
  return await api.post("/auth/sign-up", user);
};

export const getMe = async () => {
  return await api.get("/auth/me");
};
