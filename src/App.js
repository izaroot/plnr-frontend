// import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './Components/Login';
import NavBar from './Components/NavBar'

function App() {

  const [user, setUser] = useState(null)
  // Top Level Logic

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login setUser={setUser} />
        </Route>
        <Route exact path="/home">
          <NavBar user={user} setUser={setUser} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
