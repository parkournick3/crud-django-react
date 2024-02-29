import { useFetch } from "./useFetch";

const usePosts = () => {
  const { data, error } = useFetch("/posts/");

  return {
    posts: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default usePosts;
