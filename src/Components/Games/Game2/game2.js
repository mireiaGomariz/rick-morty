import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';


class Game2 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      characterOne : [],
      characterTwo : [],
      currentIndex: 0,
      buttonClicked: false,
      randomName: 1,
      randomNumCharOne: Math.floor(Math.random() * 350) + 1,
      randomNumCharTwo: Math.floor(Math.random() * 350) + 1
    }
  }


  componentDidMount() {
    fetch(`https://rickandmortyapi.com/api/character/${this.state.randomNumCharOne},${this.state.randomNumCharTwo}`)
      .then(res => res.json())
      .then(json => {
          this.setState ({
            isLoaded: true,
            characterOne: json[0],
            characterTwo: json[1],
            randomName: Math.floor(Math.random() * 2) + 1,
          })
      });
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
    return (
      <div className="container">
        {this.state.randomName == 1
        ?
        <h1 className="mt-5">{this.state.characterOne.name}</h1>
        :
        <h1 className="mt-5">{this.state.characterTwo.name}</h1>
        }
        <div className="row mt-3 justify-content-around">
          <div className="col-md-6 mt-4">
            <img src={this.state.characterOne.image} alt={this.state.characterOne.name} />
          </div>
          <div className="col-md-6 mt-4">
            <img src={this.state.characterTwo.image} alt={this.state.characterTwo.name} />
          </div>
        </div>
      </div>
    )


  }
}

export default Game2
