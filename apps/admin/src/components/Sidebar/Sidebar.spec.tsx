import React from "react";
import { render } from "@testing-library/react";
import { SidebarBtnProps } from "./SidebarBtn/interface";
import Sidebar from "./Sidebar";

const mockSidebarBtn = jest.fn();
jest.mock("./SidebarBtn/SidebarBtn", () => (props: SidebarBtnProps) => {
  mockSidebarBtn(props);
  return <div />;
});

const mockSidebarLogo = jest.fn();
jest.mock("./SidebarLogo/SidebarLogo", () => () => {
  mockSidebarLogo();
  return <div />;
});

describe("SidebarLogo - ", () => {
  test("snapshot", () => {
    const tree = render(<Sidebar />);
    expect(tree).toMatchSnapshot();
  });
  test("renders the sidebar", () => {
    const tree = render(<Sidebar />);
    expect(mockSidebarBtn).toHaveBeenCalledTimes(3);
    expect(mockSidebarBtn).toHaveBeenNthCalledWith(1, {
      label: "Home",
      linkTo: "/",
    });
    expect(mockSidebarBtn).toHaveBeenNthCalledWith(2, {
      label: "Browse Animals",
      linkTo: "/animals",
    });
    expect(mockSidebarBtn).toHaveBeenNthCalledWith(3, {
      label: "Settings",
      linkTo: "/settings",
    });
    expect(mockSidebarLogo).toHaveBeenCalledTimes(1);
  });
});
