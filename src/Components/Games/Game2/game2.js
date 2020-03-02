import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import './game2.css'
import Jerry from './jerry1.png';
import Morty from './morty.png';
import Rick from './rick.png';
import Summer from './summer.png';
import Beth from './beth.png';
import { Link } from 'react-router-dom';

// import BgMusic from '@react-element/bg-music'
// import sound2 from './show-me-what-you-got.mp3'





var imagesPoints= [Jerry, Morty, Summer, Rick, Beth];


function getFinalResultOfCharacter(points){
  if (points < 2) {
    return (
      <div>
        <h1 className="resultCharacterTitle"> You are Jerry! </h1>
        <img src={imagesPoints[0]} alt="jerry smith" className="resultsImg" />
        <h3 className="quoteCharacter">"Life is effort and i'll stop when I die!"</h3>

      </div>
    )
  } else if (points < 5) {
    return (
      <div>
        <h1 className="resultCharacterTitle"> You are Morty! </h1>
        <img src={imagesPoints[1]} alt="Morty" className="resultsImg"/>
        <h3 className="quoteCharacter">"Nobody exists on propouse. nobody belongs anywhere. everybody's gonna die. Come watch tv?"</h3>
      </div>
    )
  }else if (points < 7) {
    return (
      <div>
        <h1 className="resultCharacterTitle"> You are Beth! </h1>
        <img  src={imagesPoints[4]} alt="Beth" className="resultsImg"/>
        <h3 className="quoteCharacter">"let's save the measuring for when our dicks are out it's time to save a life!"</h3>
      </div>
    )
  }else if (points < 9) {
    return (
      <div>
        <h1 className="resultCharacterTitle"> You are Summer! </h1>
        <img  src={imagesPoints[2]} alt="Summer" className="resultsImg"/>
        <h3 className="quoteCharacter">"All I have are pictures are of me and my friends from school. What? What teenage girl has pictures of her family? It's not like we're Mormon or dying"</h3>

      </div>
    )
  }else if (points > 9) {
    return (
      <div>
        <h1 className="resultCharacterTitle"> Congratulations you are Rick! </h1>
        <img src={imagesPoints[3]} alt="Rick"  className="resultsImg" />
        <h3 className="quoteCharacter">"To live is to risk it all; otherwise you're just an inert chunk of randomly assembled molecules drifting wherever the universe blows you..."</h3>
      </div>
    )
  }

}
class Game2 extends Component {

  constructor(props) {
    super(props)

    this.state = {
      characterOne : [],
      characterTwo : [],
      currentIndex: 0,
      imageClicked: false,
      randomName: 1,
      randomNumCharOne: Math.floor(Math.random() * 350) + 1,
      randomNumCharTwo: Math.floor(Math.random() * 350) + 1,
      points: 0,
      answer:"",
      attemptsCounter: 10,
      play: false,

    };

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
            randomNumCharOne: Math.floor(Math.random() * 350) + 1,
            randomNumCharTwo: Math.floor(Math.random() * 350) + 1,
          })
      });
  }

  checkIfCorrect = event => {

    let characterName = document.getElementById('select-character');
    if (event.target.alt === characterName.textContent) {

      this.setState({
        answer: "Correcte",
        imageClicked: true,
        points: this.state.points + 1,
        attemptsCounter: this.state.attemptsCounter -1,
      })
    }else{
      this.setState({
        answer: "Incorrecte",
        imageClicked: true,
        attemptsCounter: this.state.attemptsCounter -1,
      })
    }
    this.componentDidMount();
  }

  tryAgain = event => {
    window.location.reload();
  }

  // pauseAudio = () => {
  //   const audioEl = this.sound2.current;
  //   if (audioEl) {
  //     audioEl.pause();
  //     audioEl.paused || this.updateState({ play: false });
  //   }
  // }

  render() {

    return (

      <div className="game2Content">
        {this.state.attemptsCounter === 0
          ?
          <div>

          <h3 className="usernameText2"> {this.props.username}</h3>
            {getFinalResultOfCharacter(this.state.points)}
            <div className="textFinish">
              <h1>Points: {this.state.points} </h1>
            </div>
            <Button bsPrefix="buttonTryAgainG2"
            type="button"
            onClick = {this.tryAgain}>
            Try Again</Button>
            <button href="/home" className="backHomeButton"><Link to="/home" style={{ textDecoration: 'none', color: 'black'  }}>Back to Home</Link></button>
          </div>
          :
          <div className="game2Content">
            <div>

            </div>
            <h2 className="caractersText"> Characters attempts : {this.state.attemptsCounter}</h2>
            {this.state.randomName === 1
            ?
            <h1 id="select-character" className="caractersText22">{this.state.characterOne.name}</h1>
            :
            <h1 id="select-character" className="caractersText22">{this.state.characterTwo.name}</h1>
            }
            <div className="row mt-3 justify-content-around">
              <div className="">
                <img className="imagesGame2"src={this.state.characterOne.image} alt={this.state.characterOne.name} onClick = { this.checkIfCorrect}/>

              </div>
              <div className="imagesGame2">
                <img src={this.state.characterTwo.image} alt={this.state.characterTwo.name} onClick = { this.checkIfCorrect} />

              </div>
            </div>
            <div className="row">
              <div className="col">
                <h1 className="point-text2">Points: {this.state.points} </h1>
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default Game2
