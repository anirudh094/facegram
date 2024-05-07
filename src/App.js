import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Explore from "./Pages/Explore";
import Create from "./Pages/Create";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<SignUp />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
