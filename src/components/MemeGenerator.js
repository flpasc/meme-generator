import React, { useState, useEffect } from "react";

export default function MemeGenerator() {
	const [meme, setMeme] = useState({ topText: "", bottomText: "", randomImage: "http://i.imgflip.com/1bij.jpg" });
	const [allMemes, setAllMemes] = useState([]);

	useEffect(() => {
		fetch("https://api.imgflip.com/get_memes")
			.then((response) => response.json())
			.then((data) => setAllMemes(data.data.memes));
	}, []);

	function getMemeImage() {
		const randomIndex = Math.floor(Math.random() * allMemes.length);
		const { url } = allMemes[randomIndex];
		setMeme((prevMeme) => ({
			...prevMeme,
			randomImage: url,
		}));
	}

	function handleChange(event) {
		const { name, value } = event.target;

		setMeme((prevMeme) => ({
			...prevMeme,
			[name]: value,
		}));
	}

	return (
		<main className="meme-generator">
			<div className="meme--form">
				<input
					className="meme--input"
					type="text"
					placeholder="First"
					name="topText"
					value={meme.topText}
					onChange={handleChange}
				/>
				<input
					className="meme--input"
					type="text"
					placeholder="Second"
					name="bottomText"
					value={meme.bottomText}
					onChange={handleChange}
				/>
				<button onClick={getMemeImage} className="meme--btn-new">
					Get new meme image
				</button>
			</div>
			<div className="meme">
				<img className="meme--image" src={meme.randomImage} alt="funny meme" />
				<h2 className="meme--text top">{meme.topText}</h2>
				<h2 className="meme--text bottom">{meme.bottomText}</h2>
			</div>
		</main>
	);
}
