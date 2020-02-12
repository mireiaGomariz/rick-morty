import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class Game1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      character : this.props.characters[0],
      currentIndex: 0,
      points: 0,
      buttonClicked: true,
      answer: ""

    }
  }

  render() {
    let {character} = this.state
    return (
      <div className="row">
        <div className="col-4">
          <h1>{character.name}</h1>
          <img src={character.image} alt={character.name} />
          {this.state.buttonClicked &&

          <div id={["buttons"+character.id]} className="row">
            <div className="col mt-2 mb-4">
              <div>
                <Button className="ml-2 btn btn-info"
                 type="button"
                 onClick = {event => {
                   document.getElementById(["buttons"+character.id]).style.display = 'none';
                   if (character.status === "Alive") {
                     // document.getElementById(["validation"+character.id]).innerHTML="Correcte"
                     this.setState({
                       answer: "Correcte",
                       buttonClicked: false
                     })
                   }else{
                     // document.getElementById(["validation"+character.id]).innerHTML="Incorrecte"
                     this.setState({
                       answer: "Incorrecte",
                       buttonClicked: false
                     })
                   }
                 }}
                > Alive </Button>
                <Button className="ml-2 btn btn-danger"
                 type="button"
                 onClick = {event => {
                   document.getElementById(["buttons"+character.id]).style.display = 'none';
                   if (character.status === "Dead") {
                     // document.getElementById(["validation"+character.id]).innerHTML="Correcte"
                     this.setState({
                       answer: "Correcte",
                       buttonClicked: false
                     })
                   }else{
                     // document.getElementById(["validation"+character.id]).innerHTML="Incorrecte"
                     this.setState({
                       answer: "Incorrecte",
                       buttonClicked: false
                     })
                   }

                 }}
                > Dead </Button>
                <Button className="ml-2 btn btn-warning"
                 type="button"
                 onClick = {event => {
                   document.getElementById(["buttons"+character.id]).style.display = 'none';
                   if (character.status === "unknown") {
                     // document.getElementById(["validation"+character.id]).innerHTML="Correcte"
                     this.setState({
                       answer: "Correcte",
                       buttonClicked: false
                     })
                   }else{
                     // document.getElementById(["validation"+character.id]).innerHTML="Incorrecte"
                     this.setState({
                       answer: "Incorrecte",
                       buttonClicked: false
                     })
                   }
                 }}
                > Unknown </Button>
              </div>
            </div>
          </div>
        }
          <h2>{this.state.answer}</h2>

          <h1 id={["validation"+character.id]} value=""></h1>
          <Button
          type="button"
          onClick = {() => {
            let newIndex = this.state.currentIndex + 1
            let newCharacter = this.props.characters[newIndex]
            this.setState({
              character: newCharacter,
              currentIndex: newIndex,
              buttonClicked: true,
              answer: ""
            })
          }}>
          NEXT
          </Button>
          <h1>Points: {this.state.points}</h1>
        </div>
      </div>
    )
  }
}

export default Game1
