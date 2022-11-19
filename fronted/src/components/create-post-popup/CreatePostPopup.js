import "./CreatePostPopup.scss";
import { useSelector } from "react-redux";

import AddPost from "./add-post/AddPost";
import PostPreview from "./post-preview/PostPreview";
import { useState } from "react";
import ImagePreview from "./image-preview/ImagePreview";

export default function CreatePostPopup() {
  const { user } = useSelector((state) => ({ ...state }));

  const [show, setShow] = useState(null);

  const handllePost = (name) => {
    if (name) {
      setShow(name);
    }
  };

  return (
    <div className="blur">
      <div className="post__box">
        <div className="post__box__header">
          <div className="post__box__header__title">Create post</div>
          <div className="post__box__header__close">
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
          <PostPreview user={user} mode={show ? true : false} />
          {show && <ImagePreview />}
        </div>
        <div className="post__box__footer">
          <div className="post__box__footer__post">
            <AddPost onClick={handllePost} />
          </div>
          <div className="post__box__footer__button">
            <button>Post</button>
          </div>
        </div>
      </div>
    </div>
  );
}
