import "./CreatePost.scss";
import { useSelector } from "react-redux";
import { LiveVideo, Photo } from "../../svg";
import Feeling from "./../../svg/feeling";
export default function CreatePost() {
  const { user } = useSelector((state) => ({ ...state }));
  return (
    <div className="Post">
      <div className="Post__header">
        <div className="Post__header__image">
          <img src={user.picture} alt="" />
        </div>
        <div className="Post__header__text">
          <input
            type="text"
            placeholder={"What's on your mind, " + user.last_name}
          />
        </div>
      </div>
      <div class="menu__splitter"></div>
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
  );
}
