import "./style.scss";
import LoginHead from "./../../components/login/LoginHead";
import RegisterForm from "./../../components/login/RegisterForm";
export default function Register() {
  return (
    <div className="login">
      <div className="login_wrapper">
        <div className="login_wrapper_wrap">
          <div className="login_wrapper_wrap_head">
            <LoginHead />
          </div>
          <div className="login_wrapper_wrap_body">
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
}
