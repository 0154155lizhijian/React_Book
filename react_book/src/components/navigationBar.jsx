import React, { Component } from 'react'
import { Menu } from 'antd';
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink } from 'react-router-dom';
import Body from './body'
import MenuList from '../config/menuList'

export default class NavigationBar extends Component {
    state = {
        current: 'shoye',
        MenuLists:[],

    }
    componentWillMount = () => {
        const MenuLists = this.renderMenu(MenuList)
        this.setState({
            MenuLists
        })
    }

    //列表渲染
    renderMenu = (data) => {
        return data.map((item) => {
            return (
                <Menu.Item key={item.key}>
                    <NavLink to={item.key} className="nav-link">
                        {item.title}
                    </NavLink>
                </Menu.Item>
            )
        })
    }

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }
    render() {
        return (
            <Router>
                <div className="navigationContainer">
                    <Menu
                        onClick={this.handleClick}
                        selectedKeys={[this.state.current]}
                        mode="horizontal"
                        selectable="true"
                    >
                        {this.state.MenuLists}
                    </Menu>
                    <Body></Body>
                </div>
            </Router>

        )
    }
}
