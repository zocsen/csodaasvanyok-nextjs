import LoginForm from "@/components/shared/Auth/LoginForm/LoginForm";
import ToRegistrationForm from "@/components/shared/Auth/ToRegistrationForm/ToRegistrationForm";

import "./login.scss";

const AuthLoginPage = () => {
  return (
    <div className="login-page">
      <LoginForm />
      <ToRegistrationForm />
    </div>
  );
};

export default AuthLoginPage;
