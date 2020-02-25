
import React , { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './entrypage.css';
import { Redirect } from 'react-router';

//app js "",
//app js metode setState cambiar valor

class EntryPage extends Component {

  render() {
    if (this.props.userNameReady) {
      return <Redirect to={{ pathname: '/home', state: { username: this.props.username} }} />;
    }
    return (

      <div className="gif">
      <div>
        <audio ref="audio_tag" src="./rick-and-morty-theme-song-hd.mp3" autoPlay />
      </div>
        <div className="container">
          <div className="row justify-content-end ml-3">{this.props.username}</div>
          <div className="row d-flex justify-content-center cardEntry">

                <h3>Enter your Name: </h3>
                <form>
                  <input
                    value={this.props.usernameList} onChange={this.props.handleChange}
                    id= "username"
                    type= "text"
                  />
                  <Button onClick={this.props.test} bsPrefix="entryButton"> Clickme </Button>
                </form>

          </div>
        </div>
      </div>
    )
  }
}

export default EntryPage
