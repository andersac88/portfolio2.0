import React, { useState, useEffect } from 'react';
import { Card, Nav, Col, Row, Image } from 'react-bootstrap';
import axios from 'axios';

const images = require.context('../../images/', true);

const Portfolio = () => {
	const [apps, setApps] = useState([]);

	useEffect(() => {
		const result = async () => {
			const response = await axios.get('/api/portfolio');
			setApps(response.data);
			console.log(response.data);
		};
		result();
	}, []);

	const portfolioList = apps.map((app, i) => {
		return (
			<Card style={{ paddingTop: '1em' }}>
				<Card.Header>
					<Nav variant="tabs" defaultActiveKey="#first">
						<Nav.Item>
							<Nav.Link href="#first">About</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link href="#link">See Code</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							{/* the disabled below needs to depend on which app is being listed; some only work in command line and therefore have no link*/}
							<Nav.Link
								href="#disabled"
								disabled={app.appURL === '#' ? true : false}
							>
								Try App
							</Nav.Link>
						</Nav.Item>
					</Nav>
				</Card.Header>
				<Card.Body>
					<Card.Title>{app.App}</Card.Title>
					<Row>
						<Col>
							<Image src={require(`../../images/${app.Image}.png`)} rounded />
						</Col>
						<Col>
							<Card.Text>{app.Details}</Card.Text>
						</Col>
					</Row>
				</Card.Body>
			</Card>
		);
	});

	return (
		<div>
			<h1>Portfolio</h1>
			{portfolioList}
		</div>
	);
};

export default Portfolio;
