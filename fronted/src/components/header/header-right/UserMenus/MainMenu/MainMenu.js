import "./MainMenu.scss";
import { useSelector } from "react-redux";
export default function MainMenu(props) {
  const { user } = useSelector((user) => ({ ...user }));
  return (
    <div class="header__right__icon__item__userMenu">
      <div class="header__right__icon__item__userMenu__body">
        <div class="header__right__icon__item__userMenu__body__userItem hover1">
          <div class="header__right__icon__item__userMenu__body__userItem__left">
            <img src={user.picture} alt="" />
          </div>
          <div class="header__right__icon__item__userMenu__body__userItem__right">
            <div class="header__right__icon__item__userMenu__body__userItem__right__title">
              {user.first_name} {user.last_name}
            </div>
            <div class="header__right__icon__item__userMenu__body__userItem__right__description">
              See your profile
            </div>
          </div>
        </div>
        <div class="menu__splitter"></div>
        <div class="header__right__icon__item__userMenu__body__feedbackItem hover1">
          <div class="header__right__icon__item__userMenu__body__feedbackItem__left">
            <i class="report_filled_icon"></i>
          </div>
          <div class="header__right__icon__item__userMenu__body__feedbackItem__right">
            <div class="header__right__icon__item__userMenu__body__feedbackItem__right__title">
              Give feedback
            </div>
            <div class="header__right__icon__item__userMenu__body__feedbackItem__right__description">
              Give feedback description
            </div>
          </div>
        </div>
        <div class="menu__splitter"></div>
        <div class="header__right__icon__item__userMenu__body__list">
          <div
            class="header__right__icon__item__userMenu__body__list__item hover1"
            onClick={() => props.onSelectPage("SettingAndPrivercy")}
          >
            <div class="header__right__icon__item__userMenu__body__list__item__left">
              <i class="settings_filled_icon"></i>
            </div>
            <div class="header__right__icon__item__userMenu__body__list__item__middle">
              Setting & privercy
            </div>
            <div class="header__right__icon__item__userMenu__body__list__item__right">
              <i class="right_icon"></i>
            </div>
          </div>
          <div
            class="header__right__icon__item__userMenu__body__list__item hover1"
            onClick={() => props.onSelectPage("HelpAndSupport")}
          >
            <div class="header__right__icon__item__userMenu__body__list__item__left">
              <i class="help_filled_icon"></i>
            </div>
            <div class="header__right__icon__item__userMenu__body__list__item__middle">
              Help & support
            </div>
            <div class="header__right__icon__item__userMenu__body__list__item__right">
              <i class="right_icon"></i>
            </div>
          </div>
          <div
            class="header__right__icon__item__userMenu__body__list__item hover1"
            onClick={() => props.onSelectPage("DisplayAndAccessibility")}
          >
            <div class="header__right__icon__item__userMenu__body__list__item__left">
              <i class="dark_filled_icon"></i>
            </div>
            <div class="header__right__icon__item__userMenu__body__list__item__middle">
              Display & Accessibility
            </div>
            <div class="header__right__icon__item__userMenu__body__list__item__right">
              <i class="right_icon"></i>
            </div>
          </div>
          <div class="header__right__icon__item__userMenu__body__list__item hover1">
            <div class="header__right__icon__item__userMenu__body__list__item__left">
              <i class="logout_filled_icon"></i>
            </div>
            <div class="header__right__icon__item__userMenu__body__list__item__middle">
              log out
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
