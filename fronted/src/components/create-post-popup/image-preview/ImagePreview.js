import "./ImagePreview.scss";
import { useRef, useState } from "react";
export default function ImagePreview() {
  const imageInputRef = useRef(null);

  const [images, setImages] = useState([]);

  const handleImages = (e) => {
    setImages([]);
    let files = Array.from(e.target.files);
    files.forEach((img) => {
      const reader = new FileReader();
      reader.readAsDataURL(img);
      reader.onload = (readerEvent) => {
        setImages((images) => [...images, readerEvent.target.result]);
      };
    });
  };
  return (
    <div className="post__box__body__image_preview">
      <div className="post__box__body__image_preview__header">
        <div className="post__box__body__image_preview__header__box">
          {images && (
            <div className={"preview" + images.length}>
              {images.map((img, i) => {
                return <img src={img} key={i} />;
              })}
            </div>
          )}

          <div className="post__box__body__image_preview__header__box__close">
            <div className="small_circle">
              <i className="exit_icon"></i>
            </div>
          </div>
          <div
            className="post__box__body__image_preview__header__box__body"
            onClick={() => {
              imageInputRef.current.click();
            }}
          >
            <input
              type="file"
              multiple
              hidden
              ref={imageInputRef}
              onChange={handleImages}
            />

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
        <div className="post__box__body__image_preview__footer__box">
          <div className="post__box__body__image_preview__footer__box__wrap">
            <div className="post__box__body__image_preview__footer__box__wrap__icon">
              <i className="phone_icon"></i>
            </div>
            <div className="post__box__body__image_preview__footer__box__wrap__title">
              Add photos from your mobile device
            </div>
          </div>
          <div className="post__box__body__image_preview__footer__box__btn">
            <button>Add</button>
          </div>
        </div>
      </div>
    </div>
  );
}
