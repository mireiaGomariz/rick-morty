import React, { Component } from 'react';


class Game1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      character: this.props.characters[0],
      currentIndex: 0,
      points: 0,
      buttonClicked: false,
      answer: "",
      isFinish: false,
    }
  }

  checkIfAliveOrDead = event => {

    if ((this.props.characters.length - 1) === this.state.currentIndex) {
      this.setState({
        isFinish: true,
      })
    } else {
      if (this.state.character.status === event.target.textContent) {
        this.setState({
          answer: "Correcte",
          buttonClicked: true,
          points: this.state.points + 1,
        })
      }else{
        this.setState({
          answer: "Incorrecte",
          buttonClicked: true,
        })
      }
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

  tryAgain = event => {
    window.location.reload();
  }

  render() {
    let {character} = this.state
    return (
      <div>
      {this.state.isFinish
        ?
        <div>
          <h1>Points: {this.state.points} / {this.props.characters.length}</h1>
          <button
          type="button"
          onClick = {this.tryAgain}
          >Try Again</button>
        </div>
        :
        <div className="row">
          <div className="col">
            <h3>{this.state.currentIndex + 1}</h3>
            <h1>{character.name}</h1>
            <img src={character.image} alt={character.name} />
            {this.state.buttonClicked
              ?
              <div>
              <h2>{this.state.answer}</h2>
              <button
                type="button"
                onClick = {this.nextButton}>
                NEXT</button>
              </div>
              :
              <div id={["buttons"+character.id]} className="row">
                <div className="col mt-2 mb-4">
                  <div>
                    <button className="ml-2 btn"
                     type="button"
                     onClick = {this.checkIfAliveOrDead}
                    >Alive</button>
                    <button className="ml-2 btn"
                     type="button"
                     onClick = {this.checkIfAliveOrDead}
                    >Dead</button>
                    <button className="ml-2 btn "
                     type="button"
                     onClick = {this.checkIfAliveOrDead}
                    >Unknown</button>
                  </div>
                </div>
              </div>
          }
          <h1 id={["validation"+character.id]} value=""></h1>
          <h1>Points: {this.state.points} / {this.props.characters.length}</h1>
        </div>
      </div>
      }
      </div>

    )
  }
}

export default Game1
