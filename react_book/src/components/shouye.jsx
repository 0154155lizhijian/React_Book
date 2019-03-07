import React, { Component } from 'react'
import { Menu } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class Shouye extends Component {
  state = {
    current: 'shoye',
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <div className="shoyeContainer">
        shouye
      </div>
    )
  }
}
