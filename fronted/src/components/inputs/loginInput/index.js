import "./style.scss";
import { useField, ErrorMessage } from "formik";
export default function LoginInput({ placeholder, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="input-wrap">
      {meta.touched && meta.error && (
        <div className="input-wrap_input_error">
          <ErrorMessage name={field.name} />
          <div className="input-wrap_input_error_bottom"></div>
        </div>
      )}

      <input
        className={
          meta.touched && meta.error ? "input-wrap_input_error_border" : ""
        }
        type={field.type}
        placeholder={placeholder}
        name={field.name}
        {...field}
        {...props}
      />
      {meta.touched && meta.error && <i className="error_icon"></i>}
    </div>
  );
}
