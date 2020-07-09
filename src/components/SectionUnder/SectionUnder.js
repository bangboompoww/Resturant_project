import React, { Component } from 'react'
import './SectionUnder.css'
 class SectionUnder extends Component {
    render() {
        return (
            <div className="Footer">
                <div className="Flex1" >
                <h1 className="Location"> Location </h1>
                <h1 className="Contact" >Contact </h1>

                </div>
                <div className="Flex2" >
                <h2 className="Location1" > 123 New York St #123 <br /> New York, NY 33333</h2>
                
                <h2 classname="Contact1">lorem@1996curry.com <br /> (999) 999-9999 </h2>
                
                </div>
                <h1 className="hours">Hours <br /></h1>
                <h2>Monday-Thursday 10pm-10pm <br /> Friday 10pm–12am <br /> Saturday  12pm–12am   <br / >Sunday 12pm–9pm</h2>
                <h1 className="copyright">&copy; Copyright 2020, 1996 Curry </h1>
            </div>

        )
    }
}
export default SectionUnder