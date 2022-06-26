import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import TopNavbarMessage from "./components/topnavbar/TopNavbarMessage";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="bg-gray-100">
      <Router>
        <TopNavbarMessage />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
