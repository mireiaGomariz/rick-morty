
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
    if (this.props.userNameReady) {
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
                <form>
                  <input
                    value={this.props.usernameList} onChange={this.props.handleChange}
                    id= "username"
                    type= "text"
                  />
                  <Button onClick={this.props.test} className="btn btn-danger mt-3"> Clickme </Button>
                </form>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    )
  }
}

export default EntryPage
