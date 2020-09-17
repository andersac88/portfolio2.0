import React from 'react';

import './style.css';
import Simpsonized from '../../images/Simpsonized.jpg';

const Home = () => {
	const ta = {
		textAlign: 'center',
	};

	return (
		<div className="home">
			<img src={Simpsonized}></img>
			<h1 style={ta}>Hi, I'm Andrew</h1>
			<br />
			<h5 style={ta}>
				I'm a freelance web developer with a passion for problem solving. I
				enjoy working on complex projects with teams of driven individuals.
			</h5>
			<br />
			<h5 style={ta}>I also have an affinity for all things fuzzy</h5>
		</div>
	);
};

export default Home;
