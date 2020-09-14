import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Header from './Header';
imoport;

const App = () => {
	return (
		<div className="ui grid">
			<Router>
				<div>
					<Header />
					<Switch>
						<Route path="/" exact component={Home} />
					</Switch>
				</div>
			</Router>
		</div>
	);
};

export default App;
