import React from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skillsSection } from "../../portfolio";

export default function Skills() {
  return (
    <div className="main" id="skills">
      <div className="skills-main-div">
        <div className="skills-image-div">
          <img alt="Saad Working" src={require("../../assests/images/developerActivity.svg")}></img>
        </div>
        <div className="skills-text-div">
          <h1 className="skills-heading">{skillsSection.title} </h1>
          <p className="subTitle skills-text-subtitle">{skillsSection.subTitle}</p>
          <SoftwareSkill />
          <div>
            {skillsSection.skills.map(mskill => {
              return <p className="subTitle skills-text">{mskill}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
