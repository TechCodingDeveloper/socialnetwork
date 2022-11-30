import CreatePost from "../../create-post/CreatePost";
import Stories from "../stories/stories";
import "./MainMiddle.scss";

import PostView from "../../post-view/PostView";
export default function MainMiddle() {
 

  return (
    <div className="main__middle">
      <Stories />
      <CreatePost />
      <PostView />
    </div>
  );
}
