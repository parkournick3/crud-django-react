import { LockIcon, UserIcon, XIcon } from "lucide-react";
import { Formik, Form, Field } from "formik";
import useAuth, { signIn, signUp } from "@/hooks/useAuth";
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
          initialValues={{ username: "", password: "" }}
          onSubmit={() => {}}
        >
          {({ dirty, isValid, errors, setFieldError, values }) => (
            <Form method="dialog" className="w-full flex flex-col gap-4">
              {Object.entries(errors).map(
                ([key, value]) =>
                  !!value &&
                  value != "Required" && (
                    <div
                      key={key + value}
                      role="alert"
                      className="alert alert-error"
                    >
                      <XIcon />
                      <span>{value}</span>
                    </div>
                  )
              )}
              <label
                className={classNames(
                  "input input-bordered flex items-center gap-2",
                  errors.username != null && "input-error"
                )}
              >
                <UserIcon />
                <Field
                  type="text"
                  className={classNames("grow")}
                  placeholder="Username"
                  name="username"
                />
              </label>
              <label
                className={classNames(
                  "input input-bordered flex items-center gap-2",
                  errors.password != null &&
                    errors.password != "Required" &&
                    "input-error"
                )}
              >
                <LockIcon />
                <Field
                  type="password"
                  className={classNames("grow")}
                  placeholder="Password"
                  name="password"
                />
              </label>
              <div className="flex flex-row gap-2 py-2">
                <button
                  className={classNames(
                    "btn flex-1",
                    !(isValid && dirty) && "btn-disabled"
                  )}
                  onClick={() => {
                    signIn({
                      username: values.username,
                      password: values.password,
                    }).catch((err) => {
                      setFieldError(
                        "username",
                        "Username or password is incorrect"
                      );
                      setFieldError("password", "");
                    });
                  }}
                  disabled={!(isValid && dirty)}
                >
                  Sign in
                </button>

                <button
                  className={classNames("btn btn-primary flex-1")}
                  onClick={() => {
                    signUp({
                      username: values.username,
                      password: values.password,
                    }).catch((_) => {
                      if (values.username == "" || values.username == null) {
                        setFieldError("username", "Fill in the username");
                      }
                      if (values.password == "" || values.password == null) {
                        setFieldError("password", "Fill in the password");
                        return;
                      }
                      setFieldError("username", "Username already exists");
                    });
                  }}
                >
                  Sign up
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </dialog>
  );
};

export default AuthCard;
