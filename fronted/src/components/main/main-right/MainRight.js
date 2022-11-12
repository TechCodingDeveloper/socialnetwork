import { Dots, NewRoom } from "../../../svg";
import "./MainRight.scss";
import Search from "./../../../svg/search";
import { useSelector } from "react-redux";
import MainLink from "../main-link/MainLink";
export default function MainRight() {
  const { user } = useSelector((state) => ({ ...state }));
  return (
    <div className="main__right scrollbar">
      <div className="main__right__list">
        <div className="main__right__list__item">
          <div className="main__right__list__item__header">Sponsored</div>
        </div>
        <div class="menu__splitter"></div>
        <div className="main__right__list__item">
          <div className="main__right__list__item__header">Contacts</div>
          <div className="main__right__list__item__context">
            <NewRoom />
            <Search />
            <Dots />
          </div>
        </div>

        <div className="main__right__list__item">
          <MainLink
            src={user.picture}
            title={user.first_name + " " + user.last_name}
          />
        </div>
      </div>
    </div>
  );
}
