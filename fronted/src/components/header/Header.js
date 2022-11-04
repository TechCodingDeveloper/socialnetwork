//add css
import "./Header.scss";

//library
import HeaderLeft from "./header-left/HeaderLeft";
import HeaderMiddle from "./header-middle/HeaderMiddle";
import HeaderRight from "./header-right/HeaderRight";
//main
export default function Header() {
  return (
    <header>
      <HeaderLeft />

      <HeaderMiddle />

      <HeaderRight />
    </header>
  );
}
