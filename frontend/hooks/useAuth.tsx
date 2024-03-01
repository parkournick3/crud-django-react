"use client";

import { User } from "@/types/User";
import { useEffect, useState } from "react";

export const createUser = (user: User) => {
  localStorage.setItem("username", user.username);
};

export const getUser: () => User | null = () => {
  const username = localStorage.getItem("username");

  if (!!username) {
    const user: User = { username };
    return user;
  }

  return null;
};

const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);

  const fetch = () => {
    setUser(getUser());
  };

  useEffect(() => {
    fetch();
  }, []);

  return { loggedIn: !!user, refetch: fetch, user };
};

export default useAuth;
