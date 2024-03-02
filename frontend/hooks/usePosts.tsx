import { api } from "../utils/api";
import { Post } from "@/types/Post";
import useAuth from "./useAuth";
import useSWRInfinite from "swr/infinite";
import { useMemo } from "react";

const usePosts = (id?: number) => {
  const PAGE_SIZE = 3;

  const { currentUser, loggedIn } = useAuth();

  const {
    data: pages,
    error,
    isLoading,
    size,
    setSize,
    mutate,
  } = useSWRInfinite(
    (index) => `/posts/?per_page=${PAGE_SIZE}&page=${index + 1}`,
    async (url: string) => {
      const response = await api.get(url);

      return response.data;
    }
  );

  const posts: Post[] = useMemo(() => {
    return pages ? [].concat(...pages) : [];
  }, [pages]);

  const isReachingEnd = useMemo(() => {
    return pages && pages[pages.length - 1]?.length < PAGE_SIZE;
  }, [pages]);

  const deletePost = () => {
    if (id && !isLoading) {
      api.delete(`/posts/${id}`).then(() => {
        mutate(
          pages?.map((page) => page.filter((post: Post) => post.id !== id))
        );
      });
    }
  };

  const createPost = (newData: Partial<Post>) => {
    if (loggedIn && !isLoading) {
      api
        .post("/posts/", { ...newData, username: currentUser?.username })
        .then(() => {
          if (pages?.length) {
            mutate([...pages, [newData]]);
          } else {
            mutate([[newData]]);
          }
        });
    }
  };

  const updatePost = (newData: Partial<Post>) => {
    if (id && !isLoading) {
      api.patch(`/posts/${id}`, newData).then(() => {
        mutate(
          pages?.map((page) =>
            page.map((post: Post) => (post.id === id ? newData : post))
          )
        );
      });
    }
  };

  const loadMore = () => {
    setSize(size + 1);
  };

  return {
    posts,
    isLoading,
    isError: error,
    deletePost,
    createPost,
    updatePost,
    loadMore,
    isReachingEnd,
  };
};

export default usePosts;
