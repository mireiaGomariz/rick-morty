import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class Game1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      character : this.props.characters[0],
      currentIndex: 0,
      points: 0,
      buttonClicked: false,
      answer: ""
    }
  }

  checkIfAliveOrDead = event => {
    if (this.state.character.status === event.target.textContent) {
      this.setState({
        answer: "Correcte",
        buttonClicked: true,
        points: this.state.points + 10,
      })
    }else{
      this.setState({
        answer: "Incorrecte",
        buttonClicked: true,
        points: this.state.points - 5,
      })
    }
  }

  nextButton = event => {
    let newIndex = this.state.currentIndex + 1
    let newCharacter = this.props.characters[newIndex]
    this.setState({
      character: newCharacter,
      currentIndex: newIndex,
      buttonClicked: false,
      answer: ""
    })

  }

  render() {
    let {character} = this.state
    return (
      <div className="row">
        <div className="col-4">
          <h1>{character.name}</h1>
          <img src={character.image} alt={character.name} />
          {this.state.buttonClicked
            ?
            <div>
            <h2>{this.state.answer}</h2>
            <Button
              type="button"
              onClick = {this.nextButton}>
              NEXT</Button>
            </div>
            :
            <div id={["buttons"+character.id]} className="row">
              <div className="col mt-2 mb-4">
                <div>
                  <Button className="ml-2 btn btn-info"
                   type="button"
                   onClick = {this.checkIfAliveOrDead}
                  >Alive</Button>
                  <Button className="ml-2 btn btn-danger"
                   type="button"
                   onClick = {this.checkIfAliveOrDead}
                  >Dead</Button>
                  <Button className="ml-2 btn btn-warning"
                   type="button"
                   onClick = {this.checkIfAliveOrDead}
                  >Unknown</Button>
                </div>
              </div>
            </div>
        }
        <h1 id={["validation"+character.id]} value=""></h1>
        <h1>Points: {this.state.points}</h1>
      </div>
    </div>
    )
  }
}

export default Game1
