import "./HelpAndSupport.scss";
export default function HelpAndSupport(props) {
  return (
    <div class="header__right__icon__item__userMenu">
      <div class="header__right__icon__item__userMenu__body">
        <div class="header__right__icon__item__userMenu__body__userItem ">
          <div
            class="header__right__icon__item__userMenu__body__userItem__icon hover1"
            onClick={() => props.onSelectPage("MainMenu")}
          >
            <i class="arrow_back_icon"></i>
          </div>
          <div class="header__right__icon__item__userMenu__body__userItem__title">
            <span>Help & Support</span>
          </div>
        </div>
        <div class="menu__splitter"></div>

        <div class="header__right__icon__item__userMenu__body__list">
          <div class="header__right__icon__item__userMenu__body__list__item hover1">
            <div class="header__right__icon__item__userMenu__body__list__item__left">
              <i class="help_center_icon"></i>
            </div>
            <div class="header__right__icon__item__userMenu__body__list__item__middle">
              Help Center
            </div>
            <div class="header__right__icon__item__userMenu__body__list__item__right"></div>
          </div>
          <div class="header__right__icon__item__userMenu__body__list__item hover1">
            <div class="header__right__icon__item__userMenu__body__list__item__left">
              <i class="email_icon"></i>
            </div>
            <div class="header__right__icon__item__userMenu__body__list__item__middle">
              Report & Problem
            </div>
            <div class="header__right__icon__item__userMenu__body__list__item__right"></div>
          </div>
          <div class="header__right__icon__item__userMenu__body__list__item hover1">
            <div class="header__right__icon__item__userMenu__body__list__item__left">
              <i class="info_filled_icon"></i>
            </div>
            <div class="header__right__icon__item__userMenu__body__list__item__middle">
              Privacy Shortcuts
            </div>
            <div class="header__right__icon__item__userMenu__body__list__item__right"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
