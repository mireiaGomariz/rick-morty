
import React , { Component } from 'react';
import Button from 'react-bootstrap/Button';
import './entrypage.css';
import Sound from 'react-sound';
import { Redirect } from 'react-router';
import sound1 from './show-me-what-you-got.mp3'


class EntryPage extends Component {

  render() {
    if (this.props.userNameReady) {
      return <Redirect to={{ pathname: '/home', state: { username: this.props.username} }} />;
    }
    return (

      <div className="gif">
      <div>
        <Sound
        url="/rick-and-morty-theme-song-hd.mp3"
        playStatus={Sound.status.PLAYING}
        playFromPosition={500 /* in milliseconds */}
        autoLoad
        />
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
                  <Button onClick={this.props.checkUserReady} bsPrefix="entryButton"> Clickme </Button>
                </form>

          </div>
        </div>
      </div>
    )
  }
}

export default EntryPage
