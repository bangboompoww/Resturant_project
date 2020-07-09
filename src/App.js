import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'
import Section from './components/Section/Section'
import FlexboxImg from './components/FlexboxImg/FlexboxImg'
import SectionUnder from './components/SectionUnder/SectionUnder'
import './index.css'
import SocialMedia from './components/SocialMedia/SocialMedia';
class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar />
      <Main />
      <Section />
      <FlexboxImg />
      <SocialMedia />
      <SectionUnder />
      </div>
    );
  }
}

export default App;
