import { Form, Formik } from "formik";
import RegisterInput from "../inputs/registerInput";
import { useState } from "react";
import * as Yup from "yup";
import DateOfBirthSelect from "./DateOfBirthSelect";
import GenderSelect from "./GenderSelect";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const navigate = useNavigate();

  const userInfos = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    bYear: new Date().getFullYear(),
    bMonth: new Date().getMonth() + 1,
    bDay: new Date().getDate(),
    gender: "",
  };

  const [user, setUser] = useState(userInfos);

  const {
    first_name,
    last_name,
    email,
    password,
    bYear,
    bMonth,
    bDay,
    gender,
  } = user;

  const handlRegisterChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const checkValidationDate = () => {
    let current_data = new Date();
    let picked_date = new Date(bYear, bMonth - 1, bDay);
    let atleastThan14 = new Date(1970 + 14, 0, 1);
    let noMoreThan70 = new Date(1970 + 70, 0, 1);
    if (current_data - picked_date < atleastThan14) {
      setDateError("under age you  are not 14");
      return false;
    } else if (current_data - picked_date > noMoreThan70) {
      setDateError("you are more than 70");
      return false;
    } else {
      setDateError("");
      return true;
    }
  };

  const checkValidationGender = () => {
    if (gender === "") {
      setGenderError("please fill gender Error");
      return false;
    } else {
      setGenderError("");
      return true;
    }
  };

  const checkValidationForm = () => {
    return {
      first_name: Yup.string()
        .required("First Name is required.")
        .min(2, "First Name must be at least 2 characters")
        .max(30, "First Name must be at most 30 characters")
        .matches(
          /^[aA-zZ]+$/,
          "First Name and special characters are not allowed."
        ),
      last_name: Yup.string()
        .required("Last Name is required.")
        .min(2, "Last Name must be at least 2 characters")
        .max(30, "Last Name must be at most 30 characters")
        .matches(
          /^[aA-zZ]+$/,
          "Last Name and special characters are not allowed."
        ),
      email: Yup.string()
        .required("Email is required.")
        .email("Enter a valid email address."),
      password: Yup.string()
        .required("Passwrod is required.")
        .min(6, "Passwrod must be at least 2 characters"),
    };
  };

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const registerSubmit = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/login/register`,
        {
          first_name,
          last_name,
          email,
          password,
          username: email,
          bYear,
          bMonth,
          bDay,
          gender,
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

  const registervalidation = Yup.object(checkValidationForm());

  const [dateError, setDateError] = useState("");
  const [genderError, setGenderError] = useState("");

  return (
    <div className="login_wrapper_wrap_body_form">
      <Formik
        enableReinitialize
        initialValues={{
          first_name,
          last_name,
          email,
          password,
          bYear,
          bMonth,
          bDay,
          gender,
        }}
        validationSchema={registervalidation}
        onSubmit={() => {
          if (checkValidationDate() && checkValidationGender()) {
            registerSubmit();
          }
        }}
      >
        {(formik) => (
          <Form className="login_wrapper_wrap_body_form_register">
            <div className="login_wrapper_wrap_body_form_register_line">
              <RegisterInput
                placeholder="First Name"
                type="text"
                name="first_name"
                onChange={handlRegisterChange}
              />
              <RegisterInput
                placeholder="Last Name"
                type="text"
                name="last_name"
                onChange={handlRegisterChange}
              />
              <RegisterInput
                placeholder="Mobile number or Email address"
                type="text"
                name="email"
                onChange={handlRegisterChange}
              />
              <RegisterInput
                placeholder="new Password"
                type="text"
                name="password"
                onChange={handlRegisterChange}
              />
              <div className="login_wrapper_wrap_body_form_register_line_col">
                <div className="login_wrapper_wrap_body_form_register_line_col_header">
                  Date of birth <div className="info_icon"></div>
                </div>
                <DateOfBirthSelect
                  bDay={bDay}
                  bMonth={bMonth}
                  bYear={bYear}
                  handlRegisterChange={handlRegisterChange}
                />
                {dateError && <div className="input_error">{dateError}</div>}
              </div>
              <div className="login_wrapper_wrap_body_form_register_line_col">
                <div className="login_wrapper_wrap_body_form_register_line_col_header">
                  Gender <div className="info_icon"></div>
                </div>

                <GenderSelect handlRegisterChange={handlRegisterChange} />

                {genderError && (
                  <div className="input_error">{genderError}</div>
                )}
              </div>

              <div className="login_wrapper_wrap_body_form_register_line_register">
                <div className="login_wrapper_wrap_body_form_register_line_register_head">
                  <p>
                    We make it easy, fast and affordable to send SMS marketing
                    campaigns or engage in 1-on-1 conversations with customers.
                  </p>
                </div>
                <div className="login_wrapper_wrap_body_form_register_line_register_body">
                  <div className="login_wrapper_wrap_body_form_register_line_register_body_btn">
                    <button className="btn_blue">Register</button>
                    <ClipLoader
                      loading={loading}
                      size={20}
                      aria-label="Loading Spinner"
                      data-testid="loader"
                    />
                  </div>
                </div>
              </div>
            </div>
            {error && <div className="error_text">{error}</div>}
            {success && <div className="success_text">{success}</div>}
          </Form>
        )}
      </Formik>
    </div>
  );
}
