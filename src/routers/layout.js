import React, { Component } from 'react';
import MenuLeft from './menu'
import HeaderLayout from  './../component/header/headerLayout'
import HeaderContent from './../component/header/headerContent'
import { Route, Link } from 'react-router-dom';
class LayOut extends Component {
  componentDidMount() {
    console.log(this.props)
  }
  componentWillReceiveProps(props) {
    console.log(props)
  }
  render() {
    return (
      <div className="wrap-layOut">
        <HeaderLayout/>
        <MenuLeft/>
        <div className="content">
          <HeaderContent/>
          <Route exact path="/home" render={() => <div><Link to="/home1">Home</Link></div>}/>
          <Route exact path="/home1" render={() => {return <div>home1</div>}}/>
        </div>
      </div>
    );
  }
}

export default LayOut
