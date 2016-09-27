import React, { Component, PropTypes } from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

class Header extends Component{
  render()
  {
    return(
      <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse navbar-ex1-collapse">
          <ul className="nav navbar-nav">
            <li><a data-toggle="collapse" data-target=".navbar-ex1-collapse" href="#home-menu">HOME</a></li>
             <li><a data-toggle="collapse" data-target=".navbar-ex1-collapse" href="#neighbour-menu">NEIGHBOUR</a></li>
             <li><a data-toggle="collapse" data-target=".navbar-ex1-collapse" href="#design-menu">DESIGN</a></li>
             <li><a data-toggle="collapse" data-target=".navbar-ex1-collapse" href="#design-awards-menu">AWARDS</a></li>
             <li><a data-toggle="collapse" data-target=".navbar-ex1-collapse" href="#final-menu">CONCLUSION</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
