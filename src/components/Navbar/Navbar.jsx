import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="info">
        <h1 style={{ margin: 0 }}>David Huang</h1>
        <div className="info-bar">
          <p className="info-item">dhuang@college.harvard.edu</p>
        </div>
        <div className="info-bar">
					welcome to my website :D
        </div>
      </div>
			<div>
        <ul id="nav">
          <li><a href="/about">About</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/experience">Experience</a></li>
        </ul>
      </div>
    </>
  );
}
