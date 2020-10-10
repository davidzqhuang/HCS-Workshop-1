import React from "react";
import { useState, setClicked } from 'react';
import "./Expandable.css";


export default function Expandable({ content }) {
	const [clicked, setClicked] = useState(false);
	if (clicked) {
		return (
			<>
				<p onClick={() => setClicked(true)}>click for more info</p>
				<p> CLICKED!! </p>
				<p> Here Is Some More Cool Kid Info--the REAL content</p>
				<p> { content } </p>
			</>	
		);
	} else {
		return <p onClick={() => setClicked(true)}>click for more info</p>;
	}
}
