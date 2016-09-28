import React, { Component, PropTypes } from 'react';

class Final extends Component{
  render()
  {
    return(
      <div id="final-menu"className="container page-gold">
        <section id="final">
          <h1 className="title">YOU DECIDE</h1>
          <div className="row">
            <div className="col-md-6 text-center">
              <div className="paragraph">
            		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </div>
            </div>
            <div className="col-md-6 text-center">
              <div className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </div>
            </div>
          </div>
        </section>
        <img className="img-responsive piano" src="../decorator/assets/img/piano.png"/>
      </div>
    );
  }
}

export default Final;
