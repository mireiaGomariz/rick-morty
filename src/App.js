import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home/home';
import EntryPage from './Components/EntryPage/entrypage';
import { Route, Switch, Redirect } from 'react-router-dom';
import Game1 from './Components/Games/Game1/game1';
import Game2 from './Components/Games/Game2/game2';
import Instructions1 from './Components/Games/Game1/Instructions/instructions1';
import Instructions2 from './Components/Games/Game2/Instructions/instructions2';

const charactersObject = [
  {
  id:181,
  name:"Jessica's Friend",
  status:"Alive",
  image:"https://rickandmortyapi.com/api/character/avatar/181.jpeg",
  url:"https://rickandmortyapi.com/api/character/181",
  },

  {
  id:182,
  name:"Jim",
  status:"Alive",
  image:"https://rickandmortyapi.com/api/character/avatar/182.jpeg",
  url:"https://rickandmortyapi.com/api/character/182",
  },

  {
  id:183,
  name:"Johnny Depp",
  status:"Alive",
  image:"https://rickandmortyapi.com/api/character/avatar/183.jpeg",
  url:"https://rickandmortyapi.com/api/character/183",
  },

  {
  id:184,
  name:"Jon",
  status:"Alive",
  image:"https://rickandmortyapi.com/api/character/avatar/184.jpeg",
  url:"https://rickandmortyapi.com/api/character/184",
},

  {
  id:185,
  name:"Joseph Eli Lipkip",
  status:"Alive",
  image:"https://rickandmortyapi.com/api/character/avatar/185.jpeg",
  url:"https://rickandmortyapi.com/api/character/185",
},

  {
  id:186,
  name:"Joyce Smith",
  status:"Alive",
  image:"https://rickandmortyapi.com/api/character/avatar/186.jpeg",
  url:"https://rickandmortyapi.com/api/character/186",
},
  {
  id:187,
  name:"Juggling Rick",
  status:"unknown",
  image:"https://rickandmortyapi.com/api/character/avatar/187.jpeg",
  url: "https://rickandmortyapi.com/api/character/187"
},
  {
  id:188,
  name:"Karen Entity",
  status:"Alive",
  image:"https://rickandmortyapi.com/api/character/avatar/188.jpeg",
  url:"https://rickandmortyapi.com/api/character/188",
  },
  {
  id:189,
  name:"Katarina",
  status:"Dead",
  image:"https://rickandmortyapi.com/api/character/avatar/189.jpeg",
  url:"https://rickandmortyapi.com/api/character/189"
},
  {
  id:190,
  name:"Keara",
  status:"Alive",
  image:"https://rickandmortyapi.com/api/character/avatar/190.jpeg",
  url:"https://rickandmortyapi.com/api/character/190",
  },
  {
  id:191,
  name:"Kevin",
  status:"Dead",
  image:"https://rickandmortyapi.com/api/character/avatar/191.jpeg",
  url:"https://rickandmortyapi.com/api/character/191",
  },
  {
  id:192,
  name:"King Flippy Nips",
  status:"Alive",
  image:"https://rickandmortyapi.com/api/character/avatar/192.jpeg",
  url:"https://rickandmortyapi.com/api/character/192",
  },
  {
  id:193,
  name:"King Jellybean",
  status:"Dead",
  image:"https://rickandmortyapi.com/api/character/avatar/193.jpeg",
  url:"https://rickandmortyapi.com/api/character/193",
  },
  {
  id:194,
  name:"Kozbian",
  status:"Alive",
  image:"https://rickandmortyapi.com/api/character/avatar/194.jpeg",
  url:"https://rickandmortyapi.com/api/character/194",
  },
  {
  id:195,
  name:"Kristen Stewart",
  status:"Alive",
  image:"https://rickandmortyapi.com/api/character/avatar/195.jpeg",
  url:"https://rickandmortyapi.com/api/character/195",
  },
  {
  id:196,
  name:"Krombopulos Michael",
  status:"Dead",
  species:"Alien",
  image:"https://rickandmortyapi.com/api/character/avatar/196.jpeg",
  url:"https://rickandmortyapi.com/api/character/196"
  },
  {
  id:197,
  name:"Kyle",
  status:"Dead",
  image:"https://rickandmortyapi.com/api/character/avatar/197.jpeg",
  url:"https://rickandmortyapi.com/api/character/197",
  },
  {
  id:198,
  name:"Lady Katana",
  status:"Dead",
  image:"https://rickandmortyapi.com/api/character/avatar/198.jpeg",
  url:"https://rickandmortyapi.com/api/character/198",
  },
  {
  id:199,
  name:"Larva Alien",
  status:"Alive",
  image:"https://rickandmortyapi.com/api/character/avatar/199.jpeg",
  url:"https://rickandmortyapi.com/api/character/199",
  },
  {
  id:200,
  name:"Lawyer Morty",
  status:"unknown",
  image:"https://rickandmortyapi.com/api/character/avatar/200.jpeg",
  url:"https://rickandmortyapi.com/api/character/200"
  }
]


const username = "";
class App extends Component {
  state = {
    characters: [],
    pageIndex: Math.floor(Math.random() * 19) + 1,
    // isLoaded: false,
    userNameReady: false,
    error: ""
  }

  componentDidMount() {
    fetch(`https://rickandmortyapi.com/api/character/?page=${this.state.pageIndex}`)
      .then(res => {
        if(res.ok) {
          // throw new Error(
          //   `There was here was a problem with your request. Error code: ${
          //     res.status
          //   }, ${res.statusText}`
          // );
          this.setState ({
            isLoaded: true,
            characters: charactersObject
          })
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
   this.username = event.target.value;
   localStorage.setItem(username, {username})
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
                  checkUserReady={this.checkUserReady} handleChange={this.handleChange} username={this.username}/>} />
                <Route path="/home" component={Home} />
                <Route
                  path='/game1'
                  render={(props) => <Game1 {...props} username={this.username} characters={this.state.characters} />}
                />
                <Route
                  path="/instructions1"
                  render={(props) => <Instructions1 {...props} username={this.username}/>}
                />
                <Route
                  path="/instructions2"
                  render={(props) => <Instructions2 {...props} username={this.username} test={'test'}/>}
                />
                <Route
                  path='/game2'
                  render={(props) => <Game2 {...props} characters={this.state.characters} username={this.username} />}
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
