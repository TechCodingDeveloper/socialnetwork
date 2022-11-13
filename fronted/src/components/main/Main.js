import MainLeft from "./main-left/MainLeft";
import MainRight from "./main-right/MainRight";
import Stories from "./stories/stories";
import "./Main.scss";
export default function Main() {
  return (
    <div className="main">
      <MainLeft />
      <Stories />
      <MainRight />
    </div>
  );
}
