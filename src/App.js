import React, { Component } from 'react';
import './App.css';


class App extends Component {

  constructor(props) {

    //get all the propieties of the content

    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {

    fetch('https://rickandmortyapi.com/api')
      .then(res => res.json())
      .then(json => {

        // set the state, manipulate that items

          this.setState ({
            isLoaded: true,
            items: json
          })
      });

  }

  render() {

    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div> Loading...</div>;

    }else {
      return(
        <div className="App">
            Data has been loaded
        </div>
      );
    }

  }
}


export default App;
