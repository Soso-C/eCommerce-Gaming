import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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
import { CartContext } from "./context/CartContext";

export default function App() {
  const { cart } = useContext(CartContext);
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
          <Route
            path="/checkout"
            element={cart.length > 0 ? <CheckoutPage /> : <Navigate to="/" />}
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
