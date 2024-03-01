import { UserIcon } from "lucide-react";
import { Formik, Form, Field } from "formik";
import useAuth, { createUser } from "@/hooks/useAuth";
import classNames from "classnames";
import { SignupSchema } from "@/validations/auth";

const AuthCard = () => {
  const { loggedIn } = useAuth();

  return (
    <dialog
      id="auth_modal"
      className="modal modal-bottom sm:modal-middle bg-base-300 bg-opacity-60 backdrop-blur"
      open={!loggedIn}
    >
      <div className="modal-box">
        <h3 className="font-bold text-lg">Welcome to CodeLeap network! 👋</h3>
        <p className="py-4">Please enter your username</p>
        <Formik
          validationSchema={SignupSchema}
          initialValues={{ username: "" }}
          onSubmit={(values, _actions) => {
            createUser({ username: values.username });
            window.location.href = "/";
          }}
        >
          {({ dirty, isValid }) => (
            <Form method="dialog" className="w-full flex flex-col gap-4">
              <label className="input input-bordered flex items-center gap-2">
                <UserIcon />
                <Field
                  type="text"
                  className="grow"
                  placeholder="Username"
                  name="username"
                />
              </label>
              <button
                className={classNames(
                  "btn",
                  !(isValid && dirty) && "btn-disabled"
                )}
                disabled={!(isValid && dirty)}
              >
                Save
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </dialog>
  );
};

export default AuthCard;
