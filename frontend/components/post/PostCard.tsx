import useAuth from "@/hooks/useAuth";
import usePosts from "@/hooks/usePosts";
import { Post } from "@/types/Post";
import { EditIcon, TrashIcon, UserIcon } from "lucide-react";
import { useState } from "react";
import PostUpdateDialog from "./PostUpdateDialog";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);
dayjs.extend(relativeTime);

type Props = {
  post: Post;
};

const PostCard: React.FC<Props> = ({ post }) => {
  const { deletePost } = usePosts(post.id);
  const { currentUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <PostUpdateDialog
        open={isEditing}
        onClose={() => setIsEditing(!isEditing)}
        post={post}
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

              <h2 className="card-title break-all">{post.title}</h2>
            </div>

            {currentUser?.username == post.username && (
              <div className="flex flex-row gap-2 max-sm:flex-col-reverse">
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

          <div className="flex flex-row justify-between">
            <p className="text-sm font-semibold px-4">
              {dayjs(post.updated_datetime).format("YYYY/MM/DD HH:mm:ss") ===
              dayjs(post.created_datetime).format("YYYY/MM/DD HH:mm:ss") ? (
                <span>Created {dayjs(post.created_datetime).fromNow()}</span>
              ) : (
                <span>Updated {dayjs(post.updated_datetime).fromNow()}</span>
              )}
            </p>

            {dayjs(post.created_datetime).diff(dayjs()) > -200_000 && (
              <div className="badge badge-secondary break-normal">NEW</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCard;
