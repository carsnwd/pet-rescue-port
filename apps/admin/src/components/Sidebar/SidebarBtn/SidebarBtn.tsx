import React from "react";
import { Link } from "react-router-dom";
import { SidebarBtnProps } from "./interface";

export default function SidebarBtn(props: SidebarBtnProps) {
  const { label, linkTo, icon } = props;
  return (
    <Link
      to={linkTo}
      className="flex flex-grow mt-4"
      data-testid="sidebar-link"
    >
      <button className="bg-primary hover:bg-white text-white hover:text-primary font-bold py-2 px-4 whitespace-nowrap w-full text-left">
        <div className="inline-block mr-2">{icon}</div>
        {label}
      </button>
    </Link>
  );
}
