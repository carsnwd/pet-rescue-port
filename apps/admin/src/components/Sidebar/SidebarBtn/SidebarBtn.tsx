import { Link } from "react-router-dom";

export default function SidebarBtn(props: { label: string; linkTo: string }) {
  const { label, linkTo } = props;
  return (
    <Link to={linkTo} className="flex flex-grow ml-4 mt-4">
      <button className="bg-primary hover:bg-white text-white hover:text-primary font-bold py-2 px-4 rounded-full whitespace-nowrap">
        {label}
      </button>
    </Link>
  );
}
