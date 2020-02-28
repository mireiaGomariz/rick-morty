import React , { Component } from 'react';
import './home.css';
import { Link } from 'react-router-dom'

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
          <Link to="/instructions1">
            <img className="grilla1" src="https://media.giphy.com/media/3o7aD2d7hy9ktXNDP2/giphy.gif" alt=""></img>
          </Link>
          <Link to="/instructions2">
            <img className="grilla2" src="https://media.giphy.com/media/3o7aD2d7hy9ktXNDP2/giphy.gif" alt=""></img>
          </Link>
        </div>
      </div>
    )
  }
}

export default Home
