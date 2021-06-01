// import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LoginView from './Components/LoginView';
import NavBar from './Components/NavBar'

function App() {

  const [user, setUser] = useState(null)
  // Top Level Logic

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginView setUser={setUser} />
        </Route>
        <Route exact path="/home">
          <NavBar user={user} setUser={setUser} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
