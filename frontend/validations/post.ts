import * as Yup from "yup";

export const PostUpdateSchema = Yup.object().shape({
  title: Yup.string()
    .min(1, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  content: Yup.string().min(1, "Too Short!").required("Required"),
});
