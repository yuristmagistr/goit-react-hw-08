import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";
import css from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

const init = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const onLogin = (formData) => {
    dispatch(login(formData));
  };
  const RigisterSchema = object().shape({
    email: string().email("Must be a valid email").required("Required"),
    password: string().min(8, "Too Short!").required("Required"),
  });

  const handleSubmite = (value, actions) => {
    onLogin(value);

    actions.resetForm();
  };

  return (
    <div className={css.loginContainer}>
      <Formik
        initialValues={init}
        onSubmit={handleSubmite}
        validationSchema={RigisterSchema}
      >
        <Form className={css.form}>
          <label className={css.labelForm}>
            Email
            <Field
              className={css.formInput}
              type="text"
              name="email"
              placeholder="postowner@gmail.com"
            />
          </label>
          <span className={css.error}>
            <ErrorMessage name="email" as="span" />
          </span>
          <label className={css.labelForm}>
            Password
            <Field
              className={css.formInput}
              type="password"
              name="password"
              placeholder="password"
            />
          </label>
          <span className={css.error}>
            <ErrorMessage name="password" as="span" />
          </span>

          <button className={css.btnLogin} type="submit">
            Log In
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;