import React from "react";
import { Link } from "react-router-dom";
import { SidebarBtnProps } from "./interface";

export default function SidebarBtn(props: SidebarBtnProps) {
  const { label, linkTo } = props;
  return (
    <Link
      to={linkTo}
      className="flex flex-grow ml-4 mt-4"
      data-testid="sidebar-link"
    >
      <button className="bg-primary hover:bg-white text-white hover:text-primary font-bold py-2 px-4 rounded-full whitespace-nowrap">
        {label}
      </button>
    </Link>
  );
}
