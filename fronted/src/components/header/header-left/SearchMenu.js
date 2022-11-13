import { useRef } from "react";
import { useState } from "react";
import useClickOutSide from "../../../helpers/ClickOutSide";
import { Search } from "../../../svg";

export default function SearchMenu() {
  const color = "#65676b";

  const [isShowHeaderMenu, setIsShowHeaderMenu] = useState(false);

  const onInputClick = () => {
    setIsShowHeaderMenu(true);
  };

  const headerMenuElement = useRef(null);
  useClickOutSide(headerMenuElement, () => {
    setIsShowHeaderMenu(false);
  });

  return (
    <div className="header__left__search" onClick={onInputClick}>
      <Search color={color} />
      <input
        type="text"
        placeholder="Search Socialnetwork"
        className="header__left__search--input"
      />

      {isShowHeaderMenu && (
        <div ref={headerMenuElement} className="header__left__search__menu">
          <div className="header__left__search__menu__recentSearch">
            <span>recent search</span>
            <span>Edit</span>
          </div>
        </div>
      )}
    </div>
  );
}
