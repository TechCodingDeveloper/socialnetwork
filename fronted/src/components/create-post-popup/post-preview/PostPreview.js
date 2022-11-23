import EmojiPicker from "../emoji-picker/EmojiPicker.js";
import { useEffect, useState, useRef } from "react";
import "./PostPreview.scss";
import PostImageBackground from "../post-image-background/PostImageBackground.js";

export default function PostPreview({ user, mode }) {
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
    <>
      <div className={"post__box__body__text" + (mode ? " small" : "")}>
        <textarea
          ref={textRef}
          maxLength={250}
          value={text}
          placeholder={` What's on your mind,${user.first_name}?`}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </div>
      <div className={"post__box__body__emoji" + (mode ? " small" : "")}>
        <div className="post__box__body__emoji__color">
          <PostImageBackground bgref={textRef} />
        </div>
        <div className="post__box__body__emoji__btn">
          <EmojiPicker onEmojiClick={handleEmoji} />
        </div>
      </div>
    </>
  );
}
