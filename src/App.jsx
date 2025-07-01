import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BanerSlider from "./components/BannerSlider";
import Hakkımızda from "./components/Hakkımızda";

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <BanerSlider />  
      <Hakkımızda />
      <Footer />
    </div>
  );
}

export default App;