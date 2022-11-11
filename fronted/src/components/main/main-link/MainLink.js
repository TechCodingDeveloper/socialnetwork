import "./MainLink.scss";
export default function MainLink({ src, title, subtitle }) {
  return (
    <div className="main__link__item hover1">
      <div className="main__link__item__icon">
        <img src={src} alt="" />
      </div>
      <div className="main__link__item__text">
        <div className="main__link__item__text__main">
          <span>{title}</span>
        </div>
        {subtitle && (
          <div className="main__link__item__text__sub">
            <span>{subtitle}</span>
          </div>
        )}
      </div>
    </div>
  );
}
