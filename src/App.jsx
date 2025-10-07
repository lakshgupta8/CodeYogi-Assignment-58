import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ProductDetailPage from "./ProductDetailPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="/product/1" element={<ProductDetailPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
