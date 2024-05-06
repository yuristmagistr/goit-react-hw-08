import LoginForm from "../../components/LoginForm/LoginForm.jsx";
import css from "./LoginPage.module.css";


const LoginFormPage = () => {
  return (
    <div className={css.loginPage}>
      <h1>Log In page</h1>
      <LoginForm />
    </div>
  );
};

export default LoginFormPage;