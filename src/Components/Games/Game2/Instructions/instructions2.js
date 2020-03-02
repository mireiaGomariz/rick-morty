import React, { Component } from 'react';
import './instructions2.css';
import {Link} from 'react-router-dom';
import image3 from './diseño_fonfo_dialogo_1.png';
import image4 from './diseño_fonfo_dialogo_2.png';



class Instructions2 extends Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    setTimeout(function () {
      document.getElementById('image').style.backgroundImage = 'url(' + image3 + ')'
      document.getElementById('instructions1').className = 'instructions1'
      setTimeout(function () {
        document.getElementById('image').style.backgroundImage = 'url(' + image4 + ')'
        document.getElementById('instructions2').className = 'instructions2'
      }, 3000);
    }, 3000);
  }

  render() {
    return (


      <div className="instructions" id="instructions1">
        <div id="instructions2">
          <div className="imageInstru2" id="image">
            <h1 className="hinst-1"> Get Schwifty </h1>
          </div>
          <div className="">
            <button className="buttonGame1" href="/game2">
            <Link to="/game2"
              // username = {props.username}

            >Start</Link></button>
          </div>
        </div>
      </div>
    )
  }
}

export default Instructions2
