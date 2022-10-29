import { Form, Formik } from "formik";
import RegisterInput from "../inputs/registerInput";
import { useState } from "react";
import * as Yup from "yup";
export default function RegisterForm() {
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

  const years = Array.from(new Array(100), (val, index) => bYear - index);
  const months = Array.from(new Array(12), (val, index) => 1 + index);
  const getDays = () => new Date(bYear, bMonth, 0).getDate();
  const days = Array.from(new Array(getDays()), (val, index) => 1 + index);

  const handlRegisterChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const registervalidation = Yup.object({
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
  });

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
                <div className="login_wrapper_wrap_body_form_register_line_col_body">
                  <select
                    name="bDay"
                    value={bDay}
                    onChange={handlRegisterChange}
                  >
                    {days.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <select
                    name="bMonth"
                    value={bMonth}
                    onChange={handlRegisterChange}
                  >
                    {months.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <select name="bYear" onChange={handlRegisterChange}>
                    {years.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="login_wrapper_wrap_body_form_register_line_col">
                <div className="login_wrapper_wrap_body_form_register_line_col_header">
                  Gender <div className="info_icon"></div>
                </div>
                <div className="login_wrapper_wrap_body_form_register_line_col_body">
                  <label htmlFor="male">
                    Male
                    <input
                      type="radio"
                      name="gender"
                      id="male"
                      value="male"
                      onChange={handlRegisterChange}
                    />
                  </label>
                  <label htmlFor="famale">
                    Female
                    <input
                      type="radio"
                      name="gender"
                      id="famale"
                      value="famale"
                      onChange={handlRegisterChange}
                    />
                  </label>
                  <label htmlFor="custom">
                    Custom
                    <input
                      type="radio"
                      name="gender"
                      id="custom"
                      value="custom"
                      onChange={handlRegisterChange}
                    />
                  </label>
                </div>
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
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
