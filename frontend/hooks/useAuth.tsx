"use client";

import { User } from "@/types/User";
import { api } from "@/utils/api";
import { AxiosError } from "axios";
import useSWR from "swr";
import Cookies from "js-cookie";

export const signUp = async (
  newUser: Partial<User>
): Promise<{ token: string; user: User } | AxiosError<string>> => {
  const response = await api.post<any>("/signup/", newUser);

  if (response.data?.token) {
    Cookies.set("token", response.data.token, { path: "" });
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  }

  return response as unknown as { token: string; user: User };
};

export const signIn = async (
  newUser: Partial<User>
): Promise<{ token: string; user: User } | AxiosError<string>> => {
  const response = await api.post<any>("/login/", newUser);

  if (response.data?.token) {
    Cookies.set("token", response.data.token, { path: "" });
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  }

  return response as unknown as { token: string; user: User };
};

export const logOut = () => {
  Cookies.remove("token", { path: "" });
  window.location.href = "/auth";
};

const useAuth = () => {
  const { data: currentUser } = useSWR("/current_user/", (url) =>
    api.get(url).then((res) => res.data)
  );

  return { loggedIn: !!currentUser, currentUser };
};

export default useAuth;
