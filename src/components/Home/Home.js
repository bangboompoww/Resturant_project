import React from 'react';
import { Route, Switch, Link, NavLink, Redirect, BrowserRouter } from 'react-router-dom';
import NavLink2 from './Navlink2'
import Order from '../Order/Order'

import './Home.css';

const Navbar = () => {
	
	return (
		<div>
		<BrowserRouter>
		<div className="Navbar" >
			<Link className="linkText" to="/" >1996 Curry<img className="logo" src="https://img.icons8.com/officel/100/000000/rice-bowl.png"/></Link>
			<Link className="linkText" to="/order" >Order here</Link>
		</div>
		<Switch>
		<Route  path="/"/>
            <Route  component={Order} path= "/order"/>
        </Switch>


			
</BrowserRouter>
		
			



		</div>
	);
};

export default Navbar;
