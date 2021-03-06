import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./screens/About";
import HomeScreen from "./screens/HomeScreen";
import Footer from "./components/Footer";
import Register from "./screens/Register";
import LetsTalk from "./components/LetsTalk";
import SignIn from "./screens/SignIn";
import Welcome from "./screens/Welcome";
import Postjob from "./screens/Postjob";
import TermsAndCondition from "./screens/TermsAndCondition";
import PostJobDetailsPopup from "./components/PostJobDetailsPopup";
import PrivacyPolicy from "./screens/PrivacyPolicy";
import Forget from "./screens/Forget";
import PostJobDetailsApplyPopup from "./components/PostJobDetailsApplyPopup";
import FreelanceProjectInquiryPopup from "./components/FreelanceProjectInquiryPopup";
import BlockUserPopup from "./components/BlockUserPopup";
import Profile from "./screens/Profile";
import NewMessagePopup from "./components/NewMessagePopup";
import HireTalentPopup from "./components/HireTalentPopup";
import ShareWork from "./screens/ShareWork";
import Forgetotp from "./screens/Forgetotp";
import EditProfile from "./screens/EditProfile";
import EditProfileBasicDetails from "./screens/EditProfileBasicDetails";
import EditProfileWorkExperience from "./screens/EditProfileWorkExperience";
import Settings from "./screens/Settings";
import EditProfileAwards from "./screens/EditProfileAwards";
import EditProfileEducation from "./screens/EditProfileEducation";
import EditProfileSkills from "./screens/EditProfileSkills";
import EditProfileLanguage from "./screens/EditProfileLanguage";
import SettingsEditProfile from "./screens/SettingsEditProfile";
import SettingsChangePassword from "./screens/SettingsChangePassword";
import SettingsJobPosting from "./screens/SettingsJobPosting";
import SettingsBlock from "./screens/SettingsBlock";
import ProjectDetails from "./screens/ProjectDetails";
import Messenger from "./screens/Messenger";

export const ProjectDetailsVisibleContext = createContext();
export const BlockUserPopupContext = createContext();

export default function App() {
  const [isUser, setIsUser] = useState(true);
  const [postJobDetailsPopupVisible, setPostJobDetailsPopupVisible] =
    useState(false);
  const [postJobDetailsApplyPopupVisible, setPostJobDetailsApplyPopupVisible] =
    useState(false);
  const [
    freelanceProjectInquiryPopupVisible,
    setFreelanceProjectInquiryPopupVisible,
  ] = useState(false);
  const [blockUserPopupVisible, setBlockUserPopupVisible] = useState(false);
  const [newMessagePopupVisible, setNewMessagePopupVisible] = useState(false);
  const [hireTalentPopupVisible, setHireTalentPopupVisible] = useState(false);
  const [projectDetailsVisible, setProjectDetailsVisible] = useState(false);

  return (
    <>
      {postJobDetailsPopupVisible ? (
        <PostJobDetailsPopup
          onClose={() => {
            setPostJobDetailsPopupVisible(false);
          }}
        />
      ) : null}
      {postJobDetailsApplyPopupVisible ? (
        <PostJobDetailsApplyPopup
          onClose={() => {
            setPostJobDetailsApplyPopupVisible(false);
          }}
        />
      ) : null}
      {freelanceProjectInquiryPopupVisible ? (
        <FreelanceProjectInquiryPopup
          onClose={() => {
            setFreelanceProjectInquiryPopupVisible(false);
          }}
        />
      ) : null}
      {blockUserPopupVisible ? (
        <BlockUserPopup
          onClose={() => {
            setBlockUserPopupVisible(false);
          }}
        />
      ) : null}
      {newMessagePopupVisible ? (
        <NewMessagePopup
          onClose={() => {
            setNewMessagePopupVisible(false);
          }}
        />
      ) : null}
      {hireTalentPopupVisible ? (
        <HireTalentPopup
          onClose={() => {
            setHireTalentPopupVisible(false);
          }}
        />
      ) : null}

      {projectDetailsVisible ? (
        <ProjectDetails
          onClose={() => {
            setProjectDetailsVisible(false);
          }}
        />
      ) : null}
      <Header isUser={isUser} setIsUser={setIsUser} />
      <ProjectDetailsVisibleContext.Provider value={setProjectDetailsVisible}>
        <BlockUserPopupContext.Provider value={setBlockUserPopupVisible}>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/termandcondition" element={<TermsAndCondition />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route
              path="/register"
              element={<Register setIsUser={setIsUser} />}
            />
            <Route path="/sign_in" element={<SignIn setIsUser={setIsUser} />} />
            <Route path="/letstalk" element={<LetsTalk />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route
              path="/postjob"
              element={
                <Postjob
                  setPostJobDetailsPopupVisible={setPostJobDetailsPopupVisible}
                  setHireTalentPopupVisible={setHireTalentPopupVisible}
                />
              }
            />
            <Route path="/profile" element={<Profile user={true} />} />
            <Route path="/details" element={<Profile />} />
            <Route path="/sharework" element={<ShareWork />} />
            <Route path="/editprofile" element={<EditProfile />}>
              <Route path="" element={<EditProfileBasicDetails />} />
              <Route
                path="experiance"
                element={<EditProfileWorkExperience />}
              />
              <Route path="award" element={<EditProfileAwards />} />
              <Route path="education" element={<EditProfileEducation />} />
              <Route path="skills" element={<EditProfileSkills />} />
              <Route path="languages" element={<EditProfileLanguage />} />
            </Route>
            <Route path="/settings" element={<Settings />}>
              <Route path="" element={<SettingsEditProfile />} />
              <Route
                path="changepassword"
                element={<SettingsChangePassword />}
              />
              <Route path="jobposting" element={<SettingsJobPosting />} />
              <Route path="block" element={<SettingsBlock />} />
            </Route>
            <Route path="/forget" element={<Forget />} />
            <Route path="/forgetotp" element={<Forgetotp />} />
            <Route path="/messenger" element={<Messenger />} />
          </Routes>
        </BlockUserPopupContext.Provider>
      </ProjectDetailsVisibleContext.Provider>
      <Footer />
    </>
  );
}
