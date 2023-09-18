import axios from "axios";

export const makeRequest = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  headers: {
    Authorization: "bearer " + import.meta.env.VITE_APP_API_TOKEN,
    "Content-Type": "application/json",
  },
});
export const createOrder = async (order) => {
  const { data } = await makeRequest.post("/orders", order);
  return data;
};
