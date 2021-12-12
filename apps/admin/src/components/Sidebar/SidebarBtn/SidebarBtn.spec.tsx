import React from "react";
import { render } from "@testing-library/react";
import SidebarBtn from "./SidebarBtn";
import { MemoryRouter } from "react-router-dom";

describe("SidebarBtn", () => {
  test("snapshot", () => {
    const label = "test-value";
    const link = "test-link";
    const tree = render(
      <MemoryRouter>
        <SidebarBtn label={label} linkTo={link}></SidebarBtn>
      </MemoryRouter>
    );
    expect(tree).toMatchSnapshot();
  });
  test("should utilize the proper label and link", () => {
    const label = "test-value";
    const link = "test-link";
    const { getByText, getByTestId } = render(
      <MemoryRouter>
        <SidebarBtn label={label} linkTo={link}></SidebarBtn>
      </MemoryRouter>
    );
    const linkElem = getByTestId("sidebar-link");
    const btnElem = getByText(label);
    expect(btnElem).toBeInstanceOf(HTMLButtonElement);
    expect(linkElem).toBeDefined();
  });
});
