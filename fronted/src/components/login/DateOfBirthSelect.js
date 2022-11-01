export default function DateOfBirthSelect({
  bDay,
  bMonth,
  bYear,
  handlRegisterChange,
}) {
  let date = new Date();
  const years = Array.from(
    new Array(100),
    (val, index) => date.getFullYear() - index
  );
  const months = Array.from(new Array(12), (val, index) => 1 + index);
  const getDays = () => new Date(bYear, bMonth, 0).getDate();
  const days = Array.from(new Array(getDays()), (val, index) => 1 + index);

  return (
    <div className="login_wrapper_wrap_body_form_register_line_col_body">
      <select name="bDay" value={bDay} onChange={handlRegisterChange}>
        {days.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <select name="bMonth" value={bMonth} onChange={handlRegisterChange}>
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
  );
}
