import usePosts from "@/hooks/usePosts";
import PostCard from "./PostCard";
import { Post } from "@/types/Post";
import classNames from "classnames";

const PostList = () => {
  const { posts, isLoading, loadMore, isReachingEnd } = usePosts();

  if (isLoading) {
    return (
      <span className="loading loading-dots loading-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></span>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 py-4 px-2">
      {posts?.map((post: Post) => (
        <PostCard key={post.title + post.username + post.id} post={post} />
      ))}

      <button
        disabled={isReachingEnd}
        className={classNames(
          "btn btn-primary",
          isReachingEnd && "btn-disabled"
        )}
        onClick={loadMore}
      >
        Load more
      </button>
    </div>
  );
};

export default PostList;
