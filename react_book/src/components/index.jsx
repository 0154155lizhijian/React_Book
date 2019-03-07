import React, { Component } from 'react'
import  NavigationBar from './navigationBar'
import './index.css'
import Search from './search'


class Index extends Component {
  render() {
    
    
    return (
      <div className="container">
        <Search></Search>
        <NavigationBar></NavigationBar>
      </div>

    )
  }
}

export default Index

