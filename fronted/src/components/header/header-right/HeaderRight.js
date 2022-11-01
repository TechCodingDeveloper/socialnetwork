//#region library
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Menu, Messenger } from "../../../svg";
//#endregion

export default function HeaderRight() {
  //#region public variable
  const { user } = useSelector((user) => ({ ...user }));
  //#endregion

  return (
    <div className="header__right">
      <Link to="/profile" className="header__right__profilelink hover1">
        <img src={user && user.picture} alt="" />
        <span>{user && user.first_name}</span>
      </Link>
      <div className="header__right__icon">
        <Menu />
      </div>
      <div className="header__right__icon">
        <Messenger />
      </div>
      <div className="header__right__icon"></div>
      <div className="header__right__icon"></div>
      <div className="header__right__icon"></div>
    </div>
  );
}
