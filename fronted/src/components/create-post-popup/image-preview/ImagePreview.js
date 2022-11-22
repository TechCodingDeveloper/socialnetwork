import "./ImagePreview.scss";
import { useRef, useState } from "react";
export default function ImagePreview() {
  const imageInputRef = useRef(null);

  const [images, setImages] = useState(null);

  const getImageShowClass = (number) => {
    if (number < 7) {
      return "preview" + number + " scrollbar";
    } else {
      if (number % 2 == 0) {
        return "preview6 scrollbar";
      } else {
        return "preview6  singular_grid scrollbar";
      }
    }
  };

  const cleanImages = () => {
    setImages(null);
  };

  const handleImages = (e) => {
    if (images == null) setImages([]);
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
          <input
            type="file"
            multiple
            hidden
            ref={imageInputRef}
            onChange={handleImages}
          />

          {images && (
            <>
              <div
                className="post__box__body__image_preview__header__box__close"
                onClick={cleanImages}
              >
                <div className="small_circle">
                  <i className="exit_icon"></i>
                </div>
              </div>

              <div className={getImageShowClass(images.length)}>
                {images.map((img, i) => {
                  return <img src={img} key={i} />;
                })}
              </div>

              <div className="post__box__body__image_preview__header__box__images">
                <div className="post__box__body__image_preview__header__box__images__box">
                  <div className="post__box__body__image_preview__header__box__images__box__left">
                    <i className="edit_icon"></i>
                    <span> Edit</span>
                  </div>
                  <div
                    className="post__box__body__image_preview__header__box__images__box__right"
                    onClick={() => {
                      imageInputRef.current.click();
                    }}
                  >
                    <i className="addPhoto_icon"></i>
                    <span> Add Photos/Videos</span>
                  </div>
                </div>
              </div>
            </>
          )}

          {images == null && (
            <div
              className="post__box__body__image_preview__header__box__body"
              onClick={() => {
                imageInputRef.current.click();
              }}
            >
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
          )}
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
