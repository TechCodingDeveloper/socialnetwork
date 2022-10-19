import "./style.scss";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import LoginInput from "./../../components/inputs/loginInput/index";
import { useState } from "react";
import * as Yup from "yup";
export default function Login() {
  const loginIngos = {
    email: "",
    password: "",
  };

  const [login, setLogin] = useState(loginIngos);
  const { email, password } = login;

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const loginValidation = Yup.object({
    email: Yup.string().required("Email address is required").email().max(100),
    password: Yup.string()
      .required("Password address is required")
      .min(8)
      .max(15),
  });

  return (
    <div className="login">
      <div className="login_wrapper">
        <div className="login_wrapper_wrap">
          <div className="login_wrapper_wrap_head">
            <img src="../../icons/facebook.svg" alt="" />
            <span>
              Socialnetwork helps you connect and share with the people in your
              life
            </span>
          </div>
          <div className="login_wrapper_wrap_body">
            <div className="login_wrapper_wrap_body_form">
              <Formik
                enableReinitialize
                initialValues={{
                  email,
                  password,
                }}
                validationSchema={loginValidation}
              >
                {(formik) => (
                  <Form>
                    <LoginInput
                      placeholder="Email address or Phone number"
                      name="email"
                      onChange={handleLoginChange}
                    />
                    <LoginInput
                      placeholder="Password"
                      type="password"
                      name="password"
                      onChange={handleLoginChange}
                    />
                    <button className="btn_blue" type="submit">
                      login
                    </button>
                  </Form>
                )}
              </Formik>
              <Link
                to="/forget"
                className="login_wrapper_wrap_body_form_forgot_password"
              >
                forgotten password ?
              </Link>
              <div className="login_wrapper_wrap_body_form_sign_splitter"></div>
              <button className=" login_wrapper_wrap_body_form_open_signup btn_blue">
                Create Account
              </button>
            </div>
          </div>
          <div className="login_wrapper_wrap_footer">
            <Link className="login_wrapper_wrap_footer_sign_extera" to="/">
              <b>Create a Page</b>
              for a celebrity, brand or business
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
