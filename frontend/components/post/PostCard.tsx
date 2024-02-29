import { Post } from "@/types/Post";

type Props = {
  post: Post;
};

const PostCard: React.FC<Props> = ({ post }) => {
  return <div>{post.title}</div>;
};

export default PostCard;
