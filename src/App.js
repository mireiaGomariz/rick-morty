import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Home/Navbar/navbar';
import Home from './Components/Home/home';
import EntryPage from './Components/EntryPage/entrypage';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Game1 from './Components/Games/Game1/game1'
import Game2 from './Components/Games/Game2/game2'

class App extends Component {
  state = {
    characters: [],
    pageIndex: Math.floor(Math.random() * 19) + 1,
    isLoaded: false,
    username: "",
    userNameReady: false,
    userNameList: [],
  }

  componentDidMount() {
    fetch(`https://rickandmortyapi.com/api/character/?page=${this.state.pageIndex}`)
      .then(res => res.json())
      .then(json => {

          this.setState ({
            isLoaded: true,
            characters: json.results
          })
      });

  }

  handleChange = (event) => {
   this.setState({username: event.target.value});
 }

 handleSubmit = (event) => {
   event.preventDefault();

 }

 test = () => {
   this.setState({userNameReady: true})
  }

  render() {
    if (this.state.isLoaded === false) {
      return <div> Loading...</div>;

    }else {
      return(
        <div>
          <script src="https://unpkg.com/react-router-dom/umd/react-router-dom.min.js"></script>
          <div className="App">
          <BrowserRouter >
            <Switch>
              <Route path="/entry"
                render={(props) => <EntryPage {...props} handleSubmit={this.handleSubmit} userNameReady={this.state.userNameReady}
                test={this.test} handleChange={this.handleChange} username={this.state.username}/>} />
              <Route path="/home" component={Home} />
              <Route
                path='/game1'
                render={(props) => <Game1 {...props} characters={this.state.characters} />}
              />
              <Route
                path='/game2'
                render={(props) => <Game2 {...props} characters={this.state.characters} />}
              />
              <Route exact path="/" render={() => (<Redirect to="/entry" />)} />
            </Switch>
          </BrowserRouter >
         </div>
       </div>
      );
    }
  }
}



export default App;
