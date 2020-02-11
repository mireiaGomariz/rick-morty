import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class Game1 extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div className="row">
        {this.props.characters.map( function(character, i){
          return (
            <div key={["key"+i]} className="col-4">
              <h1>{character.name}</h1>
              <img src={character.image} alt={character.name} />
              <div id={["buttons"+character.id]} className="row">
                <div className="col mt-2 mb-4">
                  <Button className="ml-2 btn btn-info"
                   type="button"
                   onClick = {event => {
                     document.getElementById(["buttons"+character.id]).style.display = 'none';
                     if (character.status === "Alive") {
                       document.getElementById(["validation"+character.id]).innerHTML="Correcte"
                     }else{
                       document.getElementById(["validation"+character.id]).innerHTML="Incorrecte"
                     }
                   }}
                  > Alive </Button>
                  <Button className="ml-2 btn btn-danger"
                   type="button"
                   onClick = {event => {
                     document.getElementById(["buttons"+character.id]).style.display = 'none';
                     if (character.status === "Dead") {
                       document.getElementById(["validation"+character.id]).innerHTML="Correcte"
                     }else{
                       document.getElementById(["validation"+character.id]).innerHTML="Incorrecte"
                     }

                   }}
                  > Dead </Button>
                  <Button className="ml-2 btn btn-warning"
                   type="button"
                   onClick = {event => {
                     document.getElementById(["buttons"+character.id]).style.display = 'none';
                     if (character.status === "unknown") {
                       document.getElementById(["validation"+character.id]).innerHTML="Correcte"
                     }else{
                       document.getElementById(["validation"+character.id]).innerHTML="Incorrecte"
                     }
                   }}
                  > Unknown </Button>
                </div>
              </div>
              <h1 id={["validation"+character.id]} value=""></h1>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Game1
