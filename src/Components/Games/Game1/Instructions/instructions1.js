import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './instructions1.css';


class Instructions1 extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div>
        <div className="image">
              <h1 className="hinst-1"> Hello </h1>
            <div className="">
              <div className="dia">
                <div className="dialogo1"></div>
                <div className="dialogo2"></div>
                <div className="dialogo2-1"></div>
                </div>
                <button type="button"><Link to="/game1">Game</Link></button>
            </div>
          
        </div>
      </div>
    )
  }
}

export default Instructions1
