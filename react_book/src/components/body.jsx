import React, { Component } from 'react'
import Shouye from '../page/shouye'
import Xianxia from '../page/xianxia'
import Xuanhuan from '../page/xuanhuan'
import Dushi from '../page/dushi'
import Junshi from '../page/junshi'
import Kehuan from '../page/kehuan'
import Liebiao from '../page/liebiao'
import Qihuan from '../page/qihuan'
import Tiyu from '../page/tiyu'
import Youxi from '../page/youxi'


import { BrowserRouter as Router, Route, Switch, Redirect, NavLink } from 'react-router-dom';


export default class Body extends Component {
    render() {
        return (

            <div className="bookContainer">
                    <Switch>
                        <Route path="/shouye"  component={Shouye} />
                        <Route path="/xuanhuan" component={Xuanhuan} />
                        <Route path="/xianxia" component={Xianxia} />
                        <Route path="/dushi" component={Dushi} />
                        <Route path="/junshi" component={Junshi} />
                        <Route path="/kehuan" component={Kehuan} />
                        <Route path="/liebiao" component={Liebiao} />
                        <Route path="/qihuan" component={Qihuan} />
                        <Route path="/tiyu" component={Tiyu} />
                        <Route path="/youxi" component={Youxi} />
                        <Redirect from="/" to="/shouye" />
                    </Switch>
            </div>

        )
    }
}
