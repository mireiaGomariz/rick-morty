
import React , { Component } from 'react';
import './entrypage.css';

class EntryPage extends Component {

  constructor(props) {
    super(props);
    this.state = { username: "" };

  }

    render() {
    return (

      <div className="entryPage">
        <label>Enter your Name: </label>

        <input
          id= "username"
          type= "text"
          onChange = {event => {
            var input = event.target.value;
            this.setState({ username : input })
          }
        }

        />
        <h1>{this.state.username}</h1>

      </div>
    )


  }
}

export default EntryPage
