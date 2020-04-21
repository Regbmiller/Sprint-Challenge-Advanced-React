import React from "react";
import Navbar from "./components/Navbar";

class App extends React.Component {
  state = {
     players: []
  }

  componentDidMount() {
    fetch(`http://localhost:5000/api/players`)
      .then((res) => res.json())
      .then((res) => this.setState({ players: res }))
      .catch((err) => console.log(err))
    }
 
    render() {
      const { players } = this.state;
      return (
        <div>
        <Navbar/>
         <h1>Players</h1> 
          {players.map((player) => (
            <div>
              <h2>Player: {player.name}</h2>
              <h3>Country: {player.country}</h3>
            </div>
          ))}
       </div>
      )}
};

export default App;