import { Form, Formik } from "formik";
import RegisterInput from "../inputs/registerInput";
import { useState } from "react";

const userInfos = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  bYear: "",
  bMonth: "",
  bDay: "",
  gender: "",
};

export default function RegisterForm() {
  const [user, setUser] = useState(userInfos);

  const handlRegisterChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="login_wrapper_wrap_body_form">
      <Formik>
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
                  <select name="bDay">
                    <option>1</option>
                  </select>
                  <select name="bMonth">
                    <option>1</option>
                  </select>
                  <select name="bYear">
                    <option>1993</option>
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
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
