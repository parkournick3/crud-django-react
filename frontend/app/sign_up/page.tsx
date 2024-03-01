"use client";

import AuthCard from "@/components/auth/AuthCard";
import useAuth from "@/hooks/useAuth";
import { useEffect } from "react";

const SignUp = () => {
  const { loggedIn } = useAuth();

  useEffect(() => {
    if (loggedIn) {
      window.location.href = "/";
    }
  });

  return (
    <main>
      <AuthCard />
    </main>
  );
};

export default SignUp;
