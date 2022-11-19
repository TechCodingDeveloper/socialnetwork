import "./ImagePreview.scss";
export default function ImagePreview() {
  return (
    <div className="post__box__body__image_preview">
      <div className="post__box__body__image_preview__header">
        <div className="post__box__body__image_preview__header__box">
          <div className="post__box__body__image_preview__header__box__close">
            <div className="small_circle">
              <i className="exit_icon"></i>
            </div>
          </div>
          <div className="post__box__body__image_preview__header__box__body">
            <div className="post__box__body__image_preview__header__box__body__icon">
              <i className="addPhoto_icon"></i>
            </div>
            <div className="post__box__body__image_preview__header__box__body__title">
              Add Photos/Videos
            </div>
            <div className="post__box__body__image_preview__header__box__body__description">
              or drag and drop
            </div>
          </div>
        </div>
      </div>
      <div className="post__box__body__image_preview__footer">
        <div className="post__box__body__image_preview__footer__box"></div>
      </div>
    </div>
  );
}
