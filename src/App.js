import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./screens/About";
import HomeScreen from "./screens/HomeScreen";
import Footer from "./components/Footer";
import Register from "./screens/Register";
import LetsTalk from "./components/LetsTalk";
import SocialCardPage from "./screens/SocialCardPage";
import SignIn from "./screens/SignIn";
import Welcome from "./screens/Welcome";
import Postjob from "./screens/Postjob";
import TermsAndCondition from "./screens/TermsAndCondition";
import "./about.scss";
import PostJobDetailsPopup from "./components/PostJobDetailsPopup";
import PrivacyPolicy from "./screens/PrivacyPolicy";
import Forget from "./screens/Forget";

export default function App() {
  const [postJobDetailsPopupVisible, setPostJobDetailsPopupVisible] =
    useState(false);

  return (
    <>
      {postJobDetailsPopupVisible ? (
        <PostJobDetailsPopup
          onClose={() => {
            setPostJobDetailsPopupVisible(false);
          }}
        />
      ) : null}
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/termandcondition" element={<TermsAndCondition />} />
        <Route path="/register" element={<Register />} />
        <Route path="/letstalk" element={<LetsTalk />} />
        <Route path="/jobs" element={<SocialCardPage />} />
        <Route path="/sign_in" element={<SignIn />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/postjob" element={<Postjob />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </>
  );
}
