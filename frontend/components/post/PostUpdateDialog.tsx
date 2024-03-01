import { Field, Form, Formik } from "formik";
import classNames from "classnames";
import { PostUpdateSchema } from "@/validations/post";
import usePosts from "@/hooks/usePosts";

const PostUpdateDialog = ({
  id,
  open,
  onClose,
}: {
  id: number;
  open: boolean;
  onClose: () => void;
}) => {
  const { updatePost } = usePosts(id);

  return (
    <dialog
      id="auth_modal"
      className="modal modal-bottom sm:modal-middle bg-base-300 bg-opacity-60 backdrop-blur"
      open={open}
      onClose={onClose}
    >
      <div className="modal-box">
        <Formik
          validationSchema={PostUpdateSchema}
          initialValues={{ title: "", content: "" }}
          onSubmit={(values, actions) => {
            actions.resetForm();
            updatePost(values);
            onClose();
          }}
        >
          {({ dirty, isValid }) => (
            <Form className="w-full flex flex-col gap-4">
              <button
                onClick={onClose}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </button>
              <label className="input input-bordered flex items-center gap-2">
                <Field
                  type="text"
                  className="grow"
                  placeholder="Title"
                  name="title"
                />
              </label>
              <label className="textarea textarea-bordered flex items-center gap-2 p-0">
                <Field
                  component="textarea"
                  type="text"
                  className="grow textarea resize-none"
                  placeholder="Write something"
                  name="content"
                />
              </label>
              <button
                className={classNames(
                  "btn",
                  !(isValid && dirty) && "btn-disabled"
                )}
                disabled={!(isValid && dirty)}
                type="submit"
              >
                Send
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </dialog>
  );
};

export default PostUpdateDialog;
