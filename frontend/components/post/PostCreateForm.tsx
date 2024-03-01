import { Field, Form, Formik } from "formik";
import classNames from "classnames";
import { PostUpdateSchema } from "@/validations/post";
import usePosts from "@/hooks/usePosts";

const PostCreateForm = () => {
  const { createPost } = usePosts();

  return (
    <div className="mt-6 mx-auto max-w-xl w-full">
      <Formik
        validationSchema={PostUpdateSchema}
        initialValues={{ title: "", content: "" }}
        onSubmit={(values, actions) => {
          actions.resetForm();
          createPost(values);
        }}
      >
        {({ dirty, isValid }) => (
          <Form className="w-full flex flex-col gap-4">
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
  );
};

export default PostCreateForm;
