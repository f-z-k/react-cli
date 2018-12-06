import React, { Component } from 'react';
// import logo from './logo.svg';
import { Link } from 'react-router-dom'
import './App.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { testAction, testAsyncAction } from './../action'
class App extends Component {
  componentDidMount() {
    this.props.testAction({a:[111,222]})
    // this.props.testAsyncAction()
  }
  componentWillReceiveProps(props) {
    console.log(props)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="" className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Link to="/app">app</Link>
          <a
            className="App-link"
            href="/app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default connect(state => ({
  testReducer: state.testReducer,
  testAsyncReducer: state.testAsyncReducer
}), dispatch => ({
  testAction: bindActionCreators(testAction, dispatch),
  testAsyncAction: bindActionCreators(testAsyncAction, dispatch)
}))(App);
