"use client";

import { getUser } from "@/actions/auth/getUser";
import { User } from "@/types/auth/User";
import { useEffect, useState } from "react";

const useAuth = () => {
  const [user, setUser] = useState<User | null>(getUser());

  const fetch = () => {
    setUser(getUser());
  };

  useEffect(() => {
    fetch();
  }, []);

  return { loggedIn: !!user, refetch: fetch };
};

export default useAuth;
