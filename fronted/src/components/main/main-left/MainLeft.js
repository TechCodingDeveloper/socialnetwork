import "./MainLeft.scss";
import { useSelector } from "react-redux";
import MainLink from "../main-link/MainLink";
import { MainLeftData } from "../../../data/MainLeftData.js";
export default function MainLeft() {
  const { user } = useSelector((state) => ({ ...state }));

  const leftAddressImageBase = "../../../left/";
  return (
    <div className="main__left">
      <div className="main__left__list">
        <MainLink
          src={user.picture}
          title={user.first_name + " " + user.last_name}
        />

        {MainLeftData.slice(0, 8).map((item, index) => {
          return (
            <MainLink
              key={index}
              src={leftAddressImageBase + `${item.img}.png`}
              title={item.text}
              subtitle={item.notification}
            />
          );
        })}
      </div>
    </div>
  );
}
