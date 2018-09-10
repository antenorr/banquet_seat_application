import React, { Component } from 'react';
import './App.css';
import Players from './components/Players';

class App extends Component {
  constructor() {
    super()
    this.state = {
      seated: [],
      waiting: []
    }
    this.getAllSeats = this.getAllSeats.bind(this);
    this.deleteGuest = this.deleteGuest.bind(this);
  }

  componentDidMount() {
    this.getAllSeats();
  }

  getAllSeats = () => {
    fetch('/api/seats')
    .then( (res) => res.json() )// this step turns it into a js object
    .then( data => {
      // console.log(data)
      this.setState({ 
        seated: data.seated,
        waiting: data.waiting
      })
    } )
  }

  deleteGuest = (id, specificList) => {
    fetch(`/api/seats/deleteguest/${id}/${specificList}`, { method: 'DELETE' })
    .then( res => res.json() )
    .then( info => { 
      this.setState.specificList = info
    })
  }








  render() {
    return (
      <div className="App">
        <nav>
          <div className="nav-wrapper">
            <a href="http://www.google.com" className="brand-logo center">The Banquet Seater</a>
          </div>
        </nav>
        <h1>Im working now!I'm reacting!!</h1>
        <h3>Seated Guest(s) - Total: {(this.state.seated).length}</h3>
        <Players seatedStatus={this.state.seated} deleteGuest={this.deleteGuest} />
        <h3>Waiting Guests(s) - Total: {(this.state.waiting).length}</h3>
        <Players seatedStatus={this.state.waiting} deleteGuest={this.deleteGuest}/>
       


      </div>
    );
  }
}

export default App;
