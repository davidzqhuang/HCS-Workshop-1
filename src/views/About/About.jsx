import React from "react";
import "./About.css";
import transformer from "../../assets/transformer_thonks.png";
import Expandable from "../../components/Expandable/Expandable";

export default function AboutScreen() {
  return (
    <div className="screen-background">
      <div className="intro-background">
        <div className="intro-item">
					<img src={transformer} alt="Transformer!" className="intro-picture"></img>
        </div>
        <div className="intro-item">
          Wow wow wow David Huang is a pretty cool person! check out all these
          details
        </div>
				<Expandable content="hihihihi" />
      </div>
    </div>
  );
}
