export default function AllMenuItemRight({ create }) {
  return (
    <div class="header__right__icon__item__allmenu__body__right__body__list">
      {create.map((item, index) => {
        return (
          <div
            key={index}
            class="header__right__icon__item__allmenu__body__right__body__list__item hover1"
          >
            <div class="header__right__icon__item__allmenu__body__right__body__list__item__pic">
              <i class={item.icon}></i>
            </div>
            <div class="header__right__icon__item__allmenu__body__right__body__list__item__text">
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
