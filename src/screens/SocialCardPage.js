import React from "react";
import { HomeJumbotron } from "../components/HomeJumbotron";
import { SocialCardPageContent } from "../components/SocialCardPageContent";

export default function SocialCardPage() {
  return (
    <>
      <HomeJumbotron noFilter={true} location={true} />
      <SocialCardPageContent />
    </>
  );
}
