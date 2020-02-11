import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar/navbar';
import Home from './Components/Home/home';
import EntryPage from './Components/EntryPage/entrypage'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

class App extends Component {

    //get all the propieties of the content

    state = {
      characters: [],
      isLoaded: false,
    }

  componentDidMount() {
    fetch('https://rickandmortyapi.com/api/character')
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
              <Route exact path="/" render={() => (<Redirect to="/entry" />)} />  
            </Switch>
          </BrowserRouter >
            {/*
            <h1>{this.state.characters[0].name}</h1>
            <img src={this.state.characters[0].image} alt={this.state.characters[0].name} />
            */}
         </div>
       </div>


      );
    }
  }
}



export default App;
