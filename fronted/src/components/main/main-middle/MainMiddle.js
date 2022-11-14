import CreatePost from "../../create-post/CreatePost";
import Stories from "../stories/stories";
import "./MainMiddle.scss";
export default function MainMiddle() {
  return (
    <div className="main__middle">
      <Stories />
      <CreatePost />
    </div>
  );
}
