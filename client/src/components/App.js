import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import Header from './Header';
import Home from './Home';

const App = () => {
	return (
		<Container>
			<BrowserRouter>
				<Row className="justify-content-center">
					<Col xs={2}>
						<Header />
					</Col>
					<Col xs={4}>
						<Home />
					</Col>
					<Col xs={4}>
						<Switch>
							<Route path="/" exact component={Home} />
						</Switch>
					</Col>
				</Row>
			</BrowserRouter>
		</Container>
	);
};

export default App;
