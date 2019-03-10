import React, { Component } from 'react'
import NavigationBar from './navigationBar'
import './index.css'
import Search from './search'
import Banner from './banner'
import {Col,Row} from 'antd'



class Index extends Component {
  render() {
    return (
     
      <div className="container">
        <Banner></Banner>
        <Search></Search>
        <NavigationBar></NavigationBar>
 
      </div>

      

    )
  }
}

export default Index

