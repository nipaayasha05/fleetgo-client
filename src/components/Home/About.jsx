import React from "react";
import AboutCard from "./AboutCard";

const About = ({ about }) => {
  return (
    <div className="container mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 py-3">
      {about.map((ab) => (
        <AboutCard ab={ab} key={ab.id}></AboutCard>
      ))}
    </div>
  );
};

export default About;
