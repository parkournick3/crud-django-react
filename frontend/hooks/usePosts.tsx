import useSWR, { mutate } from "swr";
import { api } from "../utils/api";
import { Post } from "@/types/Post";
import useAuth from "./useAuth";

const usePosts = (id?: number) => {
  const { user, loggedIn } = useAuth();

  const { data, error } = useSWR<Post[], Error>(
    "/posts/",
    async (url: string) => {
      const response = await api.get(url);

      return response.data;
    }
  );

  const deletePost = () => {
    if (id) {
      api.delete(`/posts/${id}`).then(() => {
        mutate("/posts/");
      });
    }
  };

  const createPost = (data: Partial<Post>) => {
    if (loggedIn) {
      api.post("/posts/", { ...data, username: user?.username }).then(() => {
        mutate("/posts/");
      });
    }
  };

  const updatePost = (data: Partial<Post>) => {
    if (id) {
      api.patch(`/posts/${id}`, data).then(() => {
        mutate("/posts/");
      });
    }
  };

  return {
    posts: data,
    isLoading: !error && !data,
    isError: error,
    deletePost,
    createPost,
    updatePost,
  };
};

export default usePosts;
