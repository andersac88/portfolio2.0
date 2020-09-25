import React, { useState, useEffect } from 'react';
import { Card, Nav, Button } from 'react-bootstrap';
import axios from 'axios';

const Portfolio = () => {
	const [apps, setApps] = useState([]);

	useEffect(() => {
		const result = async () => {
			const response = await axios.get('/api/portfolio');
			setApps(response.data);
		};
		result();
	});

	const portfolioList = apps.map((app, i) => {
		return (
			<Card>
				<Card.Header>
					<Nav variant="tabs" defaultActiveKey="#first">
						<Nav.Item>
							<Nav.Link href="#first">Active</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link href="#link">Link</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link href="#disabled" disabled>
								Disabled
							</Nav.Link>
						</Nav.Item>
					</Nav>
				</Card.Header>
				<Card.Body>
					<Card.Title>Special title treatment</Card.Title>
					<Card.Text>
						With supporting text below as a natural lead-in to additional
						content.
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>
		);
	});

	return (
		<div>
			<h1>Hi</h1>
		</div>
	);
};

export default Portfolio;
