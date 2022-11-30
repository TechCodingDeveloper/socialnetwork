import "./CreatePostPopup.scss";
import { useSelector } from "react-redux";
import AddPost from "./add-post/AddPost";
import PostPreview from "./post-preview/PostPreview";
import { useRef, useState } from "react";
import ImagePreview from "./image-preview/ImagePreview";
import useClickOutSide from "./../../helpers/ClickOutSide";
import { createPost } from "../../functions/post";
import PulseLoader from "react-spinners/PulseLoader";
import PostError from "./post_error/PostError";
import { uplaodImages } from "../../functions/uplaodImages";
import dataURItoBlob from "../../helpers/dataURItoBlob";


export default function CreatePostPopup({ onClose }) {
  const { user } = useSelector((state) => ({ ...state }));
  const postRef = useRef(null);
  const [show, setShow] = useState();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState(null);
  const [postImages, setPostImages] = useState(null);
  const path = `${user.id}/postImages`;

  const handllePost = (name) => {
    if (name) {
      setShow(name);
    }
  };

  useClickOutSide(postRef, () => {
    onClose();
  });

  const textChange = (item) => {
    setData({
      text: item.text,
      background: item.backgroundUrl,
    });
  };

  const onCreatePost = async () => {
    setLoading(true);

    // if (data == null || data.text == null || data.text.length < 5) {
    //   setError(true);
    //   setErrorText("Post Can't be Empity");
    //   return;
    // }

    if (data && data.background) {
      const res = await createPost(
        null,
        data.background,
        data.text,
        null,
        user.id,
        user.token
      );
    } else if (postImages != null && postImages.length > 0) {
      let formData = new FormData();
      formData.append("path", path);
      postImages?.forEach((image) => {
        formData.append("file", dataURItoBlob(image));
      });

      const response = await uplaodImages(formData, path, user.token);
      const res = await createPost(
        null,
        null,
        data.text,
        response,
        user.id,
        user.token
      );
    }

    setLoading(false);
    setData(null);
    onClose();


  };



  const closeError = () => {
    setError(false);
    setLoading(false);
  };

  const onPostImage = (images) => {
    setPostImages(images);
  };

  return (
    <>
      <div className="blur">
        <div className="post__box" ref={postRef}>
          {error && (
            <PostError textError={errorText} onCloseError={closeError} />
          )}
          <div className="post__box__header">
            <div className="post__box__header__title">Create post</div>
            <div
              className="post__box__header__close"
              onClick={() => {
                onClose();
              }}
            >
              <div className="small_circle">
                <i className="exit_icon"></i>
              </div>
            </div>
          </div>
          <div className="post__box__body">
            <div className="post__box__body__profile">
              <div className="post__box__body__profile__image">
                <img src={user.picture} alt="" />
              </div>
              <div className="post__box__body__profile__item">
                <div className="post__box__body__profile__item__fullname">
                  <span>
                    {user.first_name} {user.last_name}
                  </span>
                </div>
                <div className="post__box__body__profile__item__tag">
                  <img src="../../../icons/public.png" alt="" />
                  <span>Public</span>
                  <i className="arrowDown_icon"></i>
                </div>
              </div>
            </div>
            <PostPreview
              user={user}
              mode={show ? true : false}
              onTextChange={textChange}
            />
            {show && <ImagePreview onImage={onPostImage} />}
          </div>
          <div className="post__box__footer">
            <div className="post__box__footer__post">
              <AddPost onClick={handllePost} />
            </div>
            <div className="post__box__footer__button">
              <button onClick={onCreatePost}>
                {!loading && "Post"}
                {loading && <PulseLoader color="#fff" size={5} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
