//#region library
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ArrowDown, Menu, Messenger, Notifications } from "../../../svg";
import AllMenu from "./AllMenu";
import { useState } from "react";
import useClickOutSide from "./../../../helpers/ClickOutSide";
import { useRef } from "react";
import UserMenu from "./UserMenu";
//#endregion

export default function HeaderRight() {
  //#region public variable
  const { user } = useSelector((user) => ({ ...user }));
  //#endregion

  const [isShowMenu, setIsShowMenu] = useState(false);
  const onClickMenu = () => {
    setIsShowMenu(true);
  };

  const menuRef = useRef();
  useClickOutSide(menuRef, () => {
    setIsShowMenu(false);
  });

  return (
    <div className="header__right">
      <div className="header__right__profile">
        <Link
          to="/profile"
          className="header__right__profile__profilelink hover1"
        >
          <img src={user?.picture} alt="" />
          <span>{user?.first_name}</span>
        </Link>
      </div>
      <div className="header__right__icon">
        <div className="header__right__icon__item hover1" onClick={onClickMenu}>
          <Menu />
          {isShowMenu && (
            <div ref={menuRef}>
              <AllMenu />
            </div>
          )}
        </div>
        <div className="header__right__icon__item hover1">
          <Messenger />
        </div>
        <div className="header__right__icon__item hover1">
          <Notifications />
          <span className="header__right__icon__item__notification">12</span>
        </div>
        <div className="header__right__icon__item hover1">
          <ArrowDown />
          <UserMenu />
        </div>
      </div>
    </div>
  );
}
