import { User } from "@/types/auth/User";

export const getUser: () => User | null = () => {
  const username = localStorage.getItem("username");

  if (!!username) {
    const user: User = { username };
    return user;
  }

  return null;
};
