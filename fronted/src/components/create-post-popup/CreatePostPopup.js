import "./CreatePostPopup.scss";
import { useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import EmojiPicker from "./emoji-picker/EmojiPicker.js";
import AddPost from "./add-post/AddPost";

export default function CreatePostPopup() {
  const { user } = useSelector((state) => ({ ...state }));
  const [text, setText] = useState("");

  const textRef = useRef(null);
  const [cursorPosition, setCursorPosition] = useState();

  useEffect(() => {
    textRef.current.selectionEnd = cursorPosition;
  }, [cursorPosition]);

  const handleEmoji = ({ emoji }) => {
    const ref = textRef.current;
    ref.focus();
    const start = text.substring(0, ref.selectionStart);
    const end = text.substring(ref.selectionStart);
    const newText = start + emoji + end;
    setText(newText);
    setCursorPosition(start.length + emoji.length);
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
          <div className="post__box__body__text">
            <textarea
              ref={textRef}
              maxLength={100}
              value={text}
              placeholder={` What's on your mind,${user.first_name}?`}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
          </div>
          <div className="post__box__body__emoji">
            <div className="post__box__body__emoji__color">
              <img src="../../../icons/colorful.png" alt="" />
            </div>
            <div className="post__box__body__emoji__btn">
              <EmojiPicker onEmojiClick={handleEmoji} />
            </div>
          </div>
        </div>
        <div className="post__box__footer">
          <div className="post__box__footer__post">
            <AddPost />
          </div>
          <div className="post__box__footer__button">
            <button>Post</button>
          </div>
        </div>
      </div>
    </div>
  );
}
