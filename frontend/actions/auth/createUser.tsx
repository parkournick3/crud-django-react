import { User } from "@/types/User";

export const createUser = (user: User) => {
  localStorage.setItem("username", user.username);
};
