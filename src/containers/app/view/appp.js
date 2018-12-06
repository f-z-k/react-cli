import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Menu } from 'react-piros'
import { connect } from 'react-redux'
import { testAction } from './../action'
class Appp extends Component {
  componentDidMount() {
    console.log('----')
    console.log(this.props)
    // this.props.testAction({a:[111,222]})
  }
  componentWillReceiveProps(props) {
    // console.log(props)
  }
  render() {
    return (
      <div className="App">
        <Menu
        dataSource={
          [
             {
                title:"栏目1",
                key:"m1",
                list:[
                  { 
                    title:"sub1",
                    key:"sub1"
                  }
                ]
             },
             {
                title:"栏目2",
                key:"m2",
                list:[
                  { 
                    title:"sub2",
                    key:"/app"
                  }
                ]
             } 
          ]
        }
        openKeys={["m2"]}
        defaultOpenKeys ={["m1"]}
        defaultSelectedKeys ={["sub2"]}
        onSelect = {(menu)=>{
          console.log(menu)
        }}
      />
      </div>
    );
  }
}

export default connect(state => ({
  testReducer: state.testReducer,
  testAsyncReducer: state.testAsyncReducer
}), dispatch => ({
  testAction: (res) => {dispatch(testAction(res))}
}))(Appp);
