import React from "react";
import SidebarBtn from "./SidebarBtn/SidebarBtn";
import SidebarLogo from "./SidebarLogo/SidebarLogo";
import { GiDogHouse } from "react-icons/gi";
import { FaDog, FaHome, FaFileContract } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="bg-primary w-96 flex-col h-screen">
      <SidebarLogo />
      <SidebarBtn label="Home" linkTo="/" icon={<FaHome />}></SidebarBtn>
      <SidebarBtn
        label="Animals"
        linkTo="/animals"
        icon={<FaDog />}
      ></SidebarBtn>
      <SidebarBtn
        label="Fosters"
        linkTo="/fosters"
        icon={<GiDogHouse />}
      ></SidebarBtn>
      <SidebarBtn
        label="Adoption Inquries"
        linkTo="/adoptions"
        icon={<FaFileContract />}
      ></SidebarBtn>
    </div>
  );
}
