import Picker from "emoji-picker-react";
import { useState } from "react";

export default function EmojiPicker({ onEmojiClick }) {
  const [picker, setPicker] = useState(false);

  return (
    <div>
      <i
        className="emoji_icon_large"
        onClick={() => {
          setPicker((prev) => !prev);
        }}
      ></i>
      <div className="post__box__body__emoji__btn__menu">
        {picker && (
          <Picker   onEmojiClick={onEmojiClick} />
        )}
      </div>
    </div>
  );
}
