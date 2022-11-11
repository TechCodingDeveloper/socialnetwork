import "./SettingAndPrivecy.scss";
export default function SettingAndPrivecy(props) {
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
            <span>Setting & Privecy</span>
          </div>
        </div>
        <div class="menu__splitter"></div>

        <div class="header__right__icon__item__userMenu__body__list">
          <div class="header__right__icon__item__userMenu__body__list__item hover1">
            <div class="header__right__icon__item__userMenu__body__list__item__left">
              <i class="settings_filled_icon"></i>
            </div>
            <div class="header__right__icon__item__userMenu__body__list__item__middle">
              Setting
            </div>
            <div class="header__right__icon__item__userMenu__body__list__item__right"></div>
          </div>
          <div class="header__right__icon__item__userMenu__body__list__item hover1">
            <div class="header__right__icon__item__userMenu__body__list__item__left">
              <i class="privacy_shortcuts_icon"></i>
            </div>
            <div class="header__right__icon__item__userMenu__body__list__item__middle">
              Privacy Chekup
            </div>
            <div class="header__right__icon__item__userMenu__body__list__item__right"></div>
          </div>
          <div class="header__right__icon__item__userMenu__body__list__item hover1">
            <div class="header__right__icon__item__userMenu__body__list__item__left">
              <i class="privacy_shortcuts_icon"></i>
            </div>
            <div class="header__right__icon__item__userMenu__body__list__item__middle">
              Privacy Shortcuts
            </div>
            <div class="header__right__icon__item__userMenu__body__list__item__right"></div>
          </div>
          <div class="header__right__icon__item__userMenu__body__list__item hover1">
            <div class="header__right__icon__item__userMenu__body__list__item__left">
              <i class="activity_log_icon"></i>
            </div>
            <div class="header__right__icon__item__userMenu__body__list__item__middle">
              Activity Log
            </div>
            <div class="header__right__icon__item__userMenu__body__list__item__right"></div>
          </div>
          <div class="header__right__icon__item__userMenu__body__list__item hover1">
            <div class="header__right__icon__item__userMenu__body__list__item__left">
              <i class="news_icon"></i>
            </div>
            <div class="header__right__icon__item__userMenu__body__list__item__middle">
              News feed Prefrances
            </div>
            <div class="header__right__icon__item__userMenu__body__list__item__right"></div>
          </div>
          <div class="header__right__icon__item__userMenu__body__list__item hover1">
            <div class="header__right__icon__item__userMenu__body__list__item__left">
              <i class="language_icon"></i>
            </div>
            <div class="header__right__icon__item__userMenu__body__list__item__middle">
              Language
            </div>
            <div class="header__right__icon__item__userMenu__body__list__item__right"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
