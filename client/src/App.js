import React, { Component } from 'react';
import './App.css';
import Players from './components/Players';
import Addguest from './components/Addguest'

class App extends Component {
  constructor() {
    super()
    this.state = {
      seated: [],
      waiting: []
    }
    this.getAllSeats = this.getAllSeats.bind(this);
    this.deleteGuest = this.deleteGuest.bind(this);
    this.addGuest = this.addGuest.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    })
  }

  deleteGuest = (id, specificList) => {
    fetch(`/api/seats/deleteguest/${id}/${specificList}`, { method: 'DELETE' })
    .then( res => res.json() )
    .then( info => { 
      if (specificList === "seated") {
        return this.setState({ seated: info })
      }
      else {
        return this.setState({ waiting: info })
      }
    })
  }

  addGuest = (name, phone) => {
    fetch(`/api/seats/createguest`, { 
      method: 'POST',
      body: JSON.stringify({ name: name, phone: phone }) ,
      headers: { "Content-Type": "application/json" }  
    })
    .then(res => res.json())
    .then( content => {
      if ((this.state.seated).length < 5) {
        return this.setState({ seated: content })
      } else {
        return this.setState({ waiting: content })
      }
    })
  }



  handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target[0].value)
    console.log(event.target.userPhone.value)
    let addName = event.target[0].value
    let addPhone = event.target.userPhone.value
    event.target[0].value = ""
    event.target[1].value = ""
    this.addGuest(addName, addPhone)
  }







  render() {
    return (
      <div className="App">
        <nav>
          <div className="nav-wrapper">
            <a href="http://www.google.com" className="brand-logo center">The Banquet Seater</a>
          </div>
        </nav>
        <h2>Manage all guest below</h2>
        <h3>Please add a guest to VIP<span><Addguest addGuest={this.addGuest} handleSubmit={this.handleSubmit}/></span></h3>
        <h3>Seated Guest(s) -max of 5 - Total: {(this.state.seated).length}</h3>
        <Players seatedStatus={this.state.seated} deleteGuest={this.deleteGuest} status="seated"/>
        <h3>Waiting Guests(s) - Total: {(this.state.waiting).length}</h3>
        <Players seatedStatus={this.state.waiting} deleteGuest={this.deleteGuest} status="waiting"/>

      </div>
    );
  }
}

export default App;
