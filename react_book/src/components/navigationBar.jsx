import React, { Component } from 'react'
import { Menu } from 'antd';
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink } from 'react-router-dom';
import Shouye from './shouye'
import Xianxia from './xianxia'
import Xuanhuan from './xuanhuan'

export default class NavigationBar extends Component {
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
            <Router>
                <div>
                    <Menu
                        onClick={this.handleClick}
                        selectedKeys={[this.state.current]}
                        mode="horizontal"
                        selectable="true"
                    >
                        <Menu.Item key="shoye">
                            <NavLink to="/shouye" className="nav-link">
                                首页
                        </NavLink>
                        </Menu.Item>
                        <Menu.Item key="xuanhuan" >
                            <NavLink to="/xuanhuan" className="nav-link">
                                玄幻
                        </NavLink>

                        </Menu.Item>
                        <Menu.Item key="xianxia" >
                            <NavLink to="/xianxia" className="nav-link">
                                仙侠
                        </NavLink>
                        </Menu.Item>
                        <Menu.Item key="dushi" >
                            <NavLink to="/shouye" className="nav-link">
                                都市
                        </NavLink>
                        </Menu.Item>
                        <Menu.Item key="lishi" >
                            <NavLink to="/shouye" className="nav-link">
                                历史
                        </NavLink>
                        </Menu.Item>
                        <Menu.Item key="wangyou" >
                            <NavLink to="/shouye" className="nav-link">
                                网游
                        </NavLink>
                        </Menu.Item>
                        <Menu.Item key="kehuan" >
                            <NavLink to="/shouye" className="nav-link">
                                科幻
                        </NavLink>
                        </Menu.Item>
                        <Menu.Item key="kongbu" >
                            <NavLink to="/shouye" className="nav-link">
                                恐怖
                        </NavLink>
                        </Menu.Item>
                        <Menu.Item key="yanqing" >
                            <NavLink to="/shouye" className="nav-link">
                                言情
                        </NavLink>
                        </Menu.Item>
                        
                        <Menu.Item key="paihang" >
                            <NavLink to="/shouye" className="nav-link">
                                排行
                        </NavLink>
                        </Menu.Item>

                    </Menu>
                    <div className="music-view">
                        <Switch>
                            <Route path="/shouye" component={Shouye} />
                            <Route path="/xuanhuan" component={Xuanhuan} />
                            <Route path="/xianxia" component={Xianxia} />
                            <Redirect from="/" to="/shouye" />
                        </Switch>
                    </div>
                </div>
            </Router>

        )
    }
}
