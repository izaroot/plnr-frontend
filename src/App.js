// import './App.css';
import { Component, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LoginView from './Components/LoginView';
import HomeView from './Components/HomeView'

class App extends Component {

  state = {
    user: {}
  }
  // Top Level Logic

  render(){
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginView setUser={setUser} />
        </Route>
        <Route exact path="/home">
          <HomeView user={user} setUser={setUser} />
        </Route>
      </Switch>
    </Router>
  )

  }

}

export default App;
