import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Footer from "./components/Footer";
import Events from "./pages/Events";

function App() {
  return (
    <div className="mx-auto max-w-7xl transition-all">
      <Router>
        <div className="sticky z-50 top-1">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/events" element={<Events />} /> 
        </Routes>
        <div className=" p-4 ">
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
