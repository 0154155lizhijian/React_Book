import React, { Component } from 'react'

export default class Index extends Component {
  render() {
    const store = this.props.store
    const num = store.getState()
    return (
      <div>
        <h1>有{num}个</h1>
      </div>
    )
  }
}
