import "./DisplayAndAccessibility.scss";
export default function DisplayAndAccessibility(props) {
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
            <span> Display & Accessibility</span>
          </div>
        </div>
        <div class="menu__splitter"></div>

        <div class="header__right__icon__item__userMenu__body__list">
          <div class="header__right__icon__item__userMenu__body__list__item">
            <div class="header__right__icon__item__userMenu__body__list__item__left">
              <i class="dark_filled_icon"></i>
            </div>
            <div class="header__right__icon__item__userMenu__body__list__item__middle">
              <div class="header__right__icon__item__userMenu__body__list__item__middle__title">
                Dark Mode
              </div>
              <div class="header__right__icon__item__userMenu__body__list__item__middle__description">
                Adjust the appearance of Socialnetwork to reduce glare and give
                your eyes
              </div>
              <div class="header__right__icon__item__userMenu__body__list__item__middle__list">
                <label
                  htmlFor="darkoff"
                  class="header__right__icon__item__userMenu__body__list__item__middle__list__item hover1"
                >
                  <div class="header__right__icon__item__userMenu__body__list__item__middle__list__item__left">
                    off
                  </div>
                  <div class="header__right__icon__item__userMenu__body__list__item__middle__list__item__right">
                    <input type="radio" name="dark" id="darkoff" />
                  </div>
                </label>
                <label
                  htmlFor="darkon"
                  class="header__right__icon__item__userMenu__body__list__item__middle__list__item hover1"
                >
                  <div class="header__right__icon__item__userMenu__body__list__item__middle__list__item__left">
                    On
                  </div>
                  <div class="header__right__icon__item__userMenu__body__list__item__middle__list__item__right">
                    <input type="radio" name="dark" id="darkon" />
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div class="menu__splitter"></div>
          <div class="header__right__icon__item__userMenu__body__list__item">
            <div class="header__right__icon__item__userMenu__body__list__item__left">
              <i class="camera_filled_icon"></i>
            </div>
            <div class="header__right__icon__item__userMenu__body__list__item__middle">
              <div class="header__right__icon__item__userMenu__body__list__item__middle__title">
                Compact Mode
              </div>
              <div class="header__right__icon__item__userMenu__body__list__item__middle__description">
                Adjust the appearance of Socialnetwork to reduce glare and give
                your eyes
              </div>
              <div class="header__right__icon__item__userMenu__body__list__item__middle__list">
                <label
                  htmlFor="compactoff"
                  class="header__right__icon__item__userMenu__body__list__item__middle__list__item hover1"
                >
                  <div class="header__right__icon__item__userMenu__body__list__item__middle__list__item__left">
                    off
                  </div>
                  <div class="header__right__icon__item__userMenu__body__list__item__middle__list__item__right">
                    <input type="radio" name="compact" id="compactoff" />
                  </div>
                </label>
                <label
                  htmlFor="compacton"
                  class="header__right__icon__item__userMenu__body__list__item__middle__list__item hover1"
                >
                  <div class="header__right__icon__item__userMenu__body__list__item__middle__list__item__left">
                    On
                  </div>
                  <div class="header__right__icon__item__userMenu__body__list__item__middle__list__item__right">
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
