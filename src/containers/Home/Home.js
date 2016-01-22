import React, { Component } from 'react';
import {Carousel, CarouselItem, Glyphicon, Image} from 'react-bootstrap';
import classNames from 'classnames';

export default class Home extends Component {
  render() {
    const styles = require('./Home.scss');
    const poolImg = require('./pool.jpg');
    const apt1Img = require('./apt1.jpg');

    const captionClass = classNames('carousel-caption', styles.caption);
    return (
      <div className={styles.home}>
        <Carousel className={styles.carousel}>
          <CarouselItem>
            <img alt="Pool house" src={poolImg}/>
            <div className={captionClass}>
              <a href="#">Learn More</a>
              <Glyphicon glyph="menu-right" />
              <a href="#">Book</a>
              <Glyphicon glyph="menu-right" />
            </div>
          </CarouselItem>
          <CarouselItem>
            <img height={500} alt="Apartment 1" src={apt1Img}/>
            <div className={captionClass}>
              <a href="#">Learn More</a>
              <Glyphicon glyph="menu-right" />
              <a href="#">Book</a>
              <Glyphicon glyph="menu-right" />
            </div>
          </CarouselItem>
        </Carousel>
        <div className={styles.mobileSection}>
          <div className={styles.mobileImage}>
            <Image alt="Pool house" src={poolImg} responsive />
            <div className={captionClass}>
              <a href="#">Learn More</a>
              <Glyphicon glyph="menu-right" />
              <a href="#">Book</a>
              <Glyphicon glyph="menu-right" />
            </div>
          </div>
          <div className={styles.mobileImage}>
            <Image alt="Apartment 1" src={apt1Img} responsive />
            <div className={captionClass}>
              <a href="#">Learn More</a>
              <Glyphicon glyph="menu-right" />
              <a href="#">Book</a>
              <Glyphicon glyph="menu-right" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
