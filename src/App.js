// import './App.css';
import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LoginView from './Components/LoginView';
import HomeView from './Components/HomeView'

const API = "http://localhost:9292/"



class App extends Component {
  
  state = {
    user: null
  }
  
  handleLogin = (state) => {
    fetch(`${API}user=${state.username}&${state.password}`)
      .then(res => res.json())
      .then(result => {
        if(!result.error) {
          this.setState({user: result})
        } else {
          alert(result.error)
        }
      })
  }
  // Top Level Logic

  render(){
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <LoginView handleLogin={this.handleLogin} />
          </Route>
          <Route exact path="/home">
            <HomeView user={this.state.user} />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
