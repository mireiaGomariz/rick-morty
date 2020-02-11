import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar/navbar';
import Home from './Components/Home/home';
import EntryPage from './Components/EntryPage/entrypage'





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
        <div className="App">

        < EntryPage/>

        //   < Navbar/>
        //
        //   < Home />
        //
        //   <h1>{this.state.characters[0].name}</h1>
        //   <img src={this.state.characters[0].image} alt={this.state.characters[0].name} />
       </div>
      );
    }

  }
}



export default App;
