import MainLeft from "./main-left/MainLeft";
import MainRight from "./main-right/MainRight";
import MainMiddle from "./main-middle/MainMiddle";
import "./Main.scss";
export default function Main() {
  return (
    <div className="main">
      <MainLeft />
      <MainMiddle />
      <MainRight />
    </div>
  );
}
