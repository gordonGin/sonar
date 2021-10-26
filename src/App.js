import React from 'react';
import './dist/styles.css';
import { MenuItem, Header, Menu, Navbar } from './components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<div className="container">
				<Header className="header">
					<Navbar />
				</Header>
				<Switch>
					<Route path="/" component={Menu} exact />
					<Route path="/batatas/:id" component={MenuItem} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
