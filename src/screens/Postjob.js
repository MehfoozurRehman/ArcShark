import React from "react";
import { postjobbg } from "../assets";
import { HomeJumbotron } from "../components/HomeJumbotron";
import { PostjobContentCard } from "./PostjobContentCard";

export default function Postjob({
  setPostJobDetailsPopupVisible,
  setHireTalentPopupVisible,
}) {
  return (
    <>
      <HomeJumbotron
        noFilter={true}
        location={true}
        bg={postjobbg}
        onPostJob={setHireTalentPopupVisible}
      />
      <div className="home__content__postjob">
        <PostjobContentCard
          setPostJobDetailsPopupVisible={setPostJobDetailsPopupVisible}
        />
        <PostjobContentCard
          setPostJobDetailsPopupVisible={setPostJobDetailsPopupVisible}
        />
        <PostjobContentCard
          setPostJobDetailsPopupVisible={setPostJobDetailsPopupVisible}
        />
        <PostjobContentCard
          setPostJobDetailsPopupVisible={setPostJobDetailsPopupVisible}
        />
        <PostjobContentCard
          setPostJobDetailsPopupVisible={setPostJobDetailsPopupVisible}
        />
        <PostjobContentCard
          setPostJobDetailsPopupVisible={setPostJobDetailsPopupVisible}
        />
        <PostjobContentCard
          setPostJobDetailsPopupVisible={setPostJobDetailsPopupVisible}
        />
        <PostjobContentCard
          setPostJobDetailsPopupVisible={setPostJobDetailsPopupVisible}
        />
        <PostjobContentCard
          setPostJobDetailsPopupVisible={setPostJobDetailsPopupVisible}
        />
        <PostjobContentCard
          setPostJobDetailsPopupVisible={setPostJobDetailsPopupVisible}
        />
        <PostjobContentCard
          setPostJobDetailsPopupVisible={setPostJobDetailsPopupVisible}
        />
        <PostjobContentCard
          setPostJobDetailsPopupVisible={setPostJobDetailsPopupVisible}
        />
        <PostjobContentCard
          setPostJobDetailsPopupVisible={setPostJobDetailsPopupVisible}
        />
        <PostjobContentCard
          setPostJobDetailsPopupVisible={setPostJobDetailsPopupVisible}
        />
        <PostjobContentCard
          setPostJobDetailsPopupVisible={setPostJobDetailsPopupVisible}
        />
        <PostjobContentCard
          setPostJobDetailsPopupVisible={setPostJobDetailsPopupVisible}
        />
        <PostjobContentCard
          setPostJobDetailsPopupVisible={setPostJobDetailsPopupVisible}
        />
        <PostjobContentCard
          setPostJobDetailsPopupVisible={setPostJobDetailsPopupVisible}
        />
        <PostjobContentCard
          setPostJobDetailsPopupVisible={setPostJobDetailsPopupVisible}
        />
        <PostjobContentCard
          setPostJobDetailsPopupVisible={setPostJobDetailsPopupVisible}
        />
        <PostjobContentCard
          setPostJobDetailsPopupVisible={setPostJobDetailsPopupVisible}
        />
        <PostjobContentCard
          setPostJobDetailsPopupVisible={setPostJobDetailsPopupVisible}
        />
        <PostjobContentCard
          setPostJobDetailsPopupVisible={setPostJobDetailsPopupVisible}
        />
        <PostjobContentCard
          setPostJobDetailsPopupVisible={setPostJobDetailsPopupVisible}
        />
      </div>
    </>
  );
}
