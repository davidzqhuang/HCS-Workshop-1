import React from "react";
import "./Experience.css";
import Reveal from "../../components/Reveal/Reveal";

export default function ExperienceScreen() {
  return (
    <div className="screen-background">
      <div className="experience-background">
        <div className="timeline-background">
          this is where the timeline will go
					<Reveal secret={"i'm the avatar"} />
        </div>
        <div className="highlight-background">
          <h1>this is where the selected experience will go</h1>
          <p>all the date information about the selected experience!</p>
          <h4>description of the selected experience</h4>
        </div>
      </div>
    </div>
  );
}
