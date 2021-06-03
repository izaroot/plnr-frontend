// import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom'
import LoginView from './Components/LoginView';
import HomeView from './Components/HomeView'
import NewTask from './Components/NewTask'
import NavBar from './Components/NavBar'

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
          result.user_tasks = result.user_tasks.map(task => ({...task, start_time: task.start_time.split(',') }))
          this.setState({user: result, loggedIn: true})
          this.props.history.push('/home')
        } else {
          alert(result.error)
        }
      })
  }

  handleLogout = () => {
    this.setState({
      user: {},
      loggedIn: false
    })
    this.props.history.push('/')
  }

  handleNewTask = (newTaskObj) => {
    this.setState(previousState => ({
      user: {
        ...previousState.user,
        user_tasks: [
          ...previousState.user.user_tasks,
          newTaskObj
        ]
      }
    }))
  }

  handlePageChange = (newUrl) => {this.props.history.push(newUrl)}

  handleRegister = (state) => {
    const {name, profile_img, birthdate, username, password} = state
    fetch(`${API}user=${username}`, {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        name,
        profile_img,
        birthdate,
        username,
        password
      })
    })
    .then(resp => resp.json())
    .then(newUser => {
      if(!newUser.error) {
        this.setState({user: newUser, loggedIn: true})
        this.handlePageChange('/home')
      } else {
        alert(newUser.error)
      }
    })
  }

  render(){
    return (
        <div>
          {this.state.loggedIn ? <NavBar handleLogout={this.handleLogout} /> : null}
          <Switch>
            <Route exact path="/">
              <LoginView handleRegister={this.handleRegister} handleLogin={this.handleLogin}/>
            </Route>
            <Route exact path="/home">
              <HomeView user={this.state.user} handleLogout={this.handleLogout} />
            </Route>
            <Route exact path="/newtask">
                <NewTask handlePageChange={this.handlePageChange} handleNewTask={this.handleNewTask} userId={this.state.user.id}/>
            </Route>
          </Switch>
        </div>
    )
  }
}

export default withRouter(App);
