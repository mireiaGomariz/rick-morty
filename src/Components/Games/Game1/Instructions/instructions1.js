import React, { Component } from 'react';
import  './instructions1.css';
import image1 from './fondo-run-dialogo.png';
import image2 from './fondo-run-dialogo2.png';
import {Link} from 'react-router-dom';




class Instructions1 extends Component {
  constructor(props) {
    super(props)

  }

  componentDidMount(){
    let images = [image1, image2];
    setTimeout(function(){
      var url = images;
      var background = document.getElementById('image').style.backgroundImage = 'url('+image2+')';
    },5000);

  }


  render() {
    return (
      <div>
        <div className="image" id="image">
              <h1 className="hinst-1"> {`It's Alive? `}</h1>
        </div>
        <div className="">
          <button href="/game1"><Link to="/game1">Game 1</Link></button>
        </div>
      </div>
    )
  }
}

export default Instructions1
