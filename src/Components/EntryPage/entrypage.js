
import React , { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './entrypage.css';
import { Redirect } from 'react-router';

//app js "",
//app js metode setState cambiar valor

class EntryPage extends Component {

  render() {
    console.log(this.props);
    if (this.props.username != "") {
      return <Redirect to={{ pathname: '/home', state: { username: this.props.username} }} />;
    }
    return (
      <div className="gif">
        <div className="container">
          <div className="row justify-content-end ml-3">{this.props.username}</div>
          <div className="row d-flex justify-content-center cardEntry">
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Enter your Name: </Card.Title>
                <input
                  value={this.props.username} onChange={this.props.handleChange}
                  id= "username"
                  type= "text"
                />
                <Button className="btn btn-danger mt-3"
                type="button"
                > Clickme </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    )
  }
}

export default EntryPage
