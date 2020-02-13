import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Home/Navbar/navbar';
import Home from './Components/Home/home';
import EntryPage from './Components/EntryPage/entrypage';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Game1 from './Components/Games/Game1/game1'
import Game2 from './Components/Games/Game2/game2'

class App extends Component {

    //get all the propieties of the content

    state = {
      characters: [],
      isLoaded: false,
    }

  componentDidMount() {
    fetch('https://rickandmortyapi.com/api/character/?page=1')
      .then(res => res.json())
      .then(json => {

        // set the state, manipulate that items

          this.setState ({
            isLoaded: true,
            characters: json.results
          })
      });
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
              <Route path="/entry" component={EntryPage} />
              <Route path="/home" component={Home} />
              <Route
                path='/game1'
                render={(props) => <Game1 {...props} characters={this.state.characters} />}
              />
              <Route path="/game2" component={Game2} />
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
