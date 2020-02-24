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
    <div>
    
      <div className="container">

            <h3 className="homewelcome"> WELCOME </h3>
            <h1 className="namewel">{this.state.username}</h1>

      </div>
        <div className="homeContainer">
              <Button bsPrefix="game1" href="/instructions1"> Game 1</Button>
              <Button bsPrefix="game2" href="/instructions2"> Game 2</Button>
        </div>
      </div>
    )
  }
}

export default Home
