import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./screens/About";
import HomeScreen from "./screens/HomeScreen";
import "./about.scss";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about-us" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}
