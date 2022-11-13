import "./MainLeft.scss";
import { useSelector } from "react-redux";
import MainLink from "../main-link/MainLink";
import { MainLeftData } from "../../../data/MainLeftData.js";
import { Link } from "react-router-dom";
import { ArrowDown1 } from "../../../svg";
import { useState } from "react";
export default function MainLeft() {
  const { user } = useSelector((state) => ({ ...state }));
  const [more, setMore] = useState(8);

  const SeeMore = () => {
    if (more > 8) setMore(8);
    else setMore(MainLeftData.length);
  };

  const leftAddressImageBase = "../../../left/";
  return (
    <div className="main__left scrollbar">
      <div className="main__left__list">
        <Link to="/profile">
          <MainLink
            src={user.picture}
            title={user.first_name + " " + user.last_name}
          />
        </Link>

        {MainLeftData.slice(0, more).map((item, index) => {
          return (
            <MainLink
              key={index}
              src={leftAddressImageBase + `${item.img}.png`}
              title={item.text}
              subtitle={item.notification}
            />
          );
        })}

        <div className="main__left__list__item__more hover1" onClick={SeeMore}>
          {more < 9 && (
            <div className="main__left__list__item__more__icon">
              <ArrowDown1 />
            </div>
          )}

          {more > 8 && (
            <div className="main__left__list__item__more__icon flipUp">
              <ArrowDown1 />
            </div>
          )}

          <div className="main__left__list__item__more__title">
            {more > 8 && <span>Show Less</span>}
            {more < 9 && <span>Show More</span>}
          </div>
        </div>

        <div class="menu__splitter"></div>

        <Link to="/profile">
          <MainLink src="../../images/ytb.png" title="My Youtube" />
        </Link>

        <Link to="/profile">
          <MainLink src="../../images/insta.png" title="My Instagram" />
        </Link>
      </div>
    </div>
  );
}
