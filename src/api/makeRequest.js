import axios from "axios";

export const publicRequest = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
export const privateRequest = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  headers: {
    // Authorization: "bearer " + import.meta.env.VITE_APP_API_TOKEN,
    "Content-Type": "application/json",
  },
});
export const createOrder = async (order) => {
  const { data } = await publicRequest.post("/orders", order);
  return data;
};
export const register = async (userData) => {
  const { data } = await publicRequest.post("/auth/local/register", userData);
  return data;
};
