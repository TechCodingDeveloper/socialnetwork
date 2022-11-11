//library
import { Link } from "react-router-dom";
import { Logo } from "../../../svg";
import SearchMenu from "./SearchMenu";

export default function HeaderLeft() {
  return (
    <div class="header__left">
      <div class="header__left__logo">
        <Link to="/">
          <Logo className="header__left__logo--icon" />
        </Link>
      </div>
      <SearchMenu />
    </div>
  );
}
