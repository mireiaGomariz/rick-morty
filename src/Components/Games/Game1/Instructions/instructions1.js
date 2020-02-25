import React, { Component } from 'react';
import  './instructions1.css';
import {Link} from 'react-router-dom';




class Instructions1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showFirst: true
    }

  }

  componentDidMount(){
    let self = this
    setTimeout(function(){
      // var url = images;
      // var background = document.getElementById('image').style.backgroundImage = 'url('+image2+')'
      // var animation = document.getElementById('instructions1').className = 'instructions2'
      self.setState({showFirst: false})

    },5000);
  }


  render() {
    return (
      <div>
      {this.state.showFirst
        ?
        <div className="instructions1" id="instructions1">
          <div className="image" id="image">
                <h1 className="hinst-1"> {`It's Alive? `}</h1>
          </div>
          <div className="">
            <button href="/game1"><Link to="/game1">Game 1</Link></button>
          </div>
        </div>
        :
        <div className="instructions2" id="instructions2">
          <div className="image2" id="image">
                <h1 className="hinst-1"> {`It's Alive? `}</h1>
          </div>
          <div className="">
            <button href="/game1"><Link to="/game1">Game 1</Link></button>
          </div>
        </div>

      }
      </div>

    )
  }
}

export default Instructions1
