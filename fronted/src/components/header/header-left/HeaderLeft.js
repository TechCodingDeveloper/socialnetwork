//library
import { Link } from "react-router-dom";
import { Logo, Search } from "../../../svg";

export default function HeaderLeft() {
  const color = "#65676b";
  return (
    <div className="header__left">
      <div className="header__left__logo">
        <Link to="/">
          <Logo className="header__left__logo--icon" />
        </Link>
      </div>
      <div className="header__left__search">
        <Search color={color} />
        <input
          type="text"
          placeholder="Search Socialnetwork"
          className="header__left__search--input"
        />
      </div>
    </div>
  );
}
