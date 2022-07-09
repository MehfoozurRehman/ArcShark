import React, { useState } from "react";
import { ProjectCard } from "../components/ProjectCard";
import { HomeJumbotron } from "../components/HomeJumbotron";
import { UserCard } from "../components/UserCard";
import ProjectDetails from "./ProjectDetails";

export default function HomeScreen() {
  const [selectedRole, setSelectedRole] = useState("People");
  const people = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const projects = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <ProjectDetails />
      <HomeJumbotron
        selectedRole={selectedRole}
        setSelectedRole={setSelectedRole}
      />
      <div className="home__content">
        {selectedRole === "People"
          ? people.map(() => <UserCard />)
          : selectedRole === "Projects"
          ? projects.map(() => (
              <ProjectCard
                hovertext={
                  "Lorem Ipsum is simply dummy text of the printing and typesettin industry Lorem Ipsum has been the industry standard dummy text ever since the Lorem ipsum dolor sit amet consectetur adipisicing elit Quidem, sint Lorem ipsum dolor sit amet consectetur adipisicing elit Error, ducimus."
                }
              />
            ))
          : null}
      </div>
    </>
  );
}
