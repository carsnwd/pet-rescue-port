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
const mockFaDog = jest.fn();
const mockGiDogHouse = jest.fn();
const mockFaHome = jest.fn();
const mockFaFileContract = jest.fn();
jest.mock("react-icons/fa", () => () => {
  return {
    ...jest.requireActual("react-icons/fa"),
    FaDog: () => {
      mockFaDog();
      return <div />;
    },
    FaHome: () => {
      mockFaHome();
      return <div />;
    },
    FaFileContract: () => {
      mockFaFileContract();
      return <div />;
    },
  };
});

describe("SidebarLogo - ", () => {
  test("snapshot", () => {
    const tree = render(<Sidebar />);
    expect(tree).toMatchSnapshot();
  });
  test("renders the sidebar", () => {
    const tree = render(<Sidebar />);
    expect(mockSidebarBtn).toHaveBeenCalledTimes(4);
    expect(mockSidebarBtn).toHaveBeenNthCalledWith(1, {
      label: "Home",
      linkTo: "/",
      icon: expect.anything(),
    });
    expect(mockSidebarBtn).toHaveBeenNthCalledWith(2, {
      label: "Animals",
      linkTo: "/animals",
      icon: expect.anything(),
    });
    expect(mockSidebarBtn).toHaveBeenNthCalledWith(3, {
      label: "Fosters",
      linkTo: "/fosters",
      icon: expect.anything(),
    });
    expect(mockSidebarBtn).toHaveBeenNthCalledWith(4, {
      label: "Adoption Inquries",
      linkTo: "/adoptions",
      icon: expect.anything(),
    });
    expect(mockSidebarLogo).toHaveBeenCalledTimes(1);
    // expect(mockFaDog).toHaveBeenCalledTimes(1);
    // expect(mockFaFileContract).toHaveBeenCalledTimes(1);
    // expect(mockGiDogHouse).toHaveBeenCalledTimes(1);
    // expect(mockFaHome).toHaveBeenCalledTimes(1);
  });
});
