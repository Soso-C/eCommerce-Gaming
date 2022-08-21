import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import TopNavbarMessage from "./components/topnavbar/TopNavbarMessage";
import Home from "./pages/Home";
import Article from "./pages/Article";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import CheckoutPage from "./pages/CheckoutPage";
import LoginPage from "./pages/LoginPage";
import AuthRoute from "./components/PrivateRoute/AuthRoute";
import DashboardPage from "./pages/DashboardPage";

export default function App() {
  return (
    <div className="bg-gray-100">
      <Router>
        <TopNavbarMessage />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/category/:slug" element={<Products />} />
          <Route element={<AuthRoute />}>
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
