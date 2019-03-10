import React, { Component } from 'react'
import { Col, Row } from 'antd'
import Axios from 'axios'


export default class Shouye extends Component {
  state = {
    BookListShow: [],
    BookList: [],
  }
  componentWillMount = () => {
    const getbookLists=() =>{
      var p = new Promise( (resolve, reject) => {
        Axios.get('https://www.easy-mock.com/mock/5c835e6d1842561ce41f16ea/book')
        .then((res) => {
          console.log(res.data.data)
          this.setState({
            BookList: res.data.data
          })
        })
        .then(()=>{
            resolve(this.state.BookList)
        })
        .catch((error) => {
          console.log(error);
        }
        );
        
      });
      return p;
    }
    getbookLists().then(
      (res)=>{
        const BookListShow = this.renderBooks(res)
        console.log(BookListShow)
        this.setState({
          BookListShow
        })
      }
    )
  }
  //ajax获取数据
  getbookList = () => {
    Axios.get('https://www.easy-mock.com/mock/5c835e6d1842561ce41f16ea/book')
      .then((res) => {
        // console.log(res.data)
        this.setState({
          BookList: res.data
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }
  renderBooks = (data) => {
    return data.map((item) => {
      console.log(item)
      return (
        <Col className="gutter-row" span={6} key={item.book}>
          <div className="book">
            <div className="image">
              <img src={item.img} alt="" />
            </div>
            <div className="title">
              {item.bookname}</div>
            <div className="author">
              {item.author}
          </div>
          </div>
        </Col>
      )
    })
  }





  render() {
    return (
      <div className="shoyeContainer">
        <div className="booksContainer">
          <div className="bookLists">
            <Row >
              {this.state.BookListShow}
              <Col className="gutter-row" span={6}  >
                <div className="more">
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    )
  }
}
