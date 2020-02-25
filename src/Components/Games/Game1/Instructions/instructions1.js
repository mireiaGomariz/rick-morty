import React, { Component } from 'react';
import  './instructions1.css';
import image1 from './fondo-run-dialogo.png';
import image2 from './fondo-run-dialogo2.png';
import {Link} from 'react-router-dom';
import image3 from './fondo-run-.png';



class Instructions1 extends Component {
  constructor(props) {
    super(props)
    this.state={
      intervalId: ''
    }

  }

  componentDidMount(){
    let index = 0
    let images = [image3, image1, image2];
    let self = this
    let intervalId = setInterval(function(){

      // images[index++ % images.length]
      console.log(document.getElementById('image'));
        document.getElementById('image').style.backgroundImage = 'url('+images[index]+')'
        index = index + 1
      if (index===3) {
        stopCountDown()
      }
      // var url = images;
      // var animation = document.getElementById('instructions1').className = 'instructions2'
    }, 2000);

    const stopCountDown = () => {
      clearInterval(intervalId); // Not working
    }

  }




  render() {
    return (


        <div className="instructions1" id="instructions1">
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
