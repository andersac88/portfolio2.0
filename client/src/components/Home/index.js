import React from 'react';

import './style.css';
import Simpsonized from '../../images/Simpsonized.jpg';

const Home = () => {
	const ta = {
		textAlign: 'center',
	};

	return (
		<div className="home">
			<img src={Simpsonized} alt="Simpsonsized Andrew"></img>
			<h1 style={ta}>Hi, I'm Andrew</h1>
			<br />
			<h5 style={ta}>
				I'm a freelance web developer with a passion for tinkering. I enjoy
				solving problems and working on complex projects.
			</h5>
			<br />
			<h5 style={ta}>
				I'm also a political junkie with and keen interest in world history
			</h5>
		</div>
	);
};

export default Home;
