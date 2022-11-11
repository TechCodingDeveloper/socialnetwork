import Search from "./../../../svg/search";
import { menu, create } from "../../../data/allMenu";
import AllMenuItemLeft from "./AllMenuItemLeft";
import AllMenuItemRight from "./AllMenuItemRight";

export default function AllMenu() {
  const color = "#65676b";

  return (
    <div class="header__right__icon__item__allmenu">
      <div class="header__right__icon__item__allmenu__header">Menu</div>
      <div class="header__right__icon__item__allmenu__body">
        <div class="header__right__icon__item__allmenu__body__left">
          <div class="header__right__icon__item__allmenu__body__left__search">
            <Search color={color} />
            <input
              type="text"
              placeholder="Search Menu"
              class="header__right__icon__item__allmenu__body__left__search--input"
            />
          </div>
          <div class="header__right__icon__item__allmenu__body__left__list scrollbar">
            <AllMenuItemLeft menu={menu.slice(0, 6)} title="Social" />
            <AllMenuItemLeft menu={menu.slice(6, 9)} title="Entertaiment" />
            <AllMenuItemLeft menu={menu.slice(9, 11)} title="Shopping" />
            <AllMenuItemLeft menu={menu.slice(11, 15)} title="Personal" />
            <AllMenuItemLeft menu={menu.slice(15, 17)} title="Professional" />
          </div>
        </div>
        <div class="header__right__icon__item__allmenu__body__right">
          <div class="header__right__icon__item__allmenu__body__right__header">
            Create
          </div>
          <div class="header__right__icon__item__allmenu__body__right__body">
            <AllMenuItemRight create={create} />
          </div>
        </div>
      </div>
    </div>
  );
}
