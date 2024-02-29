import useSWR from "swr";
import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URI || "http://localhost:8000",
});

export function useFetch<Data = any, Error = any>(url: string) {
  const { data, error } = useSWR<Data, Error>(url, async (url: string) => {
    const response = await api.get(url);

    return response.data;
  });

  return { data, error };
}
