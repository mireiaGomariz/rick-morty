import React , { Component } from 'react';
import Card from 'react-bootstrap/Card';
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
        <Card className="row d-flex justify-content-end" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title><h3 className="homewelcome"> WELCOME </h3></Card.Title>
            <Card.Text><h1 className="namewel">{this.state.username}</h1></Card.Text>
          </Card.Body>
        </Card>
      </div>
        <div className="homeContainer">
          <Card>
            <Card.Body>
              <Card.Title> GAME #1 </Card.Title>
              <Button href="/instructions1"> Game 1</Button>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Card.Title> GAME #2 </Card.Title>
              <Button href="/instructions2"> Game 2</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    )
  }
}

export default Home
