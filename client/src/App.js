import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
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
      <div className="App">
        <Route exact path="/" render={() => <Home updateUser={this.updateUser} />}/>
      </div>
    );
  }
}

export default App;
