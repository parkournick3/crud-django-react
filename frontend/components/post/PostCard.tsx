import useAuth from "@/hooks/useAuth";
import usePosts from "@/hooks/usePosts";
import { Post } from "@/types/Post";
import dayjs from "dayjs";
import { EditIcon, TrashIcon, UserIcon } from "lucide-react";
import { useState } from "react";
import PostUpdateDialog from "./PostUpdateDialog";

type Props = {
  post: Post;
};

const PostCard: React.FC<Props> = ({ post }) => {
  const { deletePost } = usePosts(post.id);
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <PostUpdateDialog
        open={isEditing}
        onClose={() => setIsEditing(!isEditing)}
        id={post.id}
      />

      <div className="card w-full max-w-xl bg-base-300 shadow-xl">
        <div className="card-body p-4">
          <div className="bg-base-200 rounded-lg p-4 flex flex-row justify-between items-center">
            <div>
              <div className="avatar placeholder flex items-center gap-2">
                <div className="bg-neutral text-neutral-content rounded-full w-8">
                  <span className="text-xs">
                    <UserIcon />
                  </span>
                </div>
                <p>@{post.username}</p>
              </div>

              <h2 className="card-title">
                {post.title}
                {dayjs(post.created_datetime).diff(dayjs()) > -200_000 && (
                  <div className="badge badge-secondary">NEW</div>
                )}
              </h2>
            </div>

            {user?.username == post.username && (
              <div className="flex flex-row gap-2">
                <button className="btn btn-square" onClick={deletePost}>
                  <TrashIcon />
                </button>

                <button
                  className="btn btn-square"
                  onClick={() => setIsEditing(!isEditing)}
                >
                  <EditIcon />
                </button>
              </div>
            )}
          </div>

          <p className="w-full break-words px-4">{post.content}</p>

          <p className="text-sm font-semibold px-4">
            {dayjs(post.updated_datetime).format("YYYY/MM/DD HH:mm:ss") ===
            dayjs(post.created_datetime).format("YYYY/MM/DD HH:mm:ss") ? (
              <span>
                Created:{" "}
                {dayjs(post.created_datetime).format("YYYY/MM/DD HH:mm")}
              </span>
            ) : (
              <span>
                Updated:{" "}
                {dayjs(post.updated_datetime).format("YYYY/MM/DD HH:mm")}
              </span>
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default PostCard;
