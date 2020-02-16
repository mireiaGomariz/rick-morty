import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';


class Game2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      character : this.props.characters[0],
      currentIndex: 0,
      buttonClicked: false,
    }
  }
  nextButton = event => {
    let newIndex = this.state.currentIndex + 1
    let newCharacter = this.props.characters[newIndex]
    this.setState({
      character: newCharacter,
      currentIndex: newIndex,
      buttonClicked: false,
    })

  }


  render() {
    let {character} = this.state
    return (
      <div>
        <h1>{character.name}</h1>
        <img src={character.image} alt={character.name} />
        <Button
          type="button"
          onClick = {this.nextButton}>
          NEXT</Button>
      </div>
    )


  }
}

export default Game2
