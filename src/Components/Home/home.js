import React , { Component } from 'react';
import './home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {username: this.props.location.state.username}
  }
  render() {
    return (
      <div>
        <div className="row justify-content-end ml-3">{this.state.username}</div>
        <div className="homeContainer">
        </div>
      </div>
    )
  }
}

export default Home
