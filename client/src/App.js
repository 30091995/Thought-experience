import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'

class App extends Component {

  state = {
    loggedInUser: this.props.user
  }

  updateUser = (newUser) => {
    this.setState({
      loggedInUser: newUser
    })
  }

  render() {
    return (
      <div>
        <Route exact path="/" render={() => <Home updateUser={this.updateUser} />}/>
        <Route exact path="/login" render={() => <Login updateUser={this.updateUser} />}/>
      </div>
    );
  }
}

export default App;
