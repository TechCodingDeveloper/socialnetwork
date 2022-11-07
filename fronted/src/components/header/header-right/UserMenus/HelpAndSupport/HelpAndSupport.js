import "./HelpAndSupport.scss";
export default function HelpAndSupport(props) {
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
            <span>Help & Support</span>
          </div>
        </div>
        <div className="menu__splitter"></div>

        <div className="header__right__icon__item__userMenu__body__list">
          <div className="header__right__icon__item__userMenu__body__list__item hover1">
            <div className="header__right__icon__item__userMenu__body__list__item__left">
              <i className="help_center_icon"></i>
            </div>
            <div className="header__right__icon__item__userMenu__body__list__item__middle">
              Help Center
            </div>
            <div className="header__right__icon__item__userMenu__body__list__item__right"></div>
          </div>
          <div className="header__right__icon__item__userMenu__body__list__item hover1">
            <div className="header__right__icon__item__userMenu__body__list__item__left">
              <i className="email_icon"></i>
            </div>
            <div className="header__right__icon__item__userMenu__body__list__item__middle">
              Report & Problem
            </div>
            <div className="header__right__icon__item__userMenu__body__list__item__right"></div>
          </div>
          <div className="header__right__icon__item__userMenu__body__list__item hover1">
            <div className="header__right__icon__item__userMenu__body__list__item__left">
              <i className="info_filled_icon"></i>
            </div>
            <div className="header__right__icon__item__userMenu__body__list__item__middle">
              Privacy Shortcuts
            </div>
            <div className="header__right__icon__item__userMenu__body__list__item__right"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
