import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./layouts/Home";
import Settings from "./layouts/Settings";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-col bg-white w-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
