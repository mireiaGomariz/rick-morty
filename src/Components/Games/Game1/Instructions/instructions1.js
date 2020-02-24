import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import './instructions1.css';



class Instructions1 extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div>
        <h1> Hello </h1>
        <Button bsPrefix="button-colored" href="/game1"> Game 1</Button>
      </div>
    )
  }
}

export default Instructions1
