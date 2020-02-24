import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import  './instructions1.css';
import image1 from './fondo-run-dialogo.png';
import image2 from './fondo-run-dialogo2.png';



class Instructions1 extends Component {
  constructor(props) {
    super(props)

  }

  componentDidMount(){
    let images = [image1, image2];
    setTimeout(function(){
      var url = images;
      document.getElementById('image').style.backgroundImage = 'url('+image2+')';
    },5000);

  }


  render() {
    return (
      <div>
        <div className="image" id="image">
              <h1 className="hinst-1"> Hello </h1>
            <div className="">
              <Button href="/game1"type="button">Game1</Button>
            </div>
        </div>
      </div>
    )
  }
}

export default Instructions1
