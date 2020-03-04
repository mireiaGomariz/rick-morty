import React, { Component } from 'react';
import './instructions1.css';
import image1 from './dialog1_2.png';
import image2 from './dialog2_4.png';
import { Link } from 'react-router-dom';
class Instructions1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      intervalId: '',
      showButton: false,
    }
  }
  componentDidMount() {
    let self = this
    setTimeout(function () {
      document.getElementById('image').style.backgroundImage = 'url(' + image1 + ')'
      document.getElementById('instructions1').className = 'instructions1'
      setTimeout(function () {
        document.getElementById('image').style.backgroundImage = 'url(' + image2 + ')'
        document.getElementById('instructions2').className = 'instructions2'
        self.setState({ showButton: true})
      }, 6000);
    }, 2000);
  }
  render() {
    return (

      <div className="instructions" id="instructions1">
        <div id="instructions2">
          <div className="imageInstru1" id="image">
          <div>
            <h1 className="hinst-1"> Get Schwifty</h1>
          </div>
          <div className="thisDiv">
          {this.state.showButton &&
            <button className="buttonGame1" href="/game1">
            <Link to="/game1"
            style={{ textDecoration: 'none', color: 'black'}}
            >Start</Link></button>
          }
          </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Instructions1
