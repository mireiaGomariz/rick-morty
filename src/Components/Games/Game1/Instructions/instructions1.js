import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';


class Instructions1 extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div>
        <h1> Hello </h1>
        <Button href="/game1"> Game 1</Button>
      </div>
    )
  }
}

export default Instructions1
