import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import './style.css';
import Header from '../Header';
import Home from '../Home';
import Portfolio from '../Portfolio';

const App = () => {
	return (
		<Container fluid>
			<BrowserRouter>
				<Row className="justify-content-center" style={{ marginTop: '20%' }}>
					<Col className="col" xs={1}>
						<Header />
					</Col>
					<Col className="col" xs={5}>
						<Home />
					</Col>
					<Col className="col" xs={5}>
						<Switch>
							<Route path="/" exact component={Portfolio} />
						</Switch>
					</Col>
				</Row>
			</BrowserRouter>
		</Container>
	);
};

export default App;
