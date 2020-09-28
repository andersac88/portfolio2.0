import React from 'react';
import { Button } from 'react-bootstrap';
import file from '../../images/gravel.png';

const About = () => {
	return (
		<div className="container">
			<h1 style={{ textAlign: 'center' }}>About</h1>
			<Button variant="secondary" size="lg" block download href={file}>
				Download Andrew's Resume
			</Button>
			<hr />
			<p>
				I currently work as a Property Manager moonlighting as a freelance web
				developer with the ultimate goal of becoming full-time dev.
			</p>
		</div>
	);
};

export default About;
