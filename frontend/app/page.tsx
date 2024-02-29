"use client";

import AuthCard from "@/components/auth/AuthCard";
import PostList from "@/components/post/PostList";

const Home = () => {
  return (
    <main>
      <AuthCard />

      <PostList />
    </main>
  );
};

export default Home;
