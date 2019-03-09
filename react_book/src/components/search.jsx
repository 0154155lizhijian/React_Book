import React, { Component } from 'react'
import { Input } from 'antd'


export default class Search extends Component {
  render() {
    const Search = Input.Search;
    return (
        <div className="search">
        <Search
          placeholder="搜索您要的图书"
          enterButton="搜素"
          size="large"
          onSearch={value => console.log(value)}
        />
      </div>
    )
  }
}
