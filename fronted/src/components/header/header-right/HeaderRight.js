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
  const [isUserMenu, setIsUserMenu] = useState(false);
  const onClickMenu = () => {
    setIsShowMenu(true);
  };
  const onClickUserMenu = () => {
    setIsUserMenu(true);
  };

  const menuRef = useRef();
  useClickOutSide(menuRef, () => {
    setIsShowMenu(false);
  });

  const userRef = useRef();
  useClickOutSide(userRef, () => {
    setIsUserMenu(false);
  });
  return (
    <div class="header__right">
      <div class="header__right__profile">
        <Link to="/profile" class="header__right__profile__profilelink hover1">
          <img src={user?.picture} alt="" />
          <span>{user?.first_name}</span>
        </Link>
      </div>
      <div class="header__right__icon">
        <div class="header__right__icon__item hover1" onClick={onClickMenu}>
          <Menu />
          {isShowMenu && (
            <div ref={menuRef}>
              <AllMenu />
            </div>
          )}
        </div>
        <div class="header__right__icon__item hover1">
          <Messenger />
        </div>
        <div class="header__right__icon__item hover1">
          <Notifications />
          <span class="header__right__icon__item__notification">12</span>
        </div>
        <div class="header__right__icon__item hover1" onClick={onClickUserMenu}>
          <ArrowDown />
          {isUserMenu && (
            <div ref={userRef}>
              <UserMenu />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
