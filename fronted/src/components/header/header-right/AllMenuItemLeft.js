export default function AllMenuItemLeft({ menu, title }) {
  return (
    <div className="header__right__icon__item__allmenu__body__left__list__group">
      <div className="header__right__icon__item__allmenu__body__left__list__group__title">
        {title}
      </div>
      {menu.map((m, index) => {
        let img = `../../left/${m.icon}.png`;
        return (
          <div
            key={index}
            className="header__right__icon__item__allmenu__body__left__list__group__item hover1"
          >
            <div className="header__right__icon__item__allmenu__body__left__list__group__item__pic">
              <img src={img} alt="" />
            </div>
            <div className="header__right__icon__item__allmenu__body__left__list__group__item__text">
              <div className="header__right__icon__item__allmenu__body__left__list__group__item__text__title">
                {m.name}
              </div>
              <div className="header__right__icon__item__allmenu__body__left__list__group__item__text__description">
                {m.description}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
