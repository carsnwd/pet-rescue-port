import { Link } from "react-router-dom";

export default function Sidebar() {
    return <div className="bg-indigo-900 w-80 flex-col h-screen">
        <Link to="/">Home</Link>
        <Link to="/settings">Settings</Link>
    </div>;
}
