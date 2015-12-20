import React, { Component, PropTypes } from 'react';
import DocumentMeta from 'react-document-meta';
import config from '../../config';


export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render() {
    const styles = require('./App.scss');
    return (
      <div className={styles.app}>
        <DocumentMeta {...config.app}/>
        {this.props.children}
      </div>
    );
  }
}
