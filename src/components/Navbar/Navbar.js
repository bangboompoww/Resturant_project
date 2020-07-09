import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import './Navbar.css';

const Navbar = () => {
	return (
		<Nav className="Navbar" defaultActiveKey="/home" as="ul">
			<Nav.Item  className="Navbar-link" as="li">
            <Nav.Link href="/">  <h4 className="linkText">1996 Curry</h4>  </Nav.Link>

            </Nav.Item>
			<Nav.Item as="li">
				<Nav.Link eventKey="link-1"><h4 className="linkText">Order Here</h4></Nav.Link>
			</Nav.Item>
			
		</Nav>
	);
};

export default Navbar;
