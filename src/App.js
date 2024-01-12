import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import Booking from "./components/Booking/Booking";
import Cars from "./components/Cars/Cars";
import HomePage from "./components/HomePage/HomePage";
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
