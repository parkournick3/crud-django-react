import axios from "axios";
import Cookies from "js-cookie";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URI || "http://localhost:8000",
  headers: {
    Authorization: `Token ${Cookies.get("token")}`,
  },
});
