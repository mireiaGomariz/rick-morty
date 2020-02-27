import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home/home';
import EntryPage from './Components/EntryPage/entrypage';
import { Route, Switch, Redirect } from 'react-router-dom';
import Game1 from './Components/Games/Game1/game1';
import Game2 from './Components/Games/Game2/game2';
import Instructions1 from './Components/Games/Game1/Instructions/instructions1';
import Instructions2 from './Components/Games/Game2/Instructions/instructions2';


class App extends Component {
  state = {
    characters: [],
    pageIndex: Math.floor(Math.random() * 19) + 1,
    // isLoaded: false,
    username: "",
    userNameReady: false,
    error: ""
  }

  componentDidMount() {
    fetch(`https://rickandmortyapi.com/api/character/?page=${this.state.pageIndex}`)
      .then(res => {
        if(!res.ok) {
          throw new Error(
            `There was here was a problem with your request. Error code: ${
              res.status
            }, ${res.statusText}`
          );
        }
        return res.json();

      })
      .then(json => {

          this.setState ({
            isLoaded: true,
            characters: json.results
          })
      })
      .catch(error => {
        let errorString = `Your fetch request didn't work, it returned the following: ${error.toString()}`;
        this.setState({
          error: errorString
        });
      });

  }

  handleChange = (event) => {
   this.setState({username: event.target.value});
 }

 handleSubmit = (event) => {
   event.preventDefault();

 }

 checkUserReady = () => {
   this.setState({userNameReady: true})
  }

  render() {
    // if (this.state.isLoaded === false) {
    //   return <div> Loading...</div>;
    //
    // }else {
      return(
        <div>
        {this.state.error ? (
          this.state.error
        ) : (
          <div>
          <div className="App">

              <Switch>
                <Route path="/entry"
                  render={(props) => <EntryPage {...props} handleSubmit={this.handleSubmit} userNameReady={this.state.userNameReady}
                  checkUserReady={this.checkUserReady} handleChange={this.handleChange} username={this.state.username}/>} />
                <Route path="/home" component={Home} />
                <Route
                  path='/game1'
                  render={(props) => <Game1 {...props} characters={this.state.characters} />}
                />
                <Route
                  path="/instructions1"
                  render={(props) => <Instructions1 {...props} username={this.state.username}/>}
                />
                <Route
                  path="/instructions2"
                  render={(props) => <Instructions2 {...props} username={this.state.username} test={'test'}/>}
                />
                <Route
                  path='/game2'
                  render={(props) => <Game2 {...props} characters={this.state.characters} username={this.state.username} />}
                />
                <Route exact path="/" render={() => (<Redirect to="/entry" />)} />
              </Switch>

         </div>
         </div>
         )}

       </div>
      );
    }
  }




export default App;
