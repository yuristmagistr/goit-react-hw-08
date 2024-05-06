import RegistrationForm from "../../components/RegistrationForm/RegistrationForm.jsx";
import css from "./RegistrationPage.module.css";


const RegistrationFormPage = () => {
  return (
    <div className={css.regisrationPage}>
      <h1>Registration page</h1>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationFormPage;