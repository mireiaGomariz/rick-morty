import React, { Component } from 'react';
import './instructions1.css';
import image1 from './fondo-run-dialogo.png';
import image2 from './fondo-run-dialogo2.png';
import { Link } from 'react-router-dom';
class Instructions1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      intervalId: ''
    }
  }
  componentDidMount() {
    setTimeout(function () {
      document.getElementById('image').style.backgroundImage = 'url(' + image1 + ')'
      document.getElementById('instructions1').className = 'instructions1'
      setTimeout(function () {
        document.getElementById('image').style.backgroundImage = 'url(' + image2 + ')'
        document.getElementById('instructions2').className = 'instructions2'
      }, 3000);
    }, 3000);
  }
  render() {
    return (
      <div className="instructions" id="instructions1">
        <div id="instructions2">
          <div className="imageInstru2" id="image">
            <h1 className="hinst-1"> {`Is it Alive? `}</h1>
          </div>
          <div className="">
            <button className="buttonGame1" href="/game1">
            <Link to="/game1"
            >Start</Link></button>
          </div>
        </div>
      </div>
    )
  }
}
export default Instructions1
