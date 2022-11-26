import "./CreatePost.scss";
import { useSelector } from "react-redux";
import { LiveVideo, Photo } from "../../svg";
import Feeling from "./../../svg/feeling";
import CreatePostPopup from "./../create-post-popup/CreatePostPopup";
import { useState } from "react";
export default function CreatePost() {
  const { user } = useSelector((state) => ({ ...state }));
  const [visibalePopup, setVisibalePopup] = useState(false);
  const postClick = () => {
    setVisibalePopup(true);
  };

  const createPostPopupClose = () => {
    setVisibalePopup(false);
  };

  return (
    <>
      {visibalePopup && <CreatePostPopup onClose={createPostPopupClose} />}
      <div className="Post">
        <div className="Post__header">
          <div className="Post__header__image">
            <img src={user.picture} alt="" />
          </div>
          <div className="Post__header__text" onClick={postClick}>
            <input
              type="text"
              placeholder={"What's on your mind, " + user.last_name}
            />
          </div>
        </div>
        <div className="menu__splitter"></div>
        <div className="Post__footer">
          <div className="Post__footer__item hover1">
            <div className="Post__footer__item__image">
              <LiveVideo color="#f3425f" />
            </div>
            <div className="Post__footer__item__text">Live Vide</div>
          </div>
          <div className="Post__footer__item hover1">
            <div className="Post__footer__item__image">
              <Photo color="#4bbf67" />
            </div>
            <div className="Post__footer__item__text">Live Vide</div>
          </div>
          <div className="Post__footer__item hover1">
            <div className="Post__footer__item__image">
              <Feeling color="#f7b928" />
            </div>
            <div className="Post__footer__item__text">Live Vide</div>
          </div>
        </div>
      </div>
    </>
  );
}
