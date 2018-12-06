import React, { Component } from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
// isHas 是否有子菜单 key 路由路径
let routerConfig  = [{
  isHas: false,
  title: '菜单一',
  key: '1'
}, {
  isHas: true,
  title: '菜单二',
  key: '2',
  children: [{
    title: '菜单二-一',
    key: '2-1'
  }]
}]
class MenuLeft extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedKey: '1'
    }
  }
  componentWillMount() {
    
  }
  handleClick = (ele) => {
    this.setState({
      selectedKey: ele.key
    })
  }
  render() {
    let { selectedKey } = this.state
    return (
      <div className="wrap-menu">
        <Menu
          style={{ width: 256 }}
          onClick={this.handleClick}
          // defaultOpenKeys={'1'}
          selectedKeys={[selectedKey]}
          theme="dark"
          mode="inline"
        >
          {
            routerConfig.map(item => {
              if (item.isHas) {
                return <SubMenu key={ item.key } title={ item.title }>
                  {
                    item.children.map(items => {
                      return <Menu.Item key={ items.key }>{ items.title }</Menu.Item>
                    })
                  }
                </SubMenu>
              } else {
                return <Menu.Item key={ item.key }>{ item.title }</Menu.Item>
              }
            })
          }
        </Menu>
      </div>
    );
  }
}

export default MenuLeft
