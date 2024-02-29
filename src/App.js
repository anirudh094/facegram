import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./Pages/TopBar";
import SideBar from "./Pages/SideBar";
import Home from "./Pages/Home";
import Explore from "./Pages/Explore";
import Create from "./Pages/Create";
function App() {
  return (
    <div>
      <Router>
        <TopBar />
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
