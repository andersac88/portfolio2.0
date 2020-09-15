import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import Header from './Header';
import Home from './Home';

const App = () => {
	return (
		<Container>
			<Router>
				<Row>
					<Col xs={2}>
						<Header />
					</Col>
					<Col xs={4}>
						<Home />
					</Col>
					<Col xs={2}>
						<Switch>
							<Route path="/" exact component={Home} />
						</Switch>
					</Col>
				</Row>
			</Router>
		</Container>
	);
};

export default App;
