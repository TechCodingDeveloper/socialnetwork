import "./PostError.scss";

export default function PostError({ textError, onCloseError }) {
  return (
    <div className="post__error">
      <div className="post__error__content">
        <div className="post__error__content__text">
          <span>{textError}</span>
        </div>
        <div className="post__error__content__button" onClick={onCloseError}>
          <button>Try</button>
        </div>
      </div>
    </div>
  );
}
