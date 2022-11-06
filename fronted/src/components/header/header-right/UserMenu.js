import "./UserMenu.scss";
import { useSelector } from "react-redux";
export default function UserMenu() {
  const { user } = useSelector((user) => ({ ...user }));
  return (
    <div className="header__right__icon__item__userMenu">
      <div className="header__right__icon__item__userMenu__body">
        <div className="header__right__icon__item__userMenu__body__userItem hover1">
          <div className="header__right__icon__item__userMenu__body__userItem__left">
            <img src={user.picture} alt="" />
          </div>
          <div className="header__right__icon__item__userMenu__body__userItem__right">
            <div className="header__right__icon__item__userMenu__body__userItem__right__title">
              {user.first_name} {user.last_name}
            </div>
            <div className="header__right__icon__item__userMenu__body__userItem__right__description">
              See your profile
            </div>
          </div>
        </div>
        <div className="menu__splitter"></div>
        <div className="header__right__icon__item__userMenu__body__feedbackItem hover1">
          <div className="header__right__icon__item__userMenu__body__feedbackItem__left">
            <i className="report_filled_icon"></i>
          </div>
          <div className="header__right__icon__item__userMenu__body__feedbackItem__right">
            <div className="header__right__icon__item__userMenu__body__feedbackItem__right__title">
              Give feedback
            </div>
            <div className="header__right__icon__item__userMenu__body__feedbackItem__right__description">
              Give feedback description
            </div>
          </div>
        </div>
        <div className="menu__splitter"></div>
        <div className="header__right__icon__item__userMenu__body__list">
          <div className="header__right__icon__item__userMenu__body__list__item hover1">
            <div className="header__right__icon__item__userMenu__body__list__item__left">
              <i className="settings_filled_icon"></i>
            </div>
            <div className="header__right__icon__item__userMenu__body__list__item__middle">
              Setting & privercy
            </div>
            <div className="header__right__icon__item__userMenu__body__list__item__right">
              <i className="right_icon"></i>
            </div>
          </div>
          <div className="header__right__icon__item__userMenu__body__list__item hover1">
            <div className="header__right__icon__item__userMenu__body__list__item__left">
              <i className="help_filled_icon"></i>
            </div>
            <div className="header__right__icon__item__userMenu__body__list__item__middle">
              Help & support
            </div>
            <div className="header__right__icon__item__userMenu__body__list__item__right">
              <i className="right_icon"></i>
            </div>
          </div>
          <div className="header__right__icon__item__userMenu__body__list__item hover1">
            <div className="header__right__icon__item__userMenu__body__list__item__left">
              <i className="dark_filled_icon"></i>
            </div>
            <div className="header__right__icon__item__userMenu__body__list__item__middle">
              Display & Accessibility
            </div>
            <div className="header__right__icon__item__userMenu__body__list__item__right">
              <i className="right_icon"></i>
            </div>
          </div>
          <div className="header__right__icon__item__userMenu__body__list__item hover1">
            <div className="header__right__icon__item__userMenu__body__list__item__left">
              <i className="logout_filled_icon"></i>
            </div>
            <div className="header__right__icon__item__userMenu__body__list__item__middle">
              log out
            </div>
            <div className="header__right__icon__item__userMenu__body__list__item__right">
              <i className="right_icon"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
