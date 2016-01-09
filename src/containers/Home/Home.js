import React, { Component } from 'react';
import {Jumbotron, Button, Glyphicon} from 'react-bootstrap';
import classNames from 'classnames';

export default class Home extends Component {
  render() {
    const styles = require('./Home.scss');
    const poolClass = classNames('container-fluid', styles.section, styles.pool);
    const apt1Class = classNames('container-fluid', styles.section, styles.apt1);

    return (
      <div className={styles.home}>
        <section>
          <Jumbotron className={'container-fluid ' + styles.jumbotron}>
            <h1>Adriatic House</h1>
            <p>Book a perfect vacation!</p>
            <p><Button bsStyle="primary">Learn more</Button></p>
          </Jumbotron>
        </section>
        <section className={poolClass}>
          <div className="carousel-caption">
            <a href="#">Gallery</a>
            <Glyphicon glyph="menu-right"/>
            <a href="#">Book</a>
            <Glyphicon glyph="menu-right"/>
          </div>
        </section>
        <section className={apt1Class}>
          <div className="carousel-caption">
            <a href="#">Gallery</a>
            <Glyphicon glyph="menu-right"/>
            <a href="#">Book</a>
            <Glyphicon glyph="menu-right"/>
          </div>
        </section>
      </div>
    );
  }
}
