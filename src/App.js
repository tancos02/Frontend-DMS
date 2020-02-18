import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Register from './register/Register';
import Login from './login/Login';
import Home from './components/Page/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Login}/>
	          <Route path="/register" exact component={Register}/>
            <Route path="/home" exact component={Home}/>
          </Switch>
        </div>
      </Router>
    );
  }
}
  
  export default App;
