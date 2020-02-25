import React , { Component } from 'react';
import Button from 'react-bootstrap/Button';
import './home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {username: this.props.location.state.username}
  }
  render() {
    return (
    <div className="home-menu">
      <div className="container">
            <h3 className="homewelcome"> WELCOME </h3>
            <h1 className="namewel">{this.state.username}</h1>
      </div>
        <div className="homeContainer">
          <a href="/instructions1">
            <img className="grilla1" src="https://media.giphy.com/media/3o7aD2d7hy9ktXNDP2/giphy.gif" alt=""></img>
          </a>
          <a href="/instructions2">
          <img className="grilla2" src="https://media.giphy.com/media/3o7aD2d7hy9ktXNDP2/giphy.gif" alt=""></img>
          </a>
              <Button  bsPrefix="game1" href="/instructions1"> Game 1</Button>
              <Button  bsPrefix="game2" href="/instructions2"> Game 2</Button>
        </div>
      </div>
    )
  }
}

export default Home
