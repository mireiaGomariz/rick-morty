import React, { Component } from 'react';
import './instructions2.css';
import {Link} from 'react-router-dom';



class Instructions2 extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div>
        <div className="fondo-instr-diseño">
          <h1 className="hello-g2"> Get Schwifty </h1>
          <button className="buttonGame2" href="/game2"><Link to="/game2">Start</Link></button>
        </div>
      </div>
    )
  }
}

export default Instructions2
