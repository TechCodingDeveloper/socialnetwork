import MainLeft from "./main-left/MainLeft";
import MainRight from "./main-right/MainRight";
import MainMiddle from "./main-middle/MainMiddle";
import "./Main.scss";
import CreatePostPopup from "../create-post-popup/CreatePostPopup";
export default function Main() {
  return (
    <div className="main">
      <CreatePostPopup />
      <MainLeft />
      <MainMiddle />
      <MainRight />
    </div>
  );
}
