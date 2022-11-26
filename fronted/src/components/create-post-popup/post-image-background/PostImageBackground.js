import "./PostImageBackground.scss";
import { useState } from "react";
export default function PostImageBackground({ bgref, onBackgroundChange }) {
  const postBackgrounds = [
    "../../../images/postbackgrounds/1.jpg",
    "../../../images/postbackgrounds/2.jpg",
    "../../../images/postbackgrounds/3.jpg",
    "../../../images/postbackgrounds/4.jpg",
    "../../../images/postbackgrounds/5.jpg",
    "../../../images/postbackgrounds/6.jpg",
    "../../../images/postbackgrounds/7.jpg",
    "../../../images/postbackgrounds/8.jpg",
    "../../../images/postbackgrounds/9.jpg",
  ];

  const [show, setShow] = useState(false);

  const imageClick = () => {
    setShow(!show);
  };

  const selectBackground = (i) => {
    bgref.current.style.backgroundImage = `url(${postBackgrounds[i]})`;
    bgref.current.classList.add("post_background");
    onBackgroundChange(postBackgrounds[i]);
  };

  const removeBackground = () => {
    bgref.current.style.backgroundImage = "";
    bgref.current.classList.remove("post_background");
    onBackgroundChange(null);
  };
  return (
    <div className="post_image_background">
      <img src="../../../icons/colorful.png" alt="" onClick={imageClick} />

      {show && (
        <div
          className="post_image_background_noBackground"
          onClick={removeBackground}
        ></div>
      )}

      {show &&
        postBackgrounds.map((img, i) => {
          return (
            <img
              src={img}
              key={i}
              alt=""
              onClick={() => {
                selectBackground(i);
              }}
            />
          );
        })}
    </div>
  );
}
