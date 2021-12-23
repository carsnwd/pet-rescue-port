import { ReactElement } from "react";

export interface SidebarBtnProps {
  label: string;
  linkTo: string;
  icon?: ReactElement;
}
export type AnimalData = {
  name: string;
  species: string;
  gender: string;
  age: string;
};
