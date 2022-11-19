import Photo from "../../../svg/photo";
import Feeling from "../../../svg/feeling";
import Dots from "../../../svg/dots";
import "./AddPost.scss";
export default function AddPost() {
  return (
    <div className="add__psot">
      <div className="add__psot__text">
        <input type="text" placeholder="Add to your post" />
      </div>
      <div className="add__psot__icon">
        <div className="add__psot__icon__item">
          <Photo color="#45bd62" />
        </div>
        <div className="add__psot__icon__item">
          <i className="tag_icon"></i>
        </div>
        <div className="add__psot__icon__item">
          <Feeling color="#f7b928" />
        </div>
        <div className="add__psot__icon__item">
          <i className="maps_icon"></i>
        </div>
        <div className="add__psot__icon__item">
          <i className="microphone_icon"></i>
        </div>
        <div className="add__psot__icon__item">
          <Dots color="#65676b" />
        </div>
      </div>
    </div>
  );
}
