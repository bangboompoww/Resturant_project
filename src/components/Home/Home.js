import React from 'react';
import { Route, Switch, Link, BrowserRouter, Router } from 'react-router-dom';
import NavLink2 from './Navlink2';
import Order from './Order';
import './Home.css';

const Navbar = () => {
	return (
		<div>
			<div className="Navbar">
				<Link className="linkText" to="/">
					1996 Curry<img className="logo" src="https://img.icons8.com/officel/100/000000/rice-bowl.png" />
				</Link>
				<Link className="linkText" to="/order">
					Order here
				</Link>
			</div>
			
			<Switch>
				<Route  exact path="/" />

				<Route exact component={Order} path="/order">
				</Route>
			</Switch>
		</div>
	);
};

export default Navbar;
