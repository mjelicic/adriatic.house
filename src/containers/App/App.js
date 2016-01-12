import React, { Component, PropTypes } from 'react';
import DocumentMeta from 'react-document-meta';
import config from '../../config';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import { IndexLink } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';


export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  componentDidMount() {
    window.scrollTo(0, 1);
  }

  render() {
    const styles = require('./App.scss');
    return (
      <div className={styles.app}>
        <DocumentMeta {...config.app}/>
        <Navbar fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <IndexLink to="/" activeStyle={{color: '#0079c1'}}>
                <div className={styles.brand}/>
                <span>{config.app.title}</span>
              </IndexLink>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>

          <Navbar.Collapse eventKey={0}>
            <Nav navbar>
              <LinkContainer to="/pool-house">
                <NavItem eventKey={2}>Pool House</NavItem>
              </LinkContainer>
              <LinkContainer to="/apartment-1">
                <NavItem eventKey={3}>Apartment 1</NavItem>
              </LinkContainer>
              <LinkContainer to="/apartment-2">
                <NavItem eventKey={4}>Apartment 2</NavItem>
              </LinkContainer>
            </Nav>
            <Nav navbar pullRight>
              <NavItem eventKey={1} target="_blank" title="View on Github" href="https://github.com/mjelicic/adriatic.house">
                <i className="fa fa-github"/>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div className={styles.appContent}>
          {this.props.children}
        </div>

      </div>
    );
  }
}
