import React, { Component } from 'react';
import Home from './components/Home/Navlink2';
import './index.css';
import { Route, Switch, Link, NavLink, Redirect, BrowserRouter } from 'react-router-dom';
import Order from './components/Home/Order';
import NavLink2 from './components/Home/Navlink2';
class App extends Component {
	render() {
		return (
			<div className="App">
			

			<Home />
			</div>
		);
	}
}

export default App;
