import "./UserMenu.scss";
import MainMenu from "./UserMenus/MainMenu/MainMenu";
import SettingAndPrivecy from "./UserMenus/SettingAndPrivecy/SettingAndPrivecy";
import { useState } from "react";
import HelpAndSupport from "./UserMenus/HelpAndSupport/HelpAndSupport";
import DisplayAndAccessibility from "./UserMenus/DisplayAndAccessibility/DisplayAndAccessibility";

export default function UserMenu() {
  const [page, setPage] = useState("MainMenu");
  const selectPage = (pageName) => {
    setPage(pageName);
  };

  return (
    <div>
      {page === "MainMenu" && <MainMenu onSelectPage={selectPage} />}
      {page === "SettingAndPrivercy" && (
        <SettingAndPrivecy onSelectPage={selectPage} />
      )}
      {page === "HelpAndSupport" && (
        <HelpAndSupport onSelectPage={selectPage} />
      )}
      {page === "DisplayAndAccessibility" && (
        <DisplayAndAccessibility onSelectPage={selectPage} />
      )}
    </div>
  );
}
