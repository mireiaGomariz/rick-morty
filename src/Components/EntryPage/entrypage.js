
import React , { Component } from 'react';
import Button from 'react-bootstrap/Button';
import './entrypage.css';
import { Redirect } from 'react-router';
import sound1 from './rick-and-morty-theme-song-hd.mp3'
import BgMusic from '@react-element/bg-music'


class EntryPage extends Component {


  render() {
    if (this.props.userNameReady) {
      return <Redirect to={{ pathname: '/home', state: { username: this.props.username} }} />;
    }
    return (

      <div className="gif">
      <div>
       <BgMusic
       src={sound1}
        />

      </div>
        <div className="containerEntryPage">
          <div className="">{this.props.username}</div>
          <div>
              <h3 className="titleEntry">Enter your Name: </h3>
                <form >
                  <input
                    value={this.props.usernameList} onChange={this.props.handleChange}
                    className="entryName"
                    id= "username"
                    type= "text"
                    />
                     <div>
                      <Button type="submit" onClick={this.props.checkUserReady} bsPrefix="entryButton"> Click  me </Button>
                     </div>
                </form>

          </div>
        </div>
      </div>
    )
  }
}

export default EntryPage
