import { LockIcon, MailIcon, UserIcon } from "lucide-react";
import { Formik, Form, Field } from "formik";
import useAuth from "@/hooks/useAuth";
import { createUser } from "@/actions/auth/createUser";

const AuthCard = () => {
  const { loggedIn, refetch: refetchUser } = useAuth();

  return (
    <dialog id="auth_modal" className="modal" open={!loggedIn}>
      <div className="modal-box">
        <h3 className="font-bold text-lg">Welcome to CodeLeap network! 👋</h3>
        <p className="py-4">Please enter your username</p>
        <Formik
          initialValues={{ username: "" }}
          onSubmit={(values, _actions) => {
            createUser({ username: values.username });
            refetchUser();
          }}
        >
          <Form method="dialog" className="w-full flex flex-col gap-4">
            {/* <label className="input input-bordered flex items-center gap-2">
                <MailIcon />
                <input type="text" className="grow" placeholder="Email" />
              </label> */}
            <label className="input input-bordered flex items-center gap-2">
              <UserIcon />
              <Field
                type="text"
                className="grow"
                placeholder="Username"
                name="username"
              />
            </label>
            {/* <label className="input input-bordered flex items-center gap-2">
                <LockIcon />
                <input type="password" className="grow" value="password" />
              </label> */}
            <button className="btn">Save</button>
          </Form>
        </Formik>
      </div>
    </dialog>
  );
};

export default AuthCard;
