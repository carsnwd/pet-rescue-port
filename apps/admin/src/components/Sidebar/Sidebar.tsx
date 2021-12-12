import React from "react";
import SidebarBtn from "./SidebarBtn/SidebarBtn";
import SidebarLogo from "./SidebarLogo/SidebarLogo";

export default function Sidebar() {
  return (
    <div className="bg-primary w-80 flex-col h-screen">
      <SidebarLogo />
      <SidebarBtn label="Home" linkTo="/"></SidebarBtn>
      <SidebarBtn label="Browse Animals" linkTo="/animals"></SidebarBtn>
      <SidebarBtn label="Settings" linkTo="/settings"></SidebarBtn>
    </div>
  );
}
