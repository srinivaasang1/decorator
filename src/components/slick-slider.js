import React , {Component} from 'react';
import Slider from 'react-slick'

export default class ReactSlickDemo extends Component {
  render() {
    const settings = {
      centerMode: true,
      infinite: true,
      centerPadding: '60px',
      slidesToShow: 3,
      speed: 500,
    };
    return (
      <div className="sliderContainer">
        <Slider {...settings}>
        <div><img className="img-circle circ-img" src='../../assets/img/sarabeths.jpg' /></div>
        <div><img className="img-circle circ-img" src='../../assets/img/penelope.jpg' /></div>
        <div><img className="img-circle circ-img" src='../../assets/img/park-ave.jpg' /></div>
        <div><img className="img-circle circ-img" src='../../assets/img/new-york.jpg' /></div>
        </Slider>
      </div>
    );
  }
}
