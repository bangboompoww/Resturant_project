import React from 'react';
import Navbar from './Home'
import { MDBBtn } from "mdbreact";
import { Route, Switch, Link, BrowserRouter, Router } from 'react-router-dom';

import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';
import './Home.css'
const NavLink2 = () => {
	return (
		<div> 
        <Navbar />
        <React.Fragment>
        
        <img
            className="Main"
            src="https://images.unsplash.com/photo-1576621246253-6a815a0edf1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80"
            
        />
    </React.Fragment>
    <React.Fragment>
        <h1 className="Section">About</h1>
        <h2 className="p1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam iusto accusamus officia vel dolorum
            neque enim cum modi optio fugiat quos, quidem, quisquam eos hic voluptates asperiores, corrupti
            ducimus doloremque vero a possimus. Eveniet, itaque!{' '}
        </h2>
        <h2 className="p2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam similique hic veritatis! Quam qui
            ea veritatis quis quidem sunt repudiandae? Officiis, tempora aperiam. Exercitationem, cupiditate.
            Reiciendis sit similique id aspernatur magni numquam at in beatae eum. Repudiandae necessitatibus
            laboriosam corrupti architecto veniam ut similique.
        </h2>
    </React.Fragment>

    <div className="FlexboxImg">
        <img
            className="img1"
            src="https://images.unsplash.com/photo-1535400875775-0269e7a919af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            
        />

        <img
            className="img2"
            src="https://images.unsplash.com/photo-1564836235910-c3055ca0f912?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
           
        />

        <img
            className="img3"
            src="https://images.unsplash.com/photo-1539755530862-00f623c00f52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
          
        />

        <img
            className="img4"
            src="https://images.unsplash.com/photo-1590412200988-a436970781fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"
            
        />

        <img
            className="img5"
            src="https://images.unsplash.com/photo-1511378156040-1259b5bcd0fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=927&q=80"
        />

        <img
            className="img6"
            src="https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=945&q=80"
        />
        <img
            className="img7"
            src="https://images.unsplash.com/photo-1578704310847-337468a863d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
            
        />
        <img
            className="img8"
            src="https://images.unsplash.com/photo-1537516803400-bf9d09ae3d2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60"
            
        />
        <img
            className="img9"
            src="https://images.unsplash.com/photo-1548943487-a2e4e43b4853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            
        />
        <img
            className="img10"
            src="https://images.unsplash.com/photo-1552912470-ee2e96439539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80"
        />
    </div>

    <div className="SocialMedia">
        <h1>Follow us on Instagram<img className="footerlogo" src="https://img.icons8.com/color/48/000000/instagram-new.png"/> </h1>
        <div className="button">
        <MDBBtn href="https://www.instagram.com/" color="dark">@1996 Curry</MDBBtn>

        </div>
    </div>

    <MDBFooter color="stylish-color-dark" className="page-footer font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
            <MDBRow>
                <MDBCol md="3">
                    <h1 className="Location"> Location <img className="footerlogo" src="https://img.icons8.com/plasticine/100/000000/worldwide-location.png"/> </h1>
                    <h2 className="Location1">
                        123 New York St #123 <br /> New York, NY 33333
                    </h2>
                </MDBCol>
                <hr className="clearfix w-100 d-md-none" />
                <MDBCol md="6">
                    <h1 className="Contact">Contact <img className="footerlogo" src="https://img.icons8.com/color/48/000000/about-us-female.png"/> </h1>
                    <h2 className="Contact1">
                        lorem@1996curry.com <br /> (999) 999-9999{' '}
                    </h2>
                </MDBCol>
                <hr className="clearfix w-100 d-md-none" />
                <MDBCol md="2">
                    <h1 className="hours">Hours<img className="hourslogo"  src="https://img.icons8.com/color/48/000000/every-three-hours.png"/></h1>
                    <h2 className="hours1" >
                        Monday-Thursday 10pm-10pm <br /> Friday 10pm–12am <br /> Saturday 12pm–12am <br />Sunday
                        12pm–9pm
                    </h2>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        <hr />
        <div className="text-center py-3">
            <ul className="list-unstyled list-inline mb-0">
                <li className="list-inline-item" />
                <li className="list-inline-item" />
            </ul>
        </div>
        <hr />

        <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
                <h5 className="copyright"> &copy; {new Date().getFullYear()} Copyright 1996 Curry</h5>
            </MDBContainer>
        </div>
    </MDBFooter>

		
		</div>
	);
};

export default NavLink2;
