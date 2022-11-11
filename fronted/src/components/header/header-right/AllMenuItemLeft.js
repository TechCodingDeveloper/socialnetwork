export default function AllMenuItemLeft({ menu, title }) {
  return (
    <div class="header__right__icon__item__allmenu__body__left__list__group">
      <div class="header__right__icon__item__allmenu__body__left__list__group__title">
        {title}
      </div>
      {menu.map((m, index) => {
        let img = `../../left/${m.icon}.png`;
        return (
          <div
            key={index}
            class="header__right__icon__item__allmenu__body__left__list__group__item hover1"
          >
            <div class="header__right__icon__item__allmenu__body__left__list__group__item__pic">
              <img src={img} alt="" />
            </div>
            <div class="header__right__icon__item__allmenu__body__left__list__group__item__text">
              <div class="header__right__icon__item__allmenu__body__left__list__group__item__text__title">
                {m.name}
              </div>
              <div class="header__right__icon__item__allmenu__body__left__list__group__item__text__description">
                {m.description}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
