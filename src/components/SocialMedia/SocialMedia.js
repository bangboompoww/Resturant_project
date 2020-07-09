import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import './SocialMedia.css'
 class SocialMedia extends Component {
    render() {
        return (
            <div className="SocialMedia" >
                <h1>Follow us on Instagram</h1>
                <div className="button">
                   <Button href="https://www.instagram.com/" variant="dark" size="lg">
                       @1996 Curry
                   </Button> 
                   </div>
            </div>
        )
    }
}

export default SocialMedia