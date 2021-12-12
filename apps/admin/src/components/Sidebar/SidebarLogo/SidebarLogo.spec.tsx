import React from "react";
import { render } from "@testing-library/react";
import SidebarLogo from "./SidebarLogo";

describe("SidebarLogo - ", () => {
  test("snapshot", () => {
    const tree = render(<SidebarLogo />);
    expect(tree).toMatchSnapshot();
  });
  test("renders a logo for the sidebar", () => {
    const { getAllByAltText } = render(<SidebarLogo />);
    const image = getAllByAltText("shelter-logo")[0] as HTMLImageElement;
    expect(image.src).toContain("http://localhost/assets/logo.png");
  });
});
