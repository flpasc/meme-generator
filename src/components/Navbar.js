import React from "react";
import trollface from "../img/trollface.png";

export default function Navbar() {
	return (
		<div className="navbar">
			<img src={trollface} alt="trollface" className="navbar--icon" />
			<h2 className="navbar--text">Meme Generator</h2>
			<h5 className="navbar--course">React Course - Project 3</h5>
		</div>
	);
}
