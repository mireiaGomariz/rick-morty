
import React , { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './entrypage.css';
import { Redirect } from 'react-router';

class EntryPage extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "" };

  }
  render() {
    if (this.state.username != "") {
      return <Redirect to={{ pathname: '/home', state: { username: this.state.username} }} />;
    }
    return (
      <div className="container">
        <div className="row justify-content-end ml-3">{this.state.username}</div>
        <div className="row d-flex justify-content-center cardEntry">
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Enter your Name: </Card.Title>
              <input
                id= "username"
                type= "text"
              />
              <Button className="btn btn-danger mt-3"
              type= "button"
               onClick = {event => {
                 var input = document.getElementById("username").value
                 this.setState({ username : input })
               }}
              > Clickme </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    )
  }
}

export default EntryPage
