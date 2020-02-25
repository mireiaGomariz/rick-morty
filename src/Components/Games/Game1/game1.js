import React, { Component } from 'react';
import Jerry from './jerry.png';
import Morty from './morty.png';
import Rick from './rick.png';
import Summer from './summer.png';
import Beth from './beth.png';

var imagesPoints= [Jerry, Morty, Summer, Rick];


function getFinalResultOfCharacter(points){
  if (points < 5) {
    return (
      <div>
        <h1> You are Jerry! </h1>
        <img src={imagesPoints[0]}/>
        <h3>"Life is effort and i'll stop when I die!"</h3>

      </div>
    )
  } else if (points < 8) {
    return (
      <div>
        <h1> You are Morty! </h1>
        <img src={imagesPoints[1]}/>
        <h3>"Nobody exists on propouse. nobody belongs anywhere. everybody's gonna die. Come watch tv?"</h3>
      </div>
    )
  }else if (points < 12) {
    return (
      <div>
        <h1> You are Beth! </h1>
        <img src={imagesPoints[2]}/>
        <h3>"let's save the measuring for when our dicks are out it's time to save a life!"</h3>
      </div>
    )
  }else if (points < 18) {
    return (
      <div>
        <h1> You are Summer! </h1>
        <img src={imagesPoints[2]}/>
        <h3>"All I have are pictures are of me and my friends from school. What? What teenage girl has pictures of her family? It's not like we're Mormon or dying"</h3>

      </div>
    )
  }else if (points > 18) {
    return (
      <div>
        <h1> Congratulations you are Rick! </h1>
        <img src={imagesPoints[3]}/>
        <h3>"To live is to risk it all; otherwise you're just an inert chunk of randomly assembled molecules drifting wherever the universe blows you..."</h3>
      </div>
    )
  }

}

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
      {!this.state.isFinish
        ?
        <div>
        {getFinalResultOfCharacter(this.state.points)}

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
