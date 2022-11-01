import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import LoginInput from "../inputs/loginInput";
import { useState } from "react";
import * as Yup from "yup";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginIngos = {
    email: "",
    password: "",
  };

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

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

  const registerSubmit = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/login`,
        {
          email,
          password,
        }
      );
      const { message, ...rest } = data;
      setSuccess(message);
      setLoading(false);
      setError("");
      Cookies.set("user", JSON.stringify(rest));
      dispatch({ type: "LOGIN", payload: rest });
      navigate("/");
    } catch (error) {
      setLoading(false);
      setError(error?.response?.data?.message);
    }
  };

  return (
    <>
      <div className="login_wrapper_wrap_body_form">
        <Formik
          enableReinitialize
          initialValues={{
            email,
            password,
          }}
          validationSchema={loginValidation}
          onSubmit={() => {
            registerSubmit();
          }}
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
                <ClipLoader
                  loading={loading}
                  size={20}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
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
        <Link
          className=" login_wrapper_wrap_body_form_open_signup btn_blue"
          to="/register"
        >
          Create Account
        </Link>

        {error && <div className="error_text">{error}</div>}
        {success && <div className="success_text">{success}</div>}
      </div>
      <div className="login_wrapper_wrap_body_footer">
        <Link className="login_wrapper_wrap_footer_sign_extera" to="/">
          <b>Create a Page</b>
          for a celebrity, brand or business
        </Link>
      </div>
    </>
  );
}
