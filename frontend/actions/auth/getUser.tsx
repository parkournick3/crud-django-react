import { User } from "@/types/User";

export const getUser: () => User | null = () => {
  if (typeof window === "undefined") {
    const username = localStorage.getItem("username");

    if (!!username) {
      const user: User = { username };
      return user;
    }
  }

  return null;
};
