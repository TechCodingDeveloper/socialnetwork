export default function AllMenuItemRight({ create }) {
  return (
    <div className="header__right__icon__item__allmenu__body__right__body__list">
      {create.map((item, index) => {
        return (
          <div
            key={index}
            className="header__right__icon__item__allmenu__body__right__body__list__item hover1"
          >
            <div className="header__right__icon__item__allmenu__body__right__body__list__item__pic">
              <i className={item.icon}></i>
            </div>
            <div className="header__right__icon__item__allmenu__body__right__body__list__item__text">
              {item.name.length > 5
                ? item.name.substring(0, 5) + "..."
                : item.name}
            </div>
          </div>
        );
      })}
    </div>
  );
}
