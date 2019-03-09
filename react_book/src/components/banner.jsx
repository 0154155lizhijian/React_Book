import React, { Component } from 'react'
import { Carousel } from 'antd';

export default class Banner extends Component {
  render() {
    return (
          <Carousel autoplay>
            <div>  <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4245492795,2218352251&fm=27&gp=0.jpg" alt=""/> </div>
            <div>  <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2616724818,3496432534&fm=27&gp=0.jpg" alt=""/> </div>
            <div>  <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2616724818,3496432534&fm=27&gp=0.jpg" alt=""/> </div>
          </Carousel>
    )
  }
}
