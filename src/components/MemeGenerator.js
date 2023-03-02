import React, { useState } from "react";
import memesData from "../memesData";

export default function MemeGenerator() {
	const [meme, setMeme] = useState({ topText: "", bottomText: "", randomImage: "http://i.imgflip.com/1bij.jpg" });
	const [allMemeImages, setAllMemeImages] = useState(memesData);

	function getMemeImage() {
		const memesArray = allMemeImages.data.memes;
		const randomIndex = Math.floor(Math.random() * memesArray.length);
		const { url } = memesArray[randomIndex];
		setMeme((prevMeme) => ({
			...prevMeme,
			randomImage: url,
		}));
	}

	return (
		<main className="meme-generator">
			<div className="meme--form">
				<input className="meme--input" type="text" placeholder="First" />
				<input className="meme--input" type="text" placeholder="Second" />
				<button onClick={getMemeImage} className="meme--btn-new">
					Get new meme image
				</button>
			</div>
			<img className="meme--image" src={meme.randomImage} alt="funny meme" />
		</main>
	);
}
