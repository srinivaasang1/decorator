import React, { Component, PropTypes } from 'react';

class HomeIntro extends Component{
  render()
  {
    return(
      <div id="home-intro-menu" className="container page-beige">
        <section id="home-intro">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-3">
            <h1><img className="img-responsive building" src="../../assets/img/building.png"/></h1>
          </div>
          <div className="col-md-3">
            <span id="paragraph">
              <p className="para"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </span>
          </div>
          <div className="col-md-3"></div>
        </div>
        </section>
      </div>
    );
  }
}

export default HomeIntro;
