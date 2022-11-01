import { Link } from "react-router-dom";
import { HomeActive, Friends, Watch, Market, Gaming } from "../../../svg";

export default function HeaderMiddle() {
  const color = "#65676b";
  return (
    <div className="header__middle">
      <Link to="/" className="header__middle__icon hover1 active">
        <HomeActive color={color} />
      </Link>
      <Link to="/" className="header__middle__icon hover1">
        <Friends color={color} />
      </Link>
      <Link to="/" className="header__middle__icon hover1">
        <Watch color={color} />
        <div className="header__middle__icon__notification">+9</div>
      </Link>
      <Link to="/" className="header__middle__icon hover1">
        <Market color={color} />
      </Link>
      <Link to="/" className="header__middle__icon hover1">
        <Gaming color={color} />
      </Link>
    </div>
  );
}
