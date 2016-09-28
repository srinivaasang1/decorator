import React, { Component, PropTypes } from 'react';

class DesignAward extends Component{
  render()
  {
    return(
      <div id="design-awards-menu" className="page-beige vcenter1">
        <div id="design-awards">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-3">
              <h1><img className="img-responsive bookshelf" src="../decorator/assets/img/bookshelf.png"/></h1>
            </div>
            <div className="col-md-3">
              <span id="paragraph">
                <span className="title">AWARD WINNING DESIGN TEAM</span>
                <p className="para"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              </span>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default DesignAward;
