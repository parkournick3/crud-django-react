import usePosts from "@/hooks/usePosts";
import PostCard from "./PostCard";
import { Post } from "@/types/Post";

const PostList = () => {
  const { posts, isLoading } = usePosts();

  if (isLoading) {
    return (
      <span className="loading loading-dots loading-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></span>
    );
  }

  return (
    <div>
      {posts?.map((post: Post) => (
        <PostCard key={post.title + post.username + post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
