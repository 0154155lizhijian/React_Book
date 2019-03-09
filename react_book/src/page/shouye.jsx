import React, { Component } from 'react'




export default class Shouye extends Component {
  componentWillMount = () => {
    const BookList = this.renderBooks([1, 2, 3, 4, 5,6])
    console.log(BookList)
    this.setState({
      BookList
    })
  }
  //渲染图书列表
  renderBooks = (data) => {
    return data.map((item) => {
      return (
        <div className="book" key={item}>
          <div className="image">
            <img src="http://www.xbiquge.la/files/article/image/10/10489/10489s.jpg" alt="" />
          </div>
          <div className="title">
            妖神记</div>
          <div className="author">
            天蚕土豆
  </div>
        </div>
      )
    })
  }


  render() {
    return (
      <div className="shoyeContainer">
        <div className="booksContainer">
          <div className="bookLists">
            {this.state.BookList}
          </div>
        </div>
      </div>
    )
  }
}
