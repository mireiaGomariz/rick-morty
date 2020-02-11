
import React , { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './entrypage.css';


class EntryPage extends Component {

  constructor(props) {
    super(props);
    this.state = { username: "" };

  }
  render() {
    return (
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
          <Card.Text>{this.state.username}</Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default EntryPage
