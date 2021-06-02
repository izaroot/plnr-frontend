// import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom'
import LoginView from './Components/LoginView';
import HomeView from './Components/HomeView'

const API = "http://localhost:9292/"



class App extends Component {
  
  state = {
    user: {},
    loggedIn: false
  }
  
  handleLogin = (state) => {
    fetch(`${API}user=${state.username}&${state.password}`)
      .then(res => res.json())
      .then(result => {
        if(!result.error) {
          this.setState({user: result, loggedIn: true})
          this.props.history.push('/home')
        } else {
          alert(result.error)
        }
      })
  }
  // Top Level Logic

  render(){
    return (
        <Switch>
          <Route exact path="/">
             <LoginView handleLogin={this.handleLogin}/>
          </Route>
          <Route exact path="/home">
            <HomeView user={this.state.user} />
          </Route>
        </Switch>
    )
  }
}

export default withRouter(App);
