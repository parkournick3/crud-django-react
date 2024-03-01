"use client";

import PostCreateForm from "@/components/post/PostCreateForm";
import PostList from "@/components/post/PostList";
import useAuth from "@/hooks/useAuth";
import { useEffect } from "react";

const Home = () => {
  const { loggedIn } = useAuth();

  useEffect(() => {
    if (!loggedIn) {
      window.location.href = "/sign_up";
    }
  });

  if (typeof window === "undefined") {
    <main>
      <span className="loading loading-dots loading-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></span>
    </main>;
  }

  return (
    <main>
      <PostCreateForm />
      <PostList />
    </main>
  );
};

export default Home;
