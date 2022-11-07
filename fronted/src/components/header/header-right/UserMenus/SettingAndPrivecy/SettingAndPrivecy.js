import "./SettingAndPrivecy.scss";
export default function SettingAndPrivecy(props) {
  return (
    <div className="header__right__icon__item__userMenu">
      <div className="header__right__icon__item__userMenu__body">
        <div className="header__right__icon__item__userMenu__body__userItem ">
          <div
            className="header__right__icon__item__userMenu__body__userItem__icon hover1"
            onClick={() => props.onSelectPage("MainMenu")}
          >
            <i className="arrow_back_icon"></i>
          </div>
          <div className="header__right__icon__item__userMenu__body__userItem__title">
            <span>Setting & Privecy</span>
          </div>
        </div>
        <div className="menu__splitter"></div>

        <div className="header__right__icon__item__userMenu__body__list">
          <div className="header__right__icon__item__userMenu__body__list__item hover1">
            <div className="header__right__icon__item__userMenu__body__list__item__left">
              <i className="settings_filled_icon"></i>
            </div>
            <div className="header__right__icon__item__userMenu__body__list__item__middle">
              Setting
            </div>
            <div className="header__right__icon__item__userMenu__body__list__item__right"></div>
          </div>
          <div className="header__right__icon__item__userMenu__body__list__item hover1">
            <div className="header__right__icon__item__userMenu__body__list__item__left">
              <i className="privacy_shortcuts_icon"></i>
            </div>
            <div className="header__right__icon__item__userMenu__body__list__item__middle">
              Privacy Chekup
            </div>
            <div className="header__right__icon__item__userMenu__body__list__item__right"></div>
          </div>
          <div className="header__right__icon__item__userMenu__body__list__item hover1">
            <div className="header__right__icon__item__userMenu__body__list__item__left">
              <i className="privacy_shortcuts_icon"></i>
            </div>
            <div className="header__right__icon__item__userMenu__body__list__item__middle">
              Privacy Shortcuts
            </div>
            <div className="header__right__icon__item__userMenu__body__list__item__right"></div>
          </div>
          <div className="header__right__icon__item__userMenu__body__list__item hover1">
            <div className="header__right__icon__item__userMenu__body__list__item__left">
              <i className="activity_log_icon"></i>
            </div>
            <div className="header__right__icon__item__userMenu__body__list__item__middle">
              Activity Log
            </div>
            <div className="header__right__icon__item__userMenu__body__list__item__right"></div>
          </div>
          <div className="header__right__icon__item__userMenu__body__list__item hover1">
            <div className="header__right__icon__item__userMenu__body__list__item__left">
              <i className="news_icon"></i>
            </div>
            <div className="header__right__icon__item__userMenu__body__list__item__middle">
              News feed Prefrances
            </div>
            <div className="header__right__icon__item__userMenu__body__list__item__right"></div>
          </div>
          <div className="header__right__icon__item__userMenu__body__list__item hover1">
            <div className="header__right__icon__item__userMenu__body__list__item__left">
              <i className="language_icon"></i>
            </div>
            <div className="header__right__icon__item__userMenu__body__list__item__middle">
              Language
            </div>
            <div className="header__right__icon__item__userMenu__body__list__item__right"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
