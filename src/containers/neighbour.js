import React, { Component, PropTypes } from 'react';
import ReactSlickDemo from '../components/slick-slider';

class Neighbour extends Component{
  render()
  {
    return(
      <div id="neighbour-menu" className="container page-beige">
        <section id="neighbour">
          <div className="col-md-12"><h1 className="title">NEIGHBOUR</h1></div>
          <p className="para">Take a look to see the flourishing district surrounding 88 & 90 Lex.</p>
        </section>
        <ReactSlickDemo/>
      </div>
    );
  }
}

export default Neighbour;
