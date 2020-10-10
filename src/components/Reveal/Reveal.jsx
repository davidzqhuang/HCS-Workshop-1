import React from "react";
import "./Reveal.css";
import { useState, setClicked } from 'react';

export default function Reveal({ secret }) {
	const [clicked, setClicked] = useState(false);
		if (clicked) {
			return (
				<>
					<p> { secret } </p>
				</>	
			);
		} else {
			return <p onClick={() => setClicked(true)}>click to reveal the secret</p>;
		}	
}
