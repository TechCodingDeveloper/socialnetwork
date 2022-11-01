export default function GenderSelect({ handlRegisterChange }) {
  return (
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
  );
}
