import React, { Component } from 'react';
import Header from './header';
import Tech from '../containers/tech';
import HomeIntro from '../containers/home-intro';
import Neighbour from '../containers/neighbour';
import Design from '../containers/design';
import DesignAward from '../containers/design-award';
import Final from '../containers/final';




export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Tech/>
        <HomeIntro/>
        <Neighbour/>
        <Design/>
        <DesignAward/>
        <Final/>
      </div>
    );
  }
}
