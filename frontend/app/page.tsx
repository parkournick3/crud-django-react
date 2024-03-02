"use client";

import Footer from "@/components/general/Footer";
import PostCreateForm from "@/components/post/PostCreateForm";
import PostList from "@/components/post/PostList";

const Home = () => {
  if (typeof window === "undefined") {
    <main>
      <span className="loading loading-dots loading-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></span>
    </main>;
  }

  return (
    <main className="flex flex-col min-h-screen h-full">
      <PostCreateForm />
      <PostList />

      <Footer />
    </main>
  );
};

export default Home;
