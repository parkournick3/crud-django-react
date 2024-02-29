import { User } from "@/types/auth/User";

export const createUser = (user: User) => {
  localStorage.setItem("username", user.username);
};
