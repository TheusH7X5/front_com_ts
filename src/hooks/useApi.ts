import axios, { AxiosResponse } from "axios";

const api = axios.create({
  baseURL: process.env.API,
});

export const useApi = () => ({
  validateToken: async (token: string) => {
    return {
      user: { id: 3, name: "matheus", email: "matheus@gmail.com" },
    };
    // const response = await api.post("/validate", { token });
    // return response.data;
  },

  signin: async (email: string, password: string) => {
    return {
      user: { id: 3, name: "matheus", email: "matheus@gmail.com" },
      token: "123456789",
    };
    // const response = await api.post("/auth/login", { email, password });
    // console.log(response.data);
    // return response.data;
  },
  logout: async () => {
    return { status: true };
    const response = await api.post("/logout");
    return response.data;
  },
});
