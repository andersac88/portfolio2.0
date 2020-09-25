import React, { useRef, useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import './style.css';
import Header from '../Header';
import Home from '../Home';
import Portfolio from '../Portfolio';
import Blog from '../Blog';
import About from '../About';
import Contact from '../Contact';

const App = () => {
	const [height, setHeight] = useState();
	const ref = useRef();
	useEffect(() => {
		console.log(ref.current.offsetHeight);
		let height = ref.current.offsetHeight;
		setHeight(height);
	}, []);

	//something is off with the ref for height...  differs by a few pixles from desired height; may have to try this as a class component...
	// Believe to be solved === potential solution ref.current.currentHeight vs ref.current.offsetHeight
	// look up the difference

	return (
		<Container fluid>
			<BrowserRouter>
				<Row
					className="justify-content-center"
					style={{ marginTop: '8%', marginBottom: '5%' }}
				>
					<Col className="col" xs={1} style={{ paddingRight: '0' }}>
						<Header />
					</Col>
					<Col className="col" xs={5} ref={ref}>
						<Home />
					</Col>
					<Col
						className="col"
						xs={5}
						style={{ overflowY: 'scroll', height: height }}
					>
						<Switch>
							<Route path="/portfolio" exact component={Portfolio} />
							<Route path="/blog" exact component={Blog} />
							<Route path="/" exact component={About} />
							<Route path="/contact" exact component={Contact} />
						</Switch>
					</Col>
				</Row>
			</BrowserRouter>
		</Container>
	);
};

export default App;
