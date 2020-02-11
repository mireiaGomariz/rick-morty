import React, { Component } from 'react';

class Game1 extends Component {
  constructor(props) {
    super(props)
    this.state = {characters: this.props.characters}
  }

  render() {
    return (
      <div>
        <h1>{this.state.characters[0].name}</h1>
        <img src={this.state.characters[0].image} alt={this.state.characters[0].name} />
      </div>
    )
  }
}

export default Game1
