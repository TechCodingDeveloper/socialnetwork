import "./DisplayAndAccessibility.scss";
export default function DisplayAndAccessibility(props) {
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
            <span> Display & Accessibility</span>
          </div>
        </div>
        <div className="menu__splitter"></div>

        <div className="header__right__icon__item__userMenu__body__list">
          <div className="header__right__icon__item__userMenu__body__list__item">
            <div className="header__right__icon__item__userMenu__body__list__item__left">
              <i className="dark_filled_icon"></i>
            </div>
            <div className="header__right__icon__item__userMenu__body__list__item__middle">
              <div className="header__right__icon__item__userMenu__body__list__item__middle__title">
                Dark Mode
              </div>
              <div className="header__right__icon__item__userMenu__body__list__item__middle__description">
                Adjust the appearance of Socialnetwork to reduce glare and give
                your eyes
              </div>
              <div className="header__right__icon__item__userMenu__body__list__item__middle__list">
                <label
                  htmlFor="darkoff"
                  className="header__right__icon__item__userMenu__body__list__item__middle__list__item hover1"
                >
                  <div className="header__right__icon__item__userMenu__body__list__item__middle__list__item__left">
                    off
                  </div>
                  <div className="header__right__icon__item__userMenu__body__list__item__middle__list__item__right">
                    <input type="radio" name="dark" id="darkoff" />
                  </div>
                </label>
                <label
                  htmlFor="darkon"
                  className="header__right__icon__item__userMenu__body__list__item__middle__list__item hover1"
                >
                  <div className="header__right__icon__item__userMenu__body__list__item__middle__list__item__left">
                    On
                  </div>
                  <div className="header__right__icon__item__userMenu__body__list__item__middle__list__item__right">
                    <input type="radio" name="dark" id="darkon" />
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="menu__splitter"></div>
          <div className="header__right__icon__item__userMenu__body__list__item">
            <div className="header__right__icon__item__userMenu__body__list__item__left">
              <i className="camera_filled_icon"></i>
            </div>
            <div className="header__right__icon__item__userMenu__body__list__item__middle">
              <div className="header__right__icon__item__userMenu__body__list__item__middle__title">
                Compact Mode
              </div>
              <div className="header__right__icon__item__userMenu__body__list__item__middle__description">
                Adjust the appearance of Socialnetwork to reduce glare and give
                your eyes
              </div>
              <div className="header__right__icon__item__userMenu__body__list__item__middle__list">
                <label
                  htmlFor="compactoff"
                  className="header__right__icon__item__userMenu__body__list__item__middle__list__item hover1"
                >
                  <div className="header__right__icon__item__userMenu__body__list__item__middle__list__item__left">
                    off
                  </div>
                  <div className="header__right__icon__item__userMenu__body__list__item__middle__list__item__right">
                    <input type="radio" name="compact" id="compactoff" />
                  </div>
                </label>
                <label
                  htmlFor="compacton"
                  className="header__right__icon__item__userMenu__body__list__item__middle__list__item hover1"
                >
                  <div className="header__right__icon__item__userMenu__body__list__item__middle__list__item__left">
                    On
                  </div>
                  <div className="header__right__icon__item__userMenu__body__list__item__middle__list__item__right">
                    <input type="radio" name="compact" id="compacton" />
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
