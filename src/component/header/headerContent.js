import React, { Component } from 'react';
import './header.scss'
import { withRouter } from 'react-router-dom'
class HeaderContent extends Component {
  componentDidMount() {
    console.log(this.props, '=====')
  }
  render() {
    return (
      <div className="header-content">
        <h2>标题一</h2>
      </div>
    );
  }
}

export default withRouter(HeaderContent)
