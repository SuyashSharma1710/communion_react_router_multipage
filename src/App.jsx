import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login"
import Signup from "./pages/Signup"

function App() {
  return (
    <div className="mx-auto max-w-7xl">
      <Router>
        <div className="sticky top-1">
          <Navbar />
        </div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
